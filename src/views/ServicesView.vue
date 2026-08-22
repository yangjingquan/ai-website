<template>
  <main class="site content-page" id="site" tabindex="-1">
    <div class="wrap">
      <SiteNav />
      <section class="content-hero" aria-labelledby="services-title">
        <div><div class="eyebrow">服务方案 · 范围 · 交付方式</div><h1 id="services-title">先把需求范围说清，再按阶段交付。</h1><p class="content-lead">从需求梳理到上线维护，按项目范围分阶段交付。</p><div class="hero-actions"><RouterLink class="btn primary" to="/pricing">查看报价说明</RouterLink><RouterLink class="btn secondary" to="/contact">预约需求评估</RouterLink></div></div>
        <div class="hero-summary"><span>服务覆盖</span><strong>产品 · 系统 · 开发 · 交付</strong><p>适合需要小程序、APP、后台或业务系统定制的团队。</p><div class="summary-line"><b>首期目标</b><span>先跑通一个核心业务闭环</span></div><div class="summary-line"><b>后续方式</b><span>按模块继续扩展和维护</span></div></div>
      </section>
    </div>

    <section class="section" aria-labelledby="service-type-title">
      <div class="wrap"><div class="section-head"><h2 id="service-type-title" class="section-title">四类服务，分别解决不同阶段的问题</h2><p class="section-subtitle">报价按功能范围、端数量、第三方接口和验收要求确认。</p></div><div class="service-package-grid">
        <article class="service-package"><div class="package-kicker">01 · 产品</div><h3>需求梳理与方案设计</h3><p>把业务想法拆成角色、页面、流程、字段、权限和首期功能清单。</p><div class="feature-list"><span>需求访谈</span><span>功能范围</span><span>原型结构</span></div><RouterLink class="text-link" to="/product-solution">查看产品详情 →</RouterLink></article>
        <article class="service-package"><div class="package-kicker">02 · 系统</div><h3>业务系统设计</h3><p>围绕订单、客户、库存、审批、数据和第三方接口设计可运营的业务闭环。</p><div class="feature-list"><span>流程设计</span><span>权限规则</span><span>数据模型</span></div><RouterLink class="text-link" to="/system-capability">查看系统能力 →</RouterLink></article>
        <article class="service-package"><div class="package-kicker">03 · 开发</div><h3>多端系统开发</h3><p>按项目范围开发小程序、APP、H5、后台及配套接口，并完成联调部署。</p><div class="feature-list"><span>多端开发</span><span>接口联调</span><span>上线发布</span></div><RouterLink class="text-link" to="/development-capability">查看开发能力 →</RouterLink></article>
        <article class="service-package"><div class="package-kicker">04 · 交付</div><h3>分阶段交付维护</h3><p>按阶段提供演示版本、验收清单、上线资料和后续问题修复与迭代建议。</p><div class="feature-list"><span>阶段验收</span><span>部署交接</span><span>持续维护</span></div><RouterLink class="text-link" to="/process">查看合作流程 →</RouterLink></article>
      </div></div>
    </section>

    <section class="section soft-section" aria-labelledby="scope-title">
      <div class="wrap"><div class="section-head"><h2 id="scope-title" class="section-title">服务范围和不包含内容</h2><p class="section-subtitle">先确认首期交付边界，后续新增功能再按范围评估。</p></div><div class="split-grid"><article class="info-panel"><div class="eyebrow">通常可以包含</div><ul class="check-list"><li>需求梳理、页面结构、角色权限和核心流程设计。</li><li>前台、小程序、APP、后台、接口和数据库开发。</li><li>支付、短信、地图、物流等第三方接口的评估与联调。</li><li>测试修复、部署发布、账号交接和基础使用说明。</li></ul></article><article class="info-panel warning-panel"><div class="eyebrow">默认不包含 / 需单独确认</div><ul class="check-list"><li>运营、拍摄、文案、广告投放等非开发服务。</li><li>第三方平台认证、服务器、短信、支付通道及应用市场费用。</li><li>超出首期范围的新功能、重大流程变更和额外修改，需另行评估。</li><li>上线后的维护响应、服务器续费和版本迭代，按报价及合同约定执行。</li></ul></article></div></div>
    </section>

    <section class="section" aria-labelledby="service-faq-title"><div class="wrap"><div class="section-head"><h2 id="service-faq-title" class="section-title">服务方案常见问题</h2></div><div class="faq-grid"><article class="faq-card"><h3>没有完整需求文档可以开始吗？</h3><p>可以。先提供业务目标、参考系统和必须上线的功能，再共同整理范围。</p></article><article class="faq-card"><h3>可以只做一个模块吗？</h3><p>可以，但需要确认它与现有系统的接口、数据和后续扩展关系。</p></article><article class="faq-card"><h3>服务是否包含设计稿和源代码？</h3><p>根据报价和合同约定交付。报价前会明确设计稿、源代码、账号和部署资料的归属与交接范围。</p></article><article class="faq-card"><h3>第三方费用谁承担？</h3><p>第三方平台认证、服务器、短信、支付和发布费用由项目方承担；如需代办，按实际费用结算。</p></article><article class="faq-card"><h3>什么时候可以确定报价和周期？</h3><p>确认端数量、功能范围、接口和验收方式后，再给出报价与排期。</p></article><article class="faq-card"><h3>可以先做原型再决定开发吗？</h3><p>可以。先确认页面结构和核心流程，再决定首期开发范围。</p></article></div></div></section>

    <section class="contact-section" id="contact"><div class="wrap"><div class="contact-panel"><div><h2>先把你的业务方向发来，我会帮你判断首期应该做什么。</h2><p>告诉我业务类型、核心功能和目标上线时间，我会先帮你拆出首期范围。</p></div><RouterLink class="btn dark" to="/contact">开始需求评估</RouterLink></div></div></section>
    <SiteFooter text="小肥羊开发工作室 · 服务方案" />
  </main>
</template>

<script setup>
import SiteNav from '../components/SiteNav.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>
