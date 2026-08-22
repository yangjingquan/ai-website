<template>
  <main class="site content-page about-page" id="site" tabindex="-1">
    <div class="wrap">
      <SiteNav />

      <section class="content-hero" aria-labelledby="about-title">
        <div>
          <div class="eyebrow">关于我 · 杨井泉 · 个人开发工作室</div>
          <h1 id="about-title">把复杂业务，做成可运行、可维护的系统。</h1>
          <p class="content-lead">小肥羊开发工作室由杨井泉负责，拥有 11 年开发经验，常驻沈阳并支持远程合作，提供从业务梳理、系统开发到测试部署和上线维护的一对一项目合作。</p>
          <div class="hero-actions"><RouterLink class="btn primary" to="/services">查看服务方案</RouterLink><RouterLink class="btn secondary" to="/contact">联系我</RouterLink></div>
        </div>
        <aside class="profile-placeholder about-profile-card" aria-label="个人资料">
          <div class="about-profile-mark">杨</div>
          <strong>杨井泉</strong>
          <span>高级开发工程师 · 11 年经验</span>
          <div class="profile-meta"><span>工作地点</span><b>沈阳 · 支持远程</b></div>
          <div class="profile-meta"><span>重点方向</span><b>制造 · 企业管理 · 电商 · 物流</b></div>
        </aside>
      </section>
    </div>

    <section class="section" aria-labelledby="background-title">
      <div class="wrap">
        <div class="section-head"><h2 id="background-title" class="section-title">从业务梳理到系统交付，持续参与项目全流程</h2><p class="section-subtitle">重点说明我能参与的业务范围、技术方向和交付方式。</p></div>
        <div class="profile-grid">
          <article class="profile-card"><div class="icon">经</div><h3>工作背景</h3><p><strong>11 年</strong> 项目开发经验，常驻沈阳，支持远程协作。</p><p>以项目制方式参与需求梳理、开发、测试、部署和上线维护。</p></article>
          <article class="profile-card"><div class="icon">技</div><h3>技术方向</h3><p>后端：Java、Python、PHP，擅长 Spring Boot、Django、FastAPI。</p><p>前端与数据层：Vue、React、MySQL、PostgreSQL、Redis。</p></article>
          <article class="profile-card"><div class="icon">业</div><h3>擅长解决的问题</h3><p>业务流程梳理、订单与库存管理、财务协同、权限设计和数据管理。</p><p>曾参与电商、金融、银行、制造、物流和企业管理项目。</p></article>
        </div>
      </div>
    </section>

    <section class="section soft-section" aria-labelledby="strength-title">
      <div class="wrap">
        <div class="section-head"><h2 id="strength-title" class="section-title">适合怎样合作，项目如何推进</h2><p class="section-subtitle">先确认目标和范围，再按阶段交付可运行版本。</p></div>
        <div class="split-grid">
          <article class="info-panel"><div class="eyebrow">适合合作</div><ul class="check-list"><li>需要从 0 到 1 梳理业务流程和系统范围。</li><li>希望由一位高级开发工程师持续跟进产品、开发和上线。</li><li>愿意按阶段确认需求、阶段成果和验收边界。</li><li>需要开发、测试、部署和上线后的持续跟进。</li></ul></article>
          <article class="info-panel"><div class="eyebrow">交付边界</div><ul class="check-list"><li>每个阶段明确目标、范围、阶段成果和确认节点。</li><li>开发中提供阶段版本，按约定进行验收。</li><li>账号、源代码和部署资料按报价单与合同约定交付。</li><li>上线后的问题修复与新需求，按报价单与合同约定执行。</li></ul></article>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="timeline-title">
      <div class="wrap">
        <div class="section-head"><h2 id="timeline-title" class="section-title">已上线案例</h2><p class="section-subtitle">查看一个已上线的 ERP 项目，了解从业务梳理到系统交付的完整过程。</p></div>
        <article class="about-project-card"><div class="about-project-visual"><img src="/cases/erp-production-execution.jpg" alt="制鞋厂 ERP 生产执行模块截图"></div><div class="about-project-copy"><div class="about-project-meta"><span>已上线 · 2 个月</span><span>制造业 · ERP</span></div><h3>制鞋厂流程管理 ERP 系统</h3><p>负责需求梳理、前后端开发、接口测试和上线部署，覆盖生产、财务、仓储和发货流程。</p><div class="about-project-tags"><span>生产管理</span><span>财务控制</span><span>仓储履约</span></div><RouterLink class="text-link" to="/cases/shoe-factory-erp">查看案例详情 →</RouterLink></div></article>
      </div>
    </section>

    <section class="contact-section" id="contact">
      <div class="wrap"><div class="contact-panel"><div><h2>如果你需要一位能持续跟进的开发负责人，可以先聊聊业务目标。</h2><p>无需准备完整需求文档，先说清业务、用户和最麻烦的环节即可。</p></div><RouterLink class="btn dark" to="/contact">进入联系页面</RouterLink></div></div>
    </section>
    <SiteFooter text="小肥羊开发工作室 · 关于我" />
  </main>
</template>

<script setup>
import SiteNav from '../components/SiteNav.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>
