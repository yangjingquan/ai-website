<template>
  <main class="site compact-home" id="site" tabindex="-1">
    <div class="wrap">
      <SiteNav />

      <section class="hero" aria-labelledby="home-title">
        <div class="hero-copy">
          <div class="eyebrow">小程序 · APP · CRM · ERP 定制开发</div>
          <h1 id="home-title">把业务想法，做成能上线的系统。</h1>
          <p class="lead">从需求梳理到开发上线，交付清晰、可验收、可继续迭代。</p>
          <div class="hero-actions">
            <RouterLink class="btn primary" to="/services">查看服务方案</RouterLink>
            <a class="btn secondary" href="#contact">发起需求评估</a>
          </div>
          <div class="trust-row" aria-label="合作特点">
            <div class="trust-item"><strong>先评估</strong><span>先给功能清单与范围</span></div>
            <div class="trust-item"><strong>分阶段</strong><span>原型、开发、上线可确认</span></div>
            <div class="trust-item"><strong>全流程</strong><span>前后台与部署持续跟进</span></div>
          </div>
        </div>

        <div class="hero-visual" aria-label="商业系统示意看板">
          <div class="admin-window">
            <div class="window-top"><div class="window-title">商业系统管理中心</div></div>
            <div class="metric-row">
              <div class="metric-card"><strong>订单</strong><span>状态、支付、退款</span></div>
              <div class="metric-card"><strong>客户</strong><span>档案、跟进、分群</span></div>
              <div class="metric-card"><strong>权限</strong><span>角色、日志、范围</span></div>
            </div>
            <div class="bar-chart" aria-hidden="true">
              <div class="bar" style="height: 62px"></div><div class="bar" style="height: 86px"></div><div class="bar" style="height: 122px"></div><div class="bar" style="height: 94px"></div><div class="bar" style="height: 132px"></div><div class="bar" style="height: 106px"></div><div class="bar" style="height: 76px"></div>
            </div>
            <div class="admin-flow" aria-hidden="true"><div class="line"></div><div class="line"></div><div class="line" style="width: 74%"></div><div class="line" style="width: 58%"></div></div>
          </div>
        </div>
      </section>
    </div>

    <section class="section" id="services" aria-labelledby="services-title">
      <div class="wrap">
        <div class="section-head">
          <h2 id="services-title" class="section-title">你可以从一个核心业务场景开始</h2>
        </div>
        <div class="product-grid compact-service-grid">
          <article class="product-card compact-service-card"><div class="icon">产</div><h3>产品方案</h3><p>商城、团购、点餐、预约、APP、CRM、ERP 等预设方向，按业务差异继续定制。</p><RouterLink class="text-link" to="/services">查看产品方案 →</RouterLink></article>
          <article class="product-card compact-service-card"><div class="icon">系</div><h3>系统能力</h3><p>围绕订单、客户、库存、权限、数据和第三方接口，解决真实业务卡点。</p><RouterLink class="text-link" to="/services">查看系统能力 →</RouterLink></article>
          <article class="product-card compact-service-card"><div class="icon">技</div><h3>开发能力</h3><p>覆盖多端应用、管理后台、接口服务、数据库设计、部署发布和后续维护。</p><RouterLink class="text-link" to="/services">查看开发能力 →</RouterLink></article>
          <article class="product-card compact-service-card"><div class="icon">交</div><h3>交付流程</h3><p>从需求评估、原型设计到开发、验收、上线和交接，每阶段都有可确认成果。</p><RouterLink class="text-link" to="/process">查看交付流程 →</RouterLink></article>
        </div>
      </div>
    </section>

    <section class="section proof-section" id="cases" aria-labelledby="cases-title">
      <div class="wrap">
        <div class="section-head">
          <h2 id="cases-title" class="section-title">先看问题怎么解决，再决定要不要开发</h2>
        </div>
        <div class="proof-grid compact-proof-grid">
          <article class="proof-card"><div class="proof-meta"><span class="proof-label">业务场景 01</span></div><h3>社区团购：从活动发布到提货核销</h3><div class="proof-row"><strong>问题</strong><span>团长、活动库存、提货记录分散在表格和聊天里。</span></div><div class="proof-row"><strong>范围</strong><span>团长权限、活动配置、库存同步、订单查询、核销与统计。</span></div></article>
          <article class="proof-card"><div class="proof-meta"><span class="proof-label">业务场景 02</span></div><h3>服务预约：把排班、提醒和客户档案放在一起</h3><div class="proof-row"><strong>问题</strong><span>预约靠人工确认，客户历史记录和员工排班难同步。</span></div><div class="proof-row"><strong>范围</strong><span>服务项目、时段库存、员工排班、预约状态、提醒和 CRM 档案。</span></div></article>
          <article class="proof-card"><div class="proof-meta"><span class="proof-label">业务场景 03</span></div><h3>进销存后台：让采购、库存和审批有记录</h3><div class="proof-row"><strong>问题</strong><span>采购、入库、出库和盘点数据不同步，异常难以追查。</span></div><div class="proof-row"><strong>范围</strong><span>采购单、库存变动、盘点、角色权限、审批流和经营报表。</span></div></article>
        </div>
        <div class="section-inline-cta"><RouterLink class="btn secondary" to="/cases">查看项目案例</RouterLink></div>
      </div>
    </section>

    <section class="section compact-process-section" id="process" aria-labelledby="process-title">
      <div class="wrap">
        <div class="section-head">
          <h2 id="process-title" class="section-title">交付流程透明，每一步都有可确认成果</h2>
        </div>
        <div class="process-grid compact-process-grid">
          <article class="process-card"><div class="step-number">01 沟通评估</div><h3>确认业务目标</h3><p>梳理用户角色、核心流程、页面清单、后台字段和第三方能力。</p></article>
          <article class="process-card"><div class="step-number">02 原型设计</div><h3>先看结构再开发</h3><p>输出关键页面结构、导航路径、表单字段和订单状态。</p></article>
          <article class="process-card"><div class="step-number">03 开发联调</div><h3>前后端同步推进</h3><p>完成前台、后台、接口、数据库、支付和消息通知，按模块验收。</p></article>
          <article class="process-card"><div class="step-number">04 发布维护</div><h3>上线后继续跟进</h3><p>协助发布、部署、问题修复，并根据运营反馈规划后续迭代。</p></article>
        </div>
      </div>
    </section>

    <section class="section compact-faq-section" aria-labelledby="faq-title">
      <div class="wrap">
        <div class="section-head"><h2 id="faq-title" class="section-title">合作前常见问题，官网直接给出清晰答案</h2></div>
        <div class="faq-grid compact-faq-grid">
          <article class="faq-card"><h3>可以只做 APP、CRM 或 ERP 中的一种吗？</h3><p>可以。单项开发或组合开发都可以，先从最需要上线的核心闭环开始。</p></article>
          <article class="faq-card"><h3>是否包含管理后台？</h3><p>建议包含。后台决定后续能否自主运营商品、订单、活动、客户、库存和数据。</p></article>
          <article class="faq-card"><h3>没有完整需求文档怎么办？</h3><p>可以先描述业务目标和参考系统，我会协助拆成页面、流程、字段、权限和功能边界。</p></article>
          <article class="faq-card"><h3>上线后还能继续改功能吗？</h3><p>可以。系统按模块设计，后续可继续迭代营销、客户、库存、数据和会员能力。</p></article>
        </div>
      </div>
    </section>

    <section class="contact-section" id="contact" aria-labelledby="contact-title">
      <div class="wrap">
        <div class="contact-panel">
          <div><h2 id="contact-title">想确认你的项目适合怎样交付，可以先把需求发我评估。</h2><p>告诉我业务类型、核心功能和上线目标，我会先拆出功能范围与交付节奏。</p><div class="chip-row"><span class="chip">需求评估</span><span class="chip">原型梳理</span><span class="chip">阶段交付</span><span class="chip">上线维护</span></div></div>
          <div class="contact-box"><div class="contact-line"><span>微信号</span><strong>Yizhixiaofeiyang7988</strong></div><div class="contact-line"><span>手机号</span><a href="tel:15566047217">15566047217</a></div><a class="btn dark" href="tel:15566047217">立即预约需求评估</a></div>
        </div>
      </div>
    </section>

    <footer class="footer"><div class="wrap">小肥羊开发工作室 · 小程序 / APP / CRM / ERP 商业系统定制开发 · <a class="filing-link" href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">辽ICP备2026015396号</a><RouterLink class="footer-link" to="/privacy">隐私与服务说明</RouterLink></div></footer>
  </main>
</template>

<script setup>
import SiteNav from '../components/SiteNav.vue'
</script>
