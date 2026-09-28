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
      <div class="wrap"><div class="section-head"><h2 id="service-type-title" class="section-title">从业务问题找到对应案例与服务</h2><p class="section-subtitle">前两个入口对应已公开案例；老系统维护、报表与自动化作为独立服务方向，按现有系统情况评估。</p></div><div class="service-package-grid">
        <article v-for="(project, index) in caseCatalog" :key="project.slug" class="service-package"><div class="package-kicker">0{{ index + 1 }} · {{ project.category }}</div><h3>{{ project.problemTitle }}</h3><p>{{ project.problemDescription }}</p><div class="feature-list"><span v-for="topic in project.problemTopics" :key="topic">{{ topic }}</span></div><RouterLink class="text-link" :to="`/cases/${project.slug}`">查看对应案例：{{ project.name }} →</RouterLink></article>
        <article class="service-package"><div class="package-kicker">03 · 独立服务方向</div><h3>老系统维护、报表与自动化</h3><p>针对正在运行的 Java、PHP 等系统和现有 Excel 或人工流程，评估故障修复、接口、报表与日常自动化的可行范围。</p><div class="feature-list"><span>存量系统排查</span><span>接口与报表</span><span>流程自动化</span></div><RouterLink class="text-link" :to="{ path: '/contact', query: { source: '服务方案：老系统维护、报表与自动化' }, hash: '#form-section' }">描述现有系统问题 →</RouterLink></article>
        <article class="service-package"><div class="package-kicker">04 · 分阶段交付</div><h3>每个阶段都有可确认成果</h3><p>先验证关键流程，再逐步扩展；每个阶段明确演示版本、验收范围和后续建议。</p><div class="feature-list"><span>阶段验收</span><span>部署交接</span><span>维护迭代</span></div><RouterLink class="text-link" to="/process">查看合作流程 →</RouterLink></article>
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
import { caseCatalog } from '../data/cases'
</script>
