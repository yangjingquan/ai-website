import { chmod, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { resolve, join } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = resolve(import.meta.dirname, '..')
const dist = join(root, 'dist')
const template = await readFile(join(dist, 'index.html'), 'utf8')
const serverOutput = join(dist, '.ssr')

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}

function replaceTag(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error(`Missing HTML tag: ${pattern}`)
  return html.replace(pattern, replacement)
}

async function makeStaticFilesReadable(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) {
      await chmod(path, 0o755)
      await makeStaticFilesReadable(path)
    } else if (entry.isFile()) {
      await chmod(path, 0o644)
    }
  }
}

try {
  const { render, prerenderPaths } = await import(pathToFileURL(join(serverOutput, 'entry-server.js')).href)
  for (const path of prerenderPaths) {
    const { html, metadata } = await render(path)
    let page = replaceTag(template, /<div id="app"><\/div>/, `<div id="app">${html}</div>`)
    page = replaceTag(page, /<title>[^<]*<\/title>/, `<title>${escapeAttribute(metadata.title)}</title>`)
    page = replaceTag(page, /<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeAttribute(metadata.description)}" />`)
    page = replaceTag(page, /<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${escapeAttribute(metadata.canonical)}" />`)
    for (const [name, value] of Object.entries({
      'og:title': metadata.title,
      'og:description': metadata.description,
      'og:url': metadata.canonical,
      'og:image': metadata.image
    })) {
      page = replaceTag(page, new RegExp(`<meta property="${name}" content="[^"]*"\\s*\\/>`), `<meta property="${name}" content="${escapeAttribute(value)}" />`)
    }
    if (path === '/404') page = page.replace('</head>', '    <meta name="robots" content="noindex,follow" />\n  </head>')
    const output = path === '/' ? join(dist, 'index.html') : join(dist, path.slice(1), 'index.html')
    await mkdir(resolve(output, '..'), { recursive: true })
    await writeFile(output, page)
    console.log(`Prerendered ${path}`)
  }
  await makeStaticFilesReadable(dist)
} finally {
  await rm(serverOutput, { recursive: true, force: true })
}
