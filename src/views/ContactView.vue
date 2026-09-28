<template>
  <main class="site content-page contact-page" id="site" tabindex="-1">
    <div class="wrap"><SiteNav /><section class="content-hero" aria-labelledby="contact-page-title"><div><div class="eyebrow">业务评估 · 系统升级 · 合作咨询</div><h1 id="contact-page-title">不用先写需求文档，先说出最麻烦的业务环节。</h1><p class="content-lead">它每天让谁花时间、出现什么错误、影响什么结果？从这个问题出发，再判断适合做流程梳理、新系统开发，还是现有系统优化。</p><div class="hero-actions"><a class="btn primary" href="#form-section">描述你的问题</a><a class="btn secondary" href="#channels">查看联系入口</a></div></div><div class="hero-summary"><span>咨询前准备</span><strong>当前问题 · 现有工具 · 希望改善的结果</strong><p>有表格、截图、旧系统或参考链接即可开始。</p><div class="summary-line"><b>沟通时间</b><span>中国标准时间（UTC+8）</span></div><div class="summary-line"><b>回复方式</b><span>按需求内容通过你留下的联系方式联系</span></div></div></section></div>

    <section class="section" id="channels" aria-labelledby="channel-title"><div class="wrap"><div class="section-head"><h2 id="channel-title" class="section-title">联系入口</h2><p class="section-subtitle">根据沟通习惯选择联系方式，需求文档和截图建议通过邮箱发送。</p></div><div class="channel-grid"><article class="channel-card channel-card--wechat"><div class="icon">微</div><h3>微信</h3><WechatQr hint="扫码后请备注：项目咨询" /><p>适合快速发送消息、截图和项目资料。</p></article><article class="channel-card channel-card--plain"><div class="icon">邮</div><h3>邮箱</h3><strong>yangjq_1991@163.com</strong><p>适合发送需求文档、截图和报价资料。</p><a class="text-link" href="mailto:yangjq_1991@163.com">发送邮件 →</a></article><article class="channel-card channel-card--plain"><div class="icon">电</div><h3>手机 / 电话</h3><strong>18201117988</strong><p>适合快速沟通项目背景、预算和上线时间。</p><a class="text-link" href="tel:18201117988">拨打电话 →</a></article></div></div></section>

    <section class="section" aria-labelledby="prepare-title"><div class="wrap"><div class="section-head"><h2 id="prepare-title" class="section-title">沟通时提供这 4 类信息，就能更快找到改进方向</h2><p class="section-subtitle">不需要每一项都完整；越接近真实业务现场，后续范围、报价和排期越容易确认。</p></div><div class="prepare-grid"><article class="prepare-card"><span>01</span><h3>最麻烦的业务现场</h3><p>你做什么业务，当前哪一步最影响效率、收入或客户体验，通常靠谁手工处理。</p></article><article class="prepare-card"><span>02</span><h3>希望发生的变化</h3><p>例如少一次重复录入、订单能追踪、客户资料不丢、库存能对上或报表自动生成。</p></article><article class="prepare-card"><span>03</span><h3>现有系统和资料</h3><p>正在用 Excel、ERP、CRM、Java/PHP 老系统还是第三方工具；有截图、流程图或链接都可以提供。</p></article><article class="prepare-card"><span>04</span><h3>时间和预算</h3><p>期望先解决的问题、上线时间、预算范围，以及是否需要持续维护或自动化支持。</p></article></div></div></section>

    <section class="section soft-section" id="form-section" aria-labelledby="form-title">
      <div class="wrap">
        <div class="section-head">
          <h2 id="form-title" class="section-title">描述你目前最麻烦的业务问题</h2>
          <p class="section-subtitle">首轮只需填写称呼、联系方式和问题描述；需求方向、预算、时间和资料都可以之后再补充。</p>
        </div>
        <aside class="consultation-boundary" aria-label="初步沟通与付费需求梳理的服务边界">
          <div>
            <strong>初步沟通</strong>
            <p>用于了解当前问题并判断是否适合合作，不包含完整需求方案。</p>
          </div>
          <div>
            <strong>需求梳理包：￥2,000 起</strong>
            <p>如需功能清单、首期范围和排期建议，可另行确认后开展。</p>
            <a href="/pricing#package-title">查看服务说明 →</a>
          </div>
        </aside>
        <form class="contact-form" novalidate @submit.prevent="submitForm">
          <div class="form-grid">
            <label>
              <span>称呼 <b>*</b></span>
              <input id="contact-name" v-model.trim="form.name" type="text" autocomplete="name" placeholder="例如：张先生" required :aria-invalid="touched && !form.name" :aria-describedby="touched && !form.name ? 'contact-name-error' : undefined">
              <small v-if="touched && !form.name" id="contact-name-error">请填写称呼</small>
            </label>
            <label>
              <span>联系方式 <b>*</b></span>
              <input id="contact-method" v-model.trim="form.contact" type="text" autocomplete="off" placeholder="微信、手机或邮箱，任选一种" required :aria-invalid="touched && !form.contact" :aria-describedby="touched && !form.contact ? 'contact-method-error' : undefined">
              <small v-if="touched && !form.contact" id="contact-method-error">请填写至少一种联系方式</small>
            </label>
            <label>
              <span>需求方向（可选）</span>
              <select v-model="form.projectType">
                <option value="">请选择</option>
                <option v-for="type in projectTypes" :key="type">{{ type }}</option>
              </select>
            </label>
            <label>
              <span>你从哪里了解到我（可选）</span>
              <input v-model.trim="form.source" type="text" maxlength="120" autocomplete="off" placeholder="例如：朋友推荐、搜索或某个案例页">
            </label>
            <label>
              <span>预算范围（可选）</span>
              <select v-model="form.budget">
                <option value="">请选择</option>
                <option>￥2,000—￥10,000</option>
                <option>￥10,000—￥50,000</option>
                <option>￥50,000 以上</option>
                <option>暂不确定</option>
              </select>
            </label>
            <label>
              <span>期望上线时间（可选）</span>
              <select v-model="form.timeline">
                <option value="">请选择</option>
                <option>1 个月内</option>
                <option>1—3 个月</option>
                <option>3 个月以上</option>
                <option>时间待定</option>
              </select>
            </label>
            <label>
              <span>现有资料（可选）</span>
              <select v-model="form.materials">
                <option value="">请选择</option>
                <option>有原型或设计稿</option>
                <option>有 Excel / 报表</option>
                <option>有旧系统或接口文档</option>
                <option>有需求文档</option>
                <option>暂无资料</option>
              </select>
            </label>
          </div>
          <label class="form-field">
            <span>当前最麻烦的业务问题 <b>*</b></span>
            <textarea id="contact-message" v-model.trim="form.message" rows="5" placeholder="说说哪一步最耗时、容易出错或影响客户；例如：订单靠微信群确认，经常漏发。" required :aria-invalid="touched && !form.message" :aria-describedby="touched && !form.message ? 'contact-message-error' : undefined"></textarea>
            <small v-if="touched && !form.message" id="contact-message-error">请描述当前最麻烦的业务环节</small>
          </label>
          <label class="consent-field">
            <input id="contact-consent" v-model="form.consent" type="checkbox" required :aria-invalid="touched && !form.consent" :aria-describedby="touched && !form.consent ? 'contact-consent-error' : undefined">
            <span>我已阅读并同意<a href="/privacy">隐私与服务说明</a>，了解提交的信息仅用于需求沟通。 <b>*</b></span>
          </label>
          <p v-if="touched && !form.consent" id="contact-consent-error" class="form-error">请先同意隐私说明</p>
          <div class="form-actions">
            <button class="btn primary" type="submit" :disabled="submitting">{{ submitting ? '提交中…' : '提交业务问题' }}</button>
            <span v-if="submitted" class="form-success" role="status" aria-live="polite">已收到你的信息，我会按你留下的联系方式继续沟通。需要补充资料时，可通过邮箱或微信发送。</span>
            <span v-if="submitError" class="form-error" role="alert">{{ submitError }} 表单内容已保留，可重试，或通过<a href="mailto:yangjq_1991@163.com">邮件</a>、<a href="#channels">微信</a>联系。</span>
          </div>
          <p class="contact-form-note">{{ submitted ? '信息已发送并由服务器确认接收。' : '提交后，表单信息会发送至工作室服务器，仅用于需求沟通。' }}</p>
        </form>
      </div>
    </section>

    <section class="contact-section" id="contact"><div class="wrap"><div class="contact-panel"><div><h2>不确定从哪里开始？先描述最麻烦的业务环节。</h2><p>我会先帮你判断问题属于流程梳理、系统开发，还是已有系统优化、报表与自动化改进。</p></div><a class="btn dark" href="#form-section">描述你的问题</a></div></div></section>
    <SiteFooter text="纳启字节信息技术工作室 · 联系工作室" />
  </main>
</template>

<script setup>
import { nextTick, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import SiteNav from '../components/SiteNav.vue'
import SiteFooter from '../components/SiteFooter.vue'
import WechatQr from '../components/WechatQr.vue'

const route = useRoute()
const projectTypes = [
  '新建小程序 / APP',
  '制造 / ERP / 内部管理',
  'CRM / 客户管理',
  '电商 / 交易系统',
  'Java / PHP 老系统维护升级',
  '数据报表 / AI 自动化',
  '其他业务系统',
]
const queryText = (value) => typeof value === 'string' ? value.trim() : ''
const requestedProjectType = queryText(route.query.projectType)
const form = reactive({
  name: '',
  contact: '',
  projectType: projectTypes.includes(requestedProjectType) ? requestedProjectType : '',
  source: queryText(route.query.source).slice(0, 120),
  budget: '',
  timeline: '',
  materials: '',
  message: '',
  consent: false,
})
const touched = ref(false)
const submitted = ref(false)
const submitting = ref(false)
const submitError = ref('')
const createIdempotencyKey = () => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  return `contact-${Date.now()}-${Math.random().toString(36).slice(2)}`
}
const idempotencyKey = ref(createIdempotencyKey())
// Keep the browser request same-origin by default. Vite (and the production
// web server) can proxy /api to the API host, so the browser does not need
// CORS permission from wbapi.nexbyte.top.
const apiEndpoint = import.meta.env.VITE_CONTACT_API_URL || '/api/public/contact-submissions'

async function submitForm() {
  touched.value = true
  submitted.value = false
  submitError.value = ''
  if (!form.name || !form.contact || !form.message || !form.consent) {
    await nextTick()
    document.querySelector('.contact-form [aria-invalid="true"]')?.focus()
    return
  }

  submitting.value = true
  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Idempotency-Key': idempotencyKey.value,
      },
      body: JSON.stringify({
        name: form.name,
        contact: form.contact,
        project_type: form.projectType,
        source: form.source,
        budget: form.budget,
        timeline: form.timeline,
        materials: form.materials,
        message: form.message,
        consent: form.consent,
      }),
    })
    const result = await response.json().catch(() => null)
    if (!response.ok || result?.code !== 0) {
      throw new Error(result?.msg || result?.detail || '提交失败，请稍后重试')
    }
    submitted.value = true
    idempotencyKey.value = createIdempotencyKey()
  } catch (error) {
    submitError.value = error instanceof TypeError
      ? '网络连接失败，提交暂未成功。'
      : error instanceof Error ? error.message : '提交暂未成功，请稍后重试。'
  } finally {
    submitting.value = false
  }
}

</script>
