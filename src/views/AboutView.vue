<template>
  <main class="site content-page" id="site" tabindex="-1">
    <div class="wrap">
      <SiteNav />

      <section class="content-hero" aria-labelledby="about-title">
        <div>
          <div class="eyebrow">关于我 · 高级开发工程师 · 远程协作</div>
          <h1 id="about-title">把业务理解清楚，做成长期可用的系统。</h1>
          <p class="content-lead">我是杨井泉，高级开发工程师，拥有 11 年开发经验，常驻沈阳并支持远程合作，专注为电商、金融、银行、制造业、物流和企业管理客户提供从需求梳理到开发上线的持续协作。</p>
          <div class="hero-actions"><RouterLink class="btn primary" to="/services">查看服务方案</RouterLink><RouterLink class="btn secondary" to="/contact">联系我</RouterLink></div>
        </div>
        <aside class="profile-placeholder" aria-label="个人资料占位区">
          <div class="profile-avatar">【待补充：个人头像】</div>
          <strong>杨井泉</strong>
          <span>高级开发工程师 · 11 年经验</span>
          <div class="profile-meta"><span>工作地点</span><b>沈阳 · 支持远程</b></div>
          <div class="profile-meta"><span>服务行业</span><b>电商 · 金融 · 银行 · 制造 · 物流 · 企业管理</b></div>
        </aside>
      </section>
    </div>

    <section class="section" aria-labelledby="background-title">
      <div class="wrap">
        <div class="section-head"><h2 id="background-title" class="section-title">11 年开发经验，覆盖业务和技术两端</h2><p class="section-subtitle">不展示证书，重点展示实际开发方向、技术栈和可交付能力。</p></div>
        <div class="profile-grid">
          <article class="profile-card"><div class="icon">经</div><h3>从业背景</h3><p>从业年限：<strong>11 年</strong></p><p>所在城市：<strong>沈阳</strong></p><p>合作方式：<strong>远程为主，支持项目制协作</strong></p></article>
          <article class="profile-card"><div class="icon">技</div><h3>擅长方向</h3><p>后端：Java、Spring Boot、Spring Cloud、Spring MVC、Python、Django、FastAPI、PHP、Laravel、ThinkPHP。</p><p>前端与数据：Vue、React、MySQL、PostgreSQL、Redis 等。</p></article>
          <article class="profile-card"><div class="icon">业</div><h3>业务方向</h3><p>电商、金融、银行、制造业、物流、企业管理。</p><p>重点能力：业务流程、ERP、订单、财务、发货、权限和数据管理。</p></article>
        </div>
      </div>
    </section>

    <section class="section soft-section" aria-labelledby="strength-title">
      <div class="wrap">
        <div class="section-head"><h2 id="strength-title" class="section-title">合作方式和工作重点</h2><p class="section-subtitle">通过阶段确认、远程沟通和持续交付，让项目推进保持可见。</p></div>
        <div class="split-grid">
          <article class="info-panel"><div class="eyebrow">适合合作</div><ul class="check-list"><li>需要从 0 到 1 梳理业务流程和系统范围。</li><li>希望由一位高级开发工程师持续跟进产品、开发和上线。</li><li>愿意按阶段确认需求、交付物和验收边界。</li><li>适合电商、金融、银行、制造、物流和企业管理场景。</li></ul></article>
          <article class="info-panel"><div class="eyebrow">合作节奏</div><ul class="check-list"><li>沈阳本地沟通或远程协作均可。</li><li>先确认目标、范围和排期，再进入开发。</li><li>开发中提供阶段版本，验收后交付账号和源代码。</li><li>售后默认一年，维护期间按约定持续处理问题和修改。</li></ul></article>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="timeline-title">
      <div class="wrap">
        <div class="section-head"><h2 id="timeline-title" class="section-title">当前代表项目</h2><p class="section-subtitle">项目案例会持续补充，先展示已经上线、能说明系统能力的 ERP 项目。</p></div>
        <div class="timeline-list">
          <article class="timeline-item"><span>已上线 · 2 个月</span><div><h3>制鞋厂流程管理 ERP 系统</h3><p>负责生产、财务、发货等业务流程的系统开发，按照客户需求完成上线。<RouterLink class="text-link" to="/cases">查看案例详情 →</RouterLink></p></div></article>
        </div>
      </div>
    </section>

    <section class="contact-section" id="contact">
      <div class="wrap"><div class="contact-panel"><div><h2>如果你想找的是长期负责的人，可以先聊聊业务目标。</h2><p>无需先准备完整需求文档，先描述业务、用户和最麻烦的环节即可。</p></div><RouterLink class="btn dark" to="/contact">进入联系页面</RouterLink></div></div>
    </section>
    <SiteFooter text="小肥羊开发工作室 · 关于我" />
  </main>
</template>

<script setup>
import SiteNav from '../components/SiteNav.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>
