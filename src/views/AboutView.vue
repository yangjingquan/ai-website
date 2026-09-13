<template>
  <main class="site content-page about-page" id="site" tabindex="-1">
    <div class="wrap">
      <SiteNav />

      <section class="content-hero" aria-labelledby="about-title">
        <div>
          <div class="eyebrow">关于我们 · 技术服务工作室</div>
          <h1 id="about-title">让已有系统继续创造价值。</h1>
          <p class="content-lead">纳启字节是一家面向中小企业的技术服务工作室，专注于存量系统维护、业务流程升级和 AI 自动化。我们从真实业务问题出发，把分散的工具、数据和人工动作，整理成可运行、可维护的系统能力。</p>
          <div class="hero-actions"><RouterLink class="btn primary" to="/services">查看服务方案</RouterLink><RouterLink class="btn secondary" to="/contact">发起需求评估</RouterLink></div>
        </div>
        <aside class="profile-placeholder about-profile-card" aria-label="工作室能力">
          <div class="about-profile-mark"><img src="/Nex.png" alt="纳启字节工作室 Nex 标志"></div>
          <strong>纳启字节工作室</strong>
          <span>面向中小企业的系统维护与业务自动化伙伴</span>
          <div class="profile-meta"><span>服务方式</span><b>轻量评估 · 分阶段交付</b></div>
          <div class="profile-meta"><span>能力范围</span><b>老系统 · 数据 · 流程 · AI</b></div>
        </aside>
      </section>
    </div>

    <section class="section" aria-labelledby="background-title">
      <div class="wrap">
        <div class="section-head"><h2 id="background-title" class="section-title">从业务梳理到系统交付，覆盖企业关键环节</h2><p class="section-subtitle">不堆砌技术名词，重点说明工作室能为企业解决什么问题。</p></div>
        <div class="profile-grid">
          <article class="profile-card"><div class="icon">维</div><h3>存量系统维护</h3><p>维护和升级 Java、PHP 等老系统，排查稳定性、权限、接口和关键流程问题。</p><p>在不轻易推倒重来的前提下，让已有系统恢复可维护、可扩展。</p></article>
          <article class="profile-card"><div class="icon">建</div><h3>业务系统建设</h3><p>围绕订单、客户、库存、审批和经营数据，梳理首期闭环与系统边界。</p><p>提供小程序、APP、CRM、ERP 和内部管理系统的分阶段开发。</p></article>
          <article class="profile-card"><div class="icon">智</div><h3>数据与 AI 自动化</h3><p>用 Python、报表自动化和 AI 知识库维护，减少重复录入、人工汇总和重复查询。</p><p>优先交付能投入使用的工具、报表或流程改进成果。</p></article>
        </div>
      </div>
    </section>

    <section class="section soft-section" aria-labelledby="strength-title">
      <div class="wrap">
        <div class="section-head"><h2 id="strength-title" class="section-title">适合怎样合作，项目如何推进</h2><p class="section-subtitle">先确认目标和范围，再按阶段交付可运行版本。</p></div>
        <div class="split-grid">
          <article class="info-panel"><div class="eyebrow">适合合作</div><ul class="check-list"><li>需要从 0 到 1 梳理业务流程和系统范围。</li><li>希望由固定项目成员持续跟进产品、开发和上线。</li><li>愿意按阶段确认需求、阶段成果和验收边界。</li><li>需要开发、测试、部署和上线后的持续跟进。</li></ul></article>
          <article class="info-panel"><div class="eyebrow">交付边界</div><ul class="check-list"><li>每个阶段明确目标、范围、阶段成果和确认节点。</li><li>开发中提供阶段版本，按约定进行验收。</li><li>账号、源代码和部署资料按报价单与合同约定交付。</li><li>上线后的问题修复与新需求，按报价单与合同约定执行。</li></ul></article>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="timeline-title">
      <div class="wrap">
        <div class="section-head"><h2 id="timeline-title" class="section-title">代表案例</h2><p class="section-subtitle">通过多商户交易与制造业 ERP 两类项目，了解工作室如何把复杂业务落成可运行系统。</p></div>
        <div class="about-project-grid">
          <article class="about-project-card"><div class="about-project-visual"><img src="/cases/shop-miniap-cover.png" alt="多商户商城小程序与经营后台截图"></div><div class="about-project-copy"><div class="about-project-meta"><span>持续迭代</span><span>零售电商 · 多商户</span></div><h3>多商户商城小程序与经营后台</h3><p>围绕消费者下单、商家履约与平台运营，交付微信小程序、商家后台、运营后台和服务端接口。</p><div class="about-project-tags"><span>多角色交易</span><span>商家履约</span><span>运营后台</span></div><RouterLink class="text-link" to="/cases/multi-merchant-shop">查看案例详情 →</RouterLink></div></article>
          <article class="about-project-card about-project-card--stacked"><div class="about-project-visual"><img src="/cases/erp-production-execution.jpg" alt="制鞋厂 ERP 生产执行模块截图"></div><div class="about-project-copy"><div class="about-project-meta"><span>已上线</span><span>制造业 · ERP</span></div><h3>制鞋厂流程管理 ERP 系统</h3><p>负责需求梳理、前后端开发、接口测试和上线部署，覆盖生产、财务、仓储和发货流程。</p><div class="about-project-tags"><span>生产管理</span><span>财务控制</span><span>仓储履约</span></div><RouterLink class="text-link" to="/cases/shoe-factory-erp">查看案例详情 →</RouterLink></div></article>
        </div>
      </div>
    </section>

    <section class="contact-section" id="contact">
      <div class="wrap"><div class="contact-panel"><div><h2>如果你的系统正在拖慢业务，可以先从一次轻量评估开始。</h2><p>无需准备完整需求文档，先说清业务、现有工具和最麻烦的环节即可。</p></div><RouterLink class="btn dark" to="/contact">进入联系页面</RouterLink></div></div>
    </section>
    <SiteFooter text="纳启字节信息技术工作室 · 关于我们" />
  </main>
</template>

<script setup>
import SiteNav from '../components/SiteNav.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>
