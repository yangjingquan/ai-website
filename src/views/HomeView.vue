<template>
  <main class="site compact-home" id="site" tabindex="-1">
    <div class="wrap">
      <SiteNav />

      <section class="hero" aria-labelledby="home-title">
        <div class="hero-copy">
          <div class="eyebrow">业务系统定制 · 存量系统升级 · AI 自动化</div>
          <h1 id="home-title">企业不缺软件，缺的是让业务顺畅运转的一套流程。</h1>
          <p class="lead">当订单靠微信群催、客户资料留在员工手机、库存总对不上、老板靠导表看经营时，问题不在于不够努力，而在于流程、数据和责任没有进入同一套系统。</p>
          <div class="hero-actions">
            <RouterLink class="btn primary" to="/services">诊断业务卡点</RouterLink>
            <a class="btn secondary" href="#system-health">了解存量系统升级</a>
          </div>
          <div class="trust-row" aria-label="合作特点">
            <div class="trust-item"><strong>先找卡点</strong><span>定位最耗时、最易出错的环节</span></div>
            <div class="trust-item"><strong>先做闭环</strong><span>首期先跑通一条完整业务链路</span></div>
            <div class="trust-item"><strong>交付可运营</strong><span>系统、数据、权限与部署一并跟进</span></div>
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
          <h2 id="services-title" class="section-title">不从堆功能开始，先解决最卡业务的一环</h2>
          <p class="section-subtitle">从获客、交易到内部协同，先确定问题根源与首期闭环，再选择合适的系统能力。</p>
        </div>
        <div class="product-grid compact-service-grid">
          <article class="product-card compact-service-card"><div class="icon">获</div><h3>获客与交易</h3><p>让客户能自主咨询、下单、预约、支付和查询，减少客服反复解释与人工确认。</p><RouterLink class="text-link" to="/product-solution">查看交易方案 →</RouterLink></article>
          <article class="product-card compact-service-card"><div class="icon">管</div><h3>客户与内部管理</h3><p>把客户、订单、库存、审批和角色权限放进一套规则，业务不再依赖个人记忆。</p><RouterLink class="text-link" to="/system-capability">查看系统能力 →</RouterLink></article>
          <article class="product-card compact-service-card"><div class="icon">升</div><h3>存量系统升级</h3><p>维护和升级 Java、PHP 老系统，补齐报表、接口、稳定性与自动化能力，不必轻易推倒重来。</p><a class="text-link" href="#system-health">查看升级方式 →</a></article>
          <article class="product-card compact-service-card"><div class="icon">交</div><h3>分阶段交付</h3><p>先验证关键流程，再逐步扩展；每个阶段都有可演示版本、验收范围与后续建议。</p><RouterLink class="text-link" to="/process">查看合作流程 →</RouterLink></article>
        </div>
      </div>
    </section>

    <section class="section soft-section" id="system-health" aria-labelledby="system-health-title">
      <div class="wrap">
        <div class="section-head">
          <h2 id="system-health-title" class="section-title">已有系统不必推倒重来，也能先解决最影响经营的问题</h2>
          <p class="section-subtitle">适合正在使用 Java、PHP 或其他老系统，同时依赖 Excel、ERP、客户资料和人工流程的中小企业。</p>
        </div>
        <div class="split-grid">
          <article class="info-panel">
            <div class="eyebrow">系统维护与升级</div>
            <h3>把分散工具接回一条可追踪的业务链</h3>
            <ul class="check-list">
              <li>维护和升级 Java、PHP 老系统，排查稳定性、接口、权限和关键流程问题。</li>
              <li>通过 Python 与全栈开发，把 Excel、ERP、客户资料和人工操作连接为可管理的数据流程。</li>
              <li>补齐订单、客户、库存、审批、日志和报表能力，让关键动作有记录、有责任、有进度。</li>
            </ul>
          </article>
          <article class="info-panel">
            <div class="eyebrow">轻量技术体检与 AI 自动化</div>
            <h3>在有限预算内，快速交付看得见的改进</h3>
            <ul class="check-list">
              <li>从高频故障、重复录入、人工汇总和数据不一致中找出最值得优先处理的环节。</li>
              <li>提供数据报表自动化、AI 知识库维护与日常流程自动化，减少重复查询和手工整理。</li>
              <li>目标不是重做系统，而是先交付能投入使用的修复、报表、工具或流程改进成果。</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section proof-section" id="cases" aria-labelledby="cases-title">
      <div class="wrap">
        <div class="section-head">
          <h2 id="cases-title" class="section-title">这些问题，正在悄悄拖慢企业</h2>
          <p class="section-subtitle">如果已出现其中两项以上，通常值得先做一次业务与系统评估。</p>
        </div>
        <div class="pain-grid">
          <article class="pain-card"><div class="icon">单</div><h3>订单和售后靠人盯</h3><p>订单散在微信、表格和收银系统，付款、发货、退款与售后状态难追踪。</p><div class="resolve"><strong>系统改变</strong>让订单按状态推进，异常可直接筛出。</div></article>
          <article class="pain-card"><div class="icon">客</div><h3>客户资料跟着员工走</h3><p>线索、跟进和成交记录留在个人手机，人员变化后客户关系也随之断层。</p><div class="resolve"><strong>系统改变</strong>让客户资产沉淀在企业，而非个人账号。</div></article>
          <article class="pain-card"><div class="icon">库</div><h3>库存和履约总对不上</h3><p>入库、出库、调拨与预售库存靠人工同步，超卖、漏发和盘点差异反复出现。</p><div class="resolve"><strong>系统改变</strong>让每次库存变化都有依据和预警。</div></article>
          <article class="pain-card"><div class="icon">协</div><h3>跨部门协作靠催</h3><p>进度不透明、职责不清楚，事情卡在哪里只能逐个询问。</p><div class="resolve"><strong>系统改变</strong>让待办、审批和关键操作都有记录。</div></article>
          <article class="pain-card"><div class="icon">数</div><h3>经营数据靠月底汇总</h3><p>销售、回款、库存和活动效果依赖人工导表，管理决策总是慢一步。</p><div class="resolve"><strong>系统改变</strong>让经营数据按统一口径自动汇总。</div></article>
          <article class="pain-card"><div class="icon">接</div><h3>新旧系统各自为政</h3><p>ERP、Excel、支付、物流和客户工具彼此割裂，员工重复录入、数据相互矛盾。</p><div class="resolve"><strong>系统改变</strong>按现有条件集成、导入或自动同步。</div></article>
        </div>
        <div class="section-inline-cta"><RouterLink class="btn secondary" to="/system-capability">查看问题对应的系统能力</RouterLink></div>
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
          <article class="process-card"><div class="step-number">03 开发与接口测试</div><h3>前后台同步推进</h3><p>完成前台、后台、接口、数据库、支付和消息通知，按模块确认。</p></article>
          <article class="process-card"><div class="step-number">04 发布维护</div><h3>上线后继续跟进</h3><p>协助发布、部署、问题修复，并根据运营反馈规划后续迭代。</p></article>
        </div>
      </div>
    </section>

    <section class="section compact-faq-section" aria-labelledby="faq-title">
      <div class="wrap">
        <div class="section-head"><h2 id="faq-title" class="section-title">合作前常见问题，官网直接给出清晰答案</h2></div>
        <div class="faq-grid compact-faq-grid">
          <article class="faq-card"><h3>可以只做 APP、CRM 或 ERP 中的一种吗？</h3><p>可以。单项开发或组合开发都可以，先从最需要上线的一条完整业务流程开始。</p></article>
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
          <div class="contact-box"><WechatQr compact /><div class="contact-line"><span>手机号</span><a href="tel:18201117988">18201117988</a></div><a class="btn dark" href="tel:18201117988">立即预约需求评估</a></div>
        </div>
      </div>
    </section>

    <footer class="footer"><div class="wrap">纳启字节信息技术工作室 · 小程序 / APP / CRM / ERP 商业系统定制开发 · <a class="filing-link" href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">辽ICP备2026015396号</a><RouterLink class="footer-link" to="/privacy">隐私与服务说明</RouterLink></div></footer>
  </main>
</template>

<script setup>
import SiteNav from '../components/SiteNav.vue'
import WechatQr from '../components/WechatQr.vue'
</script>
