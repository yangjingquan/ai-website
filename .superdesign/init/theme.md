# Theme summary

- Framework: Vue 3 + Vite; CSS: custom vanilla CSS in `src/styles/site.css`.
- Canvas: 1440px site, 1180px content wrap, pale blue-gray background with 48px grid.
- Colors: `--ink #0f172a`, `--muted #64748b`, `--soft #f5f8fb`, `--line #dce7ef`, `--teal #0f766e`, `--teal-2 #14b8a6`, `--blue #2563eb`, `--amber #f59e0b`, `--coral #f97316`, `--green #16a34a`, `--white #fff`.
- Type: PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Arial; hero 70px/1.06 900; section 40px/1.18 900; body 15-21px with 1.55-1.75 line height.
- Shape: mostly 8px radius; pills 999px. Shadows are soft blue-black, typically `0 16px 52px rgba(15,23,42,.058)`.
- Responsive tokens: current stylesheet has desktop-first fixed widths and responsive overrides near the end; redesign should retain 1180px max content and add usable mobile stacking.

## Source

The complete stylesheet is `src/styles/site.css` (4185 lines at init time), imported from `src/main.js`. Preserve the existing token values unless the user approves a visual direction change. The active UI uses cards, large typography, teal/blue accents, dark dashboard sections, rounded 8px corners, and no external icon library.
