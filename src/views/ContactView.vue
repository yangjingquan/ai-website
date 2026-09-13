<template>
  <main class="site content-page contact-page" id="site" tabindex="-1">
    <div class="wrap"><SiteNav /><section class="content-hero" aria-labelledby="contact-page-title"><div><div class="eyebrow">业务评估 · 系统升级 · 合作咨询</div><h1 id="contact-page-title">不用先写需求文档，先说出最麻烦的业务环节。</h1><p class="content-lead">它每天让谁花时间、出现什么错误、影响什么结果？从这个问题出发，再判断适合做流程梳理、新系统开发，还是现有系统优化。</p><div class="hero-actions"><a class="btn primary" href="#form-section">描述你的问题</a><a class="btn secondary" href="#channels">查看联系入口</a></div></div><div class="hero-summary"><span>咨询前准备</span><strong>当前问题 · 现有工具 · 希望改善的结果</strong><p>有表格、截图、旧系统或参考链接即可开始。</p><div class="summary-line"><b>沟通时间</b><span>中国标准时间（UTC+8）</span></div><div class="summary-line"><b>回复方式</b><span>工作日优先回复</span></div></div></section></div>

    <section class="section" id="channels" aria-labelledby="channel-title"><div class="wrap"><div class="section-head"><h2 id="channel-title" class="section-title">联系入口</h2><p class="section-subtitle">根据沟通习惯选择联系方式，需求文档和截图建议通过邮箱发送。</p></div><div class="channel-grid"><article class="channel-card channel-card--wechat"><div class="icon">微</div><h3>微信</h3><WechatQr hint="扫码后请备注：项目咨询" /><p>适合快速发送消息、截图和项目资料。</p></article><article class="channel-card channel-card--plain"><div class="icon">邮</div><h3>邮箱</h3><strong>yangjq_1991@163.com</strong><p>适合发送需求文档、截图和报价资料。</p><a class="text-link" href="mailto:yangjq_1991@163.com">发送邮件 →</a></article><article class="channel-card channel-card--plain"><div class="icon">电</div><h3>手机 / 电话</h3><strong>18201117988</strong><p>适合快速沟通项目背景、预算和上线时间。</p><a class="text-link" href="tel:18201117988">拨打电话 →</a></article></div></div></section>

    <section class="section" aria-labelledby="prepare-title"><div class="wrap"><div class="section-head"><h2 id="prepare-title" class="section-title">沟通时提供这 4 类信息，就能更快找到改进方向</h2><p class="section-subtitle">不需要每一项都完整；越接近真实业务现场，后续范围、报价和排期越容易确认。</p></div><div class="prepare-grid"><article class="prepare-card"><span>01</span><h3>最麻烦的业务现场</h3><p>你做什么业务，当前哪一步最影响效率、收入或客户体验，通常靠谁手工处理。</p></article><article class="prepare-card"><span>02</span><h3>希望发生的变化</h3><p>例如少一次重复录入、订单能追踪、客户资料不丢、库存能对上或报表自动生成。</p></article><article class="prepare-card"><span>03</span><h3>现有系统和资料</h3><p>正在用 Excel、ERP、CRM、Java/PHP 老系统还是第三方工具；有截图、流程图或链接都可以提供。</p></article><article class="prepare-card"><span>04</span><h3>时间和预算</h3><p>期望先解决的问题、上线时间、预算范围，以及是否需要持续维护或自动化支持。</p></article></div></div></section>

    <section class="section soft-section" id="form-section" aria-labelledby="form-title"><div class="wrap"><div class="section-head"><h2 id="form-title" class="section-title">描述你的问题</h2><p class="section-subtitle">填写基础信息即可。我会优先判断问题属于流程梳理、新系统开发，还是现有系统维护、报表与自动化优化。</p></div><form class="contact-form" novalidate @submit.prevent="submitForm"><div class="form-grid"><label><span>联系人 <b>*</b></span><input v-model.trim="form.name" type="text" autocomplete="name" placeholder="例如：张先生" required><small v-if="touched && !form.name">请填写联系人</small></label><label><span>联系方式 <b>*</b></span><input v-model.trim="form.contact" type="text" autocomplete="off" placeholder="微信、手机或邮箱" required><small v-if="touched && !form.contact">请填写至少一种联系方式</small></label><label><span>需求方向</span><select v-model="form.projectType"><option value="">请选择</option><option>新建小程序 / APP</option><option>制造 / ERP / 内部管理</option><option>CRM / 客户管理</option><option>电商 / 交易系统</option><option>Java / PHP 老系统维护升级</option><option>数据报表 / AI 自动化</option><option>其他业务系统</option></select></label><label><span>预算范围（可选）</span><select v-model="form.budget"><option value="">请选择</option><option>￥2,000—￥10,000</option><option>￥10,000—￥50,000</option><option>￥50,000 以上</option><option>暂不确定</option></select></label><label><span>期望上线时间</span><select v-model="form.timeline"><option value="">请选择</option><option>1 个月内</option><option>1—3 个月</option><option>3 个月以上</option><option>时间待定</option></select></label><label><span>现有资料（可选）</span><select v-model="form.materials"><option value="">请选择</option><option>有原型或设计稿</option><option>有 Excel / 报表</option><option>有旧系统或接口文档</option><option>有需求文档</option><option>暂无资料</option></select></label></div><label class="form-field"><span>问题描述 <b>*</b></span><textarea v-model.trim="form.message" rows="6" placeholder="例如：订单靠微信群确认，经常漏发；销售离职后客户记录找不到；库存靠 Excel 维护，经常超卖。请说明最想先改善的环节、现有工具和期望结果。" required></textarea><small v-if="touched && !form.message">请描述当前最麻烦的业务环节</small></label><label class="consent-field"><input v-model="form.consent" type="checkbox"><span>我已阅读并同意<a href="/privacy">隐私与服务说明</a>，了解联系信息仅用于需求沟通。 <b>*</b></span></label><p v-if="touched && !form.consent" class="form-error">请先同意隐私说明</p><div class="form-actions"><button class="btn primary" type="submit" :disabled="submitting">{{ submitting ? '提交中…' : '提交业务问题' }}</button><span v-if="submitted" class="form-success" role="status" aria-live="polite">信息已提交，我会根据问题内容尽快与你联系。</span><span v-if="submitError" class="form-error" role="alert">{{ submitError }}</span></div><p class="contact-form-note">{{ submitted ? '信息已保存到服务器；如需补充资料，也可以通过邮箱或电话继续沟通。' : '提交后信息会保存到服务器，仅用于需求沟通。' }}</p></form></div></section>

    <section class="contact-section" id="contact"><div class="wrap"><div class="contact-panel"><div><h2>不确定从哪里开始？先描述最麻烦的业务环节。</h2><p>我会先帮你判断问题属于流程梳理、系统开发，还是已有系统优化、报表与自动化改进。</p></div><a class="btn dark" href="#form-section">描述你的问题</a></div></div></section>
    <SiteFooter text="纳启字节信息技术工作室 · 联系我" />
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'
import SiteNav from '../components/SiteNav.vue'
import SiteFooter from '../components/SiteFooter.vue'
import WechatQr from '../components/WechatQr.vue'

const form = reactive({ name: '', contact: '', projectType: '', budget: '', timeline: '', materials: '', message: '', consent: false })
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
  if (!form.name || !form.contact || !form.message || !form.consent) return

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
    submitError.value = error instanceof Error ? error.message : '提交失败，请稍后重试'
  } finally {
    submitting.value = false
  }
}

</script>
