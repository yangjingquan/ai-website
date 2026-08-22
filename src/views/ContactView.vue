<template>
  <main class="site content-page" id="site" tabindex="-1">
    <div class="wrap"><SiteNav /><section class="content-hero" aria-labelledby="contact-page-title"><div><div class="eyebrow">联系我 · 需求评估 · 合作咨询</div><h1 id="contact-page-title">先把业务问题说清楚，再确定开发方案。</h1><p class="content-lead">你可以通过微信、邮箱、电话或下方表单发起咨询。当前表单只做前端校验和成功提示，后端接口接入后再启用实际提交。</p><div class="hero-actions"><a class="btn primary" href="#channels">查看联系入口</a><RouterLink class="btn secondary" to="/privacy">查看隐私说明</RouterLink></div></div><div class="hero-summary"><span>咨询前准备</span><strong>业务类型 · 核心功能 · 上线目标</strong><p>不需要先写完整需求文档。</p><div class="summary-line"><b>工作时区</b><span>北京时区</span></div><div class="summary-line"><b>平均回复</b><span>30 分钟内</span></div></div></section></div>

    <section class="section" id="channels" aria-labelledby="channel-title"><div class="wrap"><div class="section-head"><h2 id="channel-title" class="section-title">联系入口</h2><p class="section-subtitle">以下联系方式已确认可以继续使用，微信二维码图片待后续补充。</p></div><div class="channel-grid"><article class="channel-card"><div class="icon">微</div><h3>微信</h3><strong>Yizhixiaofeiyang7988</strong><p>二维码：<span class="placeholder">【待补充：微信二维码】</span></p><button class="copy-placeholder" type="button" disabled>复制微信号（后续接入）</button></article><article class="channel-card"><div class="icon">邮</div><h3>邮箱</h3><strong>yangjq_1991@163.com</strong><p>适合发送需求文档、截图和报价资料。</p><a class="text-link" href="mailto:yangjq_1991@163.com">发送邮件 →</a></article><article class="channel-card"><div class="icon">电</div><h3>电话</h3><strong>15566047217</strong><p>北京时区，平均 30 分钟内回复。</p><a class="text-link" href="tel:15566047217">拨打电话 →</a></article></div></div></section>

    <section class="section soft-section" aria-labelledby="form-title"><div class="wrap"><div class="section-head"><h2 id="form-title" class="section-title">前端需求表单</h2><p class="section-subtitle">提交按钮当前不会向服务器发送数据，后端接口接入后再切换为真实提交。</p></div><form class="contact-form" novalidate @submit.prevent="submitForm"><div class="form-grid"><label><span>你的称呼 <b>*</b></span><input v-model.trim="form.name" type="text" autocomplete="name" placeholder="例如：张先生" required><small v-if="touched && !form.name">请填写称呼</small></label><label><span>联系方式 <b>*</b></span><input v-model.trim="form.contact" type="text" autocomplete="email" placeholder="微信、手机或邮箱" required><small v-if="touched && !form.contact">请填写至少一种联系方式</small></label><label><span>项目类型</span><select v-model="form.projectType"><option value="">请选择</option><option>小程序 / APP</option><option>CRM / ERP</option><option>电商 / 交易系统</option><option>其他业务系统</option></select></label><label><span>预算范围</span><select v-model="form.budget"><option value="">请选择</option><option>￥2,000—￥10,000</option><option>￥10,000—￥50,000</option><option>￥50,000 以上</option><option>暂不确定</option></select></label></div><label class="form-field"><span>需求描述 <b>*</b></span><textarea v-model.trim="form.message" rows="6" placeholder="请描述业务、目标用户、核心功能和期望上线时间" required></textarea><small v-if="touched && !form.message">请描述你的需求</small></label><label class="consent-field"><input v-model="form.consent" type="checkbox"><span>我已阅读并同意<a href="/privacy">隐私与服务说明</a>，了解当前表单仅做前端演示。 <b>*</b></span></label><p v-if="touched && !form.consent" class="form-error">请先同意隐私说明</p><div class="form-actions"><button class="btn primary" type="submit">发起需求评估</button><span v-if="submitted" class="form-success" role="status" aria-live="polite">前端校验通过，后端接口接入后即可提交。</span></div></form></div></section>

    <section class="section" aria-labelledby="prepare-title"><div class="wrap"><div class="section-head"><h2 id="prepare-title" class="section-title">咨询前准备这些信息，评估会更准确</h2></div><div class="prepare-grid"><article class="prepare-card"><span>01</span><h3>业务和客户</h3><p>你做什么业务，服务谁，当前最影响效率或收入的环节是什么。</p></article><article class="prepare-card"><span>02</span><h3>核心功能</h3><p>必须上线的页面、流程、角色、后台和第三方能力有哪些。</p></article><article class="prepare-card"><span>03</span><h3>平台和资料</h3><p>计划使用小程序、APP、H5 还是后台，是否已有品牌、原型或旧系统资料。</p></article><article class="prepare-card"><span>04</span><h3>时间和预算</h3><p>期望上线时间、首期预算范围和是否需要长期维护。</p></article></div></div></section>

    <section class="contact-section" id="contact"><div class="wrap"><div class="contact-panel"><div><h2>准备好资料后，可以从微信、邮箱、电话或表单联系。</h2><p>复杂项目会先评估现有流程和第三方条件，再确认价格、周期和交付范围。</p></div><RouterLink class="btn dark" to="/services">先查看服务方案</RouterLink></div></div></section>
    <SiteFooter text="小肥羊开发工作室 · 联系我" />
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'
import SiteNav from '../components/SiteNav.vue'
import SiteFooter from '../components/SiteFooter.vue'

const form = reactive({ name: '', contact: '', projectType: '', budget: '', message: '', consent: false })
const touched = ref(false)
const submitted = ref(false)

function submitForm() {
  touched.value = true
  submitted.value = Boolean(form.name && form.contact && form.message && form.consent)
}
</script>
