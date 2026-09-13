<template>
  <main class="site content-page" id="site" tabindex="-1">
    <div class="wrap">
      <SiteNav />
      <section class="content-hero" aria-labelledby="services-title">
        <div><div class="eyebrow">问题诊断 · 系统开发 · 存量升级</div><h1 id="services-title">不从“做什么功能”开始，而从“哪一个问题最值得先解决”开始。</h1><p class="content-lead">无论是获客转化、订单履约、客户管理、库存协同，还是内部审批与经营分析，先识别问题根源，再确定首期系统范围。</p><div class="hero-actions"><RouterLink class="btn primary" to="/pricing">查看报价说明</RouterLink><RouterLink class="btn secondary" to="/contact">预约业务评估</RouterLink></div></div>
        <div class="hero-summary"><span>服务覆盖</span><strong>找卡点 · 定闭环 · 做系统 · 持续优化</strong><p>适合需要新建业务系统，或希望在现有系统上改善效率与稳定性的团队。</p><div class="summary-line"><b>首期目标</b><span>优先跑通一条关键业务流程</span></div><div class="summary-line"><b>后续方式</b><span>按模块扩展、维护与自动化</span></div></div>
      </section>
    </div>

    <section class="section" aria-labelledby="service-type-title">
      <div class="wrap"><div class="section-head"><h2 id="service-type-title" class="section-title">企业最终获得的，不只是功能清单</h2><p class="section-subtitle">报价会根据问题优先级、功能范围、平台、第三方接口和验收要求确认。</p></div><div class="service-package-grid">
        <article class="service-package"><div class="package-kicker">01 · 明确优先级</div><h3>把模糊需求变成可执行方案</h3><p>梳理角色、流程、字段、权限和优先级，明确首期必须做什么、暂时不做什么，减少反复返工。</p><div class="feature-list"><span>问题定位</span><span>功能边界</span><span>首期路线</span></div><RouterLink class="text-link" to="/product-solution">查看产品方案 →</RouterLink></article>
        <article class="service-package"><div class="package-kicker">02 · 固化关键规则</div><h3>让业务不再依赖个人记忆</h3><p>把订单、客户、库存、审批等动作变成标准流程；谁负责、做到哪一步、异常在哪里，都能追踪。</p><div class="feature-list"><span>流程设计</span><span>权限规则</span><span>数据追踪</span></div><RouterLink class="text-link" to="/system-capability">查看系统能力 →</RouterLink></article>
        <article class="service-package"><div class="package-kicker">03 · 连接前台与后台</div><h3>让获客、交易与管理真正连起来</h3><p>小程序、APP、H5 承接客户；CRM、ERP 与后台支撑员工处理；数据不再在多个工具间反复搬运。</p><div class="feature-list"><span>多端开发</span><span>接口集成</span><span>数据协同</span></div><RouterLink class="text-link" to="/development-capability">查看开发能力 →</RouterLink></article>
        <article class="service-package"><div class="package-kicker">04 · 持续可用</div><h3>让系统能上线，更能长期使用</h3><p>提供测试、部署、账号权限、交接资料和迭代建议，避免系统上线后无人维护、无法扩展。</p><div class="feature-list"><span>阶段验收</span><span>部署交接</span><span>维护迭代</span></div><RouterLink class="text-link" to="/process">查看合作流程 →</RouterLink></article>
      </div></div>
    </section>

    <section class="section" aria-labelledby="signal-title">
      <div class="wrap"><div class="section-head"><h2 id="signal-title" class="section-title">出现这些信号，通常值得启动系统化评估</h2><p class="section-subtitle">不一定需要重做系统；先确认哪个环节造成的效率与稳定性损失最大。</p></div><div class="faq-grid"><article class="faq-card"><h3>每天都在复制、核对、催进度</h3><p>说明数据和流程没有自动衔接，适合先梳理高频动作与责任节点。</p></article><article class="faq-card"><h3>客户、订单或库存总对不上</h3><p>说明数据来源与流转规则需要统一，避免继续靠人工补漏洞。</p></article><article class="faq-card"><h3>关键人员不在，业务就容易停摆</h3><p>说明业务知识仍在个人手里，应优先沉淀客户、流程与操作记录。</p></article><article class="faq-card"><h3>多个部门各有一份“正确数据”</h3><p>说明系统或表格之间缺少同步与统一口径，需要先确定唯一数据来源。</p></article></div></div>
    </section>

    <section class="section soft-section" aria-labelledby="scope-title">
      <div class="wrap"><div class="section-head"><h2 id="scope-title" class="section-title">服务范围和不包含内容</h2><p class="section-subtitle">先确认首期交付边界，后续新增功能再按范围评估。</p></div><div class="split-grid"><article class="info-panel"><div class="eyebrow">通常可以包含</div><ul class="check-list"><li>需求梳理、页面结构、角色权限和完整业务流程设计。</li><li>前台、小程序、APP、后台、接口和数据库开发。</li><li>支付、短信、地图、物流等第三方接口的评估与测试。</li><li>测试修复、部署发布、账号交接和基础使用说明。</li></ul></article><article class="info-panel warning-panel"><div class="eyebrow">默认不包含 / 需单独确认</div><ul class="check-list"><li>运营、拍摄、文案、广告投放等非开发服务。</li><li>第三方平台认证、服务器、短信、支付通道及应用市场费用。</li><li>超出首期范围的新功能、重大流程变更和额外修改，需另行评估。</li><li>上线后的维护响应、服务器续费和版本迭代，按报价及合同约定执行。</li></ul></article></div></div>
    </section>

    <section class="section" aria-labelledby="service-faq-title"><div class="wrap"><div class="section-head"><h2 id="service-faq-title" class="section-title">服务方案常见问题</h2></div><div class="faq-grid"><article class="faq-card"><h3>没有完整需求文档可以开始吗？</h3><p>可以。先提供业务目标、参考系统和必须上线的功能，再共同整理范围。</p></article><article class="faq-card"><h3>可以只做一个模块吗？</h3><p>可以，但需要确认它与现有系统的接口、数据和后续扩展关系。</p></article><article class="faq-card"><h3>服务是否包含设计稿和源代码？</h3><p>根据报价和合同约定交付。报价前会明确设计稿、源代码、账号和部署资料的归属与交接范围。</p></article><article class="faq-card"><h3>第三方费用谁承担？</h3><p>第三方平台认证、服务器、短信、支付和发布费用由项目方承担；如需代办，按实际费用结算。</p></article><article class="faq-card"><h3>什么时候可以确定报价和周期？</h3><p>确认平台数量、功能范围、接口和验收方式后，再给出报价与排期。</p></article><article class="faq-card"><h3>可以先做原型再决定开发吗？</h3><p>可以。先确认页面结构和核心流程，再决定首期开发范围。</p></article></div></div></section>

    <section class="contact-section" id="contact"><div class="wrap"><div class="contact-panel"><div><h2>先把你的业务方向发来，我会帮你判断首期应该做什么。</h2><p>告诉我业务类型、核心功能和目标上线时间，我会先帮你拆出首期范围。</p></div><RouterLink class="btn dark" to="/contact">开始需求评估</RouterLink></div></div></section>
    <SiteFooter text="纳启字节信息技术工作室 · 服务方案" />
  </main>
</template>

<script setup>
import SiteNav from '../components/SiteNav.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>
