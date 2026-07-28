<template>
  <main class="site" id="site">

      <div class="wrap">
        <SiteNav />

        <section class="hero">
          <div class="hero-copy">
            <div class="eyebrow">预设产品模块 · 客户定制功能 · 一体化交付</div>
            <h1>产品方案先有框架，再按你的业务定制。</h1>
            <p class="lead">提供商城、团购、点餐、预约、APP、CRM、ERP 等成熟产品方向，先用预设模块缩短启动周期，再围绕客户流程、字段、权限、接口和报表做定制开发。</p>
            <div class="hero-actions">
              <button class="btn primary">查看组合方案</button>
              <button class="btn secondary">咨询定制范围</button>
            </div>
            <div class="trust-row">
              <div class="trust-item"><strong>7类</strong><span>预设产品方向</span></div>
              <div class="trust-item"><strong>20+</strong><span>常用功能模块</span></div>
              <div class="trust-item"><strong>定制</strong><span>按业务流程扩展</span></div>
            </div>
          </div>

          <div class="hero-visual">
            <div class="solution-window">
              <div class="window-top"><div class="window-title">产品方案配置中心</div><div class="status-pill">可组合</div></div>
              <div class="solution-tabs">
                <button
                  v-for="tab in solutionTabs"
                  :key="tab.key"
                  type="button"
                  :class="{ active: activeSolutionTab === tab.key }"
                  @click="activeSolutionTab = tab.key"
                >
                  {{ tab.label }}
                </button>
              </div>
              <div class="module-flow">
                <div v-for="card in activeSolution.cards" :key="card.title" class="flow-card">
                  <strong>{{ card.title }}</strong>
                  <span>{{ card.description }}</span>
                </div>
              </div>
              <div class="merge-line"><div class="merge-core">{{ activeSolution.result }}</div></div>
            </div>
            <div class="floating-card"><strong>不是套模板</strong><span>预设功能负责提速，定制功能负责贴合真实业务。</span></div>
          </div>
        </section>
      </div>

      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">预设产品方向覆盖常见商业系统，从第一天就有可讨论框架</h2>
            <p class="section-subtitle">客户不需要从空白文档开始描述需求，可以先选择接近业务的产品方向，再逐步确认页面、流程、后台和数据规则。</p>
          </div>
          <div class="product-grid">
            <article class="product-card"><div class="icon">商</div><h3>商城小程序</h3><p>商品售卖、会员复购、优惠活动和微信支付，适合品牌零售、电商和私域交易。</p><div class="feature-list"><span>商品规格库存</span><span>订单支付退款</span><span>会员积分优惠</span></div></article>
            <article class="product-card"><div class="icon">团</div><h3>团购小程序</h3><p>活动商品、团长管理、自提核销和分销统计，适合社区团购、社群团购和预售业务。</p><div class="feature-list"><span>活动批次配置</span><span>团长佣金统计</span><span>自提核销流程</span></div></article>
            <article class="product-card"><div class="icon">餐</div><h3>点餐小程序</h3><p>桌台点餐、外带自取、套餐规格和后厨打印，适合餐饮门店和连锁轻餐。</p><div class="feature-list"><span>扫码点餐</span><span>菜品规格口味</span><span>营业时段设置</span></div></article>
            <article class="product-card"><div class="icon">约</div><h3>预约小程序</h3><p>服务项目、时段库存、员工排班和到店记录，适合美业、维修、课程和场馆预约。</p><div class="feature-list"><span>时段排期</span><span>服务人员管理</span><span>预约提醒</span></div></article>
            <article class="product-card"><div class="icon">APP</div><h3>APP 定制开发</h3><p>会员服务、移动办公、业务表单、消息推送和版本发布，适合高频使用场景。</p><div class="feature-list"><span>iOS / Android</span><span>推送与扫码</span><span>接口联调发布</span></div></article>
            <article class="product-card"><div class="icon">客</div><h3>CRM 客户系统</h3><p>客户档案、线索分配、跟进记录、标签分群和转化报表，帮助客户资产沉淀。</p><div class="feature-list"><span>线索分配</span><span>客户标签</span><span>转化看板</span></div></article>
            <article class="product-card"><div class="icon">ERP</div><h3>ERP 管理系统</h3><p>采购、库存、订单、财务、审批和权限管理，帮助内部流程统一到一个后台。</p><div class="feature-list"><span>进销存管理</span><span>审批权限</span><span>经营报表</span></div></article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <div class="hybrid-band">
            <article class="hybrid-card">
              <div class="eyebrow">产品方案重点</div>
              <h3>预设功能解决通用问题，定制功能解决你的业务差异。</h3>
              <p>一个可落地的商业系统，既需要登录、订单、支付、后台、权限、报表这些稳定底座，也需要符合行业规则的流程设计。产品方案页面要让客户明白：不是买固定模板，而是在成熟模块上继续定制。</p>
              <div class="chip-row"><span class="chip">启动更快</span><span class="chip">范围更清楚</span><span class="chip">功能可扩展</span><span class="chip">后续可维护</span></div>
            </article>
            <div class="compare-list">
              <div class="compare-item"><div class="status-pill compare-tag">通用底座</div><div><strong>登录、支付、订单、后台、权限、报表</strong><span>沉淀为可复用功能模块，降低重复开发成本。</span></div><div class="compare-code">Base</div></div>
              <div class="compare-item"><div class="status-pill compare-tag">业务差异</div><div><strong>价格规则、审批流程、排班、分销、结算</strong><span>围绕客户行业和管理方式做定制逻辑。</span></div><div class="compare-code">Custom</div></div>
              <div class="compare-item"><div class="status-pill compare-tag">系统连接</div><div><strong>微信支付、短信、地图、物流、企业微信、旧系统</strong><span>按项目需要对接第三方接口和已有业务资产。</span></div><div class="compare-code">API</div></div>
              <div class="compare-item"><div class="status-pill compare-tag">长期运营</div><div><strong>数据统计、运营配置、导入导出、版本迭代</strong><span>交付后客户可以继续运营，而不是只能看页面。</span></div><div class="compare-code">Ops</div></div>
            </div>
          </div>
        </div>
      </section>

      <section class="showcase">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">像搭积木一样组合模块，但每块都服务真实业务</h2>
            <p class="section-subtitle">页面展示要让客户一眼看懂：基础模块已经准备好，个性规则可以继续加，最终交付的是前台、后台、接口和数据一起工作的系统。</p>
          </div>
          <div class="builder-grid">
            <div class="builder-board">
              <div class="builder-head"><strong>预设功能库</strong><div class="status-pill">按需启用</div></div>
              <div class="builder-grid-inner">
                <div class="module-tile"><strong>用户与会员</strong><span>登录注册、会员等级、积分、优惠券、客户标签。</span></div>
                <div class="module-tile"><strong>商品与服务</strong><span>分类、规格、价格、库存、套餐、服务项目。</span></div>
                <div class="module-tile"><strong>订单与支付</strong><span>下单、支付、退款、核销、发货、售后状态。</span></div>
                <div class="module-tile"><strong>客户与销售</strong><span>线索、跟进、分配、转化阶段、销售报表。</span></div>
                <div class="module-tile"><strong>库存与审批</strong><span>入库、出库、调拨、盘点、预警、审批流。</span></div>
                <div class="module-tile"><strong>权限与报表</strong><span>角色权限、操作日志、数据看板、导入导出。</span></div>
              </div>
              <div class="progress-bars"><span style="height: 62px"></span><span style="height: 86px"></span><span style="height: 118px"></span><span style="height: 74px"></span><span style="height: 130px"></span><span style="height: 98px"></span><span style="height: 112px"></span></div>
            </div>
            <div class="builder-side">
              <article class="side-card"><h3>前台体验可定制</h3><p>首页装修、列表筛选、详情结构、表单流程、客户中心和消息提醒按业务场景调整。</p><div class="chip-row"><span class="chip">小程序</span><span class="chip">APP</span><span class="chip">H5</span></div></article>
              <article class="side-card"><h3>后台管理可定制</h3><p>菜单、字段、状态、审批节点、员工权限、数据报表和操作入口按团队工作方式配置。</p><div class="chip-row"><span class="chip">CRM</span><span class="chip">ERP</span><span class="chip">管理后台</span></div></article>
              <article class="side-card"><h3>业务接口可定制</h3><p>对接支付、短信、物流、地图、企业微信、公众号或旧系统，让新系统能进入现有流程。</p><div class="chip-row"><span class="chip">支付</span><span class="chip">消息</span><span class="chip">第三方接口</span></div></article>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">客户定制功能从六个层面展开，避免只改颜色和文案</h2>
            <p class="section-subtitle">真正影响使用效果的定制，通常在流程、字段、权限、数据、接口和运营配置里，而不只是页面长什么样。</p>
          </div>
          <div class="custom-grid">
            <article class="custom-card"><div class="icon">页</div><h3>页面结构定制</h3><p>按业务重新设计首页、列表、详情、表单、订单中心、客户中心和后台菜单结构。</p></article>
            <article class="custom-card"><div class="icon">流</div><h3>业务流程定制</h3><p>定制下单、预约、审批、核销、发货、退款、结算、跟进和售后等流程节点。</p></article>
            <article class="custom-card"><div class="icon">字</div><h3>数据字段定制</h3><p>根据行业表单、客户档案、商品属性、库存单位和报表口径设计字段结构。</p></article>
            <article class="custom-card"><div class="icon">权</div><h3>权限角色定制</h3><p>区分老板、管理员、员工、门店、团长、销售、财务和客户等不同操作权限。</p></article>
            <article class="custom-card"><div class="icon">接</div><h3>第三方接口定制</h3><p>对接支付、短信、物流、地图、企业微信、公众号、开放平台和已有内部系统。</p></article>
            <article class="custom-card"><div class="icon">报</div><h3>报表看板定制</h3><p>围绕订单、客户、商品、库存、员工绩效和经营收入设计老板看得懂的数据看板。</p></article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">不同业务可以选择不同组合，不必一次做成庞大系统</h2>
            <p class="section-subtitle">先跑通核心链路，再根据运营反馈扩展 CRM、ERP、营销、财务或更多端口，项目更容易控范围、控成本、控周期。</p>
          </div>
          <div class="package-row">
            <article class="package-card"><div class="package-top"><div class="icon">轻</div><div class="mini-tag">快速上线</div></div><h3>轻量交易方案</h3><p>小程序前台 + 商品服务 + 订单支付 + 基础后台，适合先验证业务闭环。</p><div class="feature-list"><span>商城 / 预约 / 点餐</span><span>支付订单</span><span>基础运营后台</span></div></article>
            <article class="package-card"><div class="package-top"><div class="icon">客</div><div class="mini-tag">客户沉淀</div></div><h3>客户增长方案</h3><p>交易入口 + CRM 客户管理 + 标签分群 + 跟进记录，适合私域运营和销售团队。</p><div class="feature-list"><span>线索分配</span><span>客户标签</span><span>转化报表</span></div></article>
            <article class="package-card"><div class="package-top"><div class="icon">管</div><div class="mini-tag">内部协同</div></div><h3>业务管理方案</h3><p>后台管理 + 库存采购 + 审批权限 + 财务统计，适合把内部流程系统化。</p><div class="feature-list"><span>进销存</span><span>审批权限</span><span>经营报表</span></div></article>
            <article class="package-card"><div class="package-top"><div class="icon">全</div><div class="mini-tag">完整系统</div></div><h3>多端一体方案</h3><p>小程序 / APP + CRM + ERP + 数据看板，适合从获客到管理一套打通。</p><div class="feature-list"><span>多端统一</span><span>前后台联动</span><span>长期迭代</span></div></article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">产品方案落地流程，先选方向，再定差异，最后分阶段上线</h2>
            <p class="section-subtitle">定制开发不需要一开始就把所有细节想完，但必须先确认核心业务闭环和首期上线边界。</p>
          </div>
          <div class="process-grid">
            <article class="process-card"><div class="step-number">01 选择方向</div><h3>确定接近的产品底座</h3><p>先判断适合商城、预约、点餐、APP、CRM、ERP 或复合系统。</p></article>
            <article class="process-card"><div class="step-number">02 梳理差异</div><h3>确认客户专属规则</h3><p>梳理角色、流程、字段、价格、权限、接口和报表等定制内容。</p></article>
            <article class="process-card"><div class="step-number">03 组合开发</div><h3>预设模块加定制模块</h3><p>先跑通通用链路，再补齐行业差异、后台管理和第三方能力。</p></article>
            <article class="process-card"><div class="step-number">04 上线迭代</div><h3>交付后继续扩展</h3><p>根据真实运营反馈继续增加营销、客户、库存、财务和报表能力。</p></article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">产品方案常见问题，把“预设”和“定制”说清楚</h2>
            <p class="section-subtitle">客户最关心的是：是不是模板、能不能改、后续能不能扩展、首期应该做到什么程度。</p>
          </div>
          <div class="faq-grid">
            <article class="faq-card"><h3>预设功能是不是固定模板？</h3><p>不是。预设功能是通用业务模块，用来缩短启动时间；页面、流程、字段、权限和接口都可以按项目定制。</p></article>
            <article class="faq-card"><h3>能不能先做小程序，后面再加 CRM 或 ERP？</h3><p>可以。建议先把订单、客户和后台数据结构规划好，后续增加 CRM、库存、审批和报表会更顺。</p></article>
            <article class="faq-card"><h3>已有自己的业务流程怎么办？</h3><p>可以把现有表格、流程图、参考系统或人工操作方式发来，先拆成页面、字段、状态和权限，再进入开发。</p></article>
            <article class="faq-card"><h3>首期功能做多少比较合适？</h3><p>首期优先做能跑通交易或管理闭环的核心功能，把非关键营销、复杂报表和高级自动化留到后续迭代。</p></article>
          </div>
        </div>
      </section>

      <section class="contact-section" id="contact">
        <div class="wrap">
          <div class="contact-panel">
            <div>
              <h2>有产品想法或业务流程，可以先一起拆成可开发方案。</h2>
              <p>你可以准备业务类型、参考案例、必须上线的功能和后续想扩展的方向。我会帮你判断适合用哪些预设模块、哪些部分需要定制开发。</p>
              <div class="chip-row"><span class="chip">预设模块</span><span class="chip">定制功能</span><span class="chip">组合方案</span><span class="chip">上线迭代</span></div>
            </div>
            <div class="contact-box">
              <div class="contact-line"><span>微信号</span><strong>Yizhixiaofeiyang7988</strong></div>
              <div class="contact-line"><span>手机号</span><strong>15566047217</strong></div>
              <button class="btn dark">立即沟通产品方案</button>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="wrap">小肥羊开发工作室 · 产品方案 / 预设模块 / 客户定制功能 / 商业系统开发 · 辽ICP备2026015396号</div>
      </footer>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import SiteNav from '../components/SiteNav.vue'

const activeSolutionTab = ref('preset')

const solutionTabs = [
  {
    key: 'preset',
    label: '预设模块',
    result: '组合交付',
    cards: [
      {
        title: '标准功能库',
        description: '商品、订单、会员、支付、客户、库存、权限、报表。'
      },
      {
        title: '客户业务规则',
        description: '价格、审批、排班、分销、结算、接口、统计口径。'
      }
    ]
  },
  {
    key: 'custom',
    label: '定制功能',
    result: '按需扩展',
    cards: [
      {
        title: '流程字段定制',
        description: '围绕客户真实业务调整页面路径、表单字段、订单状态和审批节点。'
      },
      {
        title: '角色权限规则',
        description: '区分老板、员工、门店、团长、销售、财务等角色的数据范围和操作权限。'
      }
    ]
  },
  {
    key: 'ops',
    label: '上线维护',
    result: '长期迭代',
    cards: [
      {
        title: '部署发布支持',
        description: '处理服务器、域名证书、小程序审核、APP 发布、数据库备份和上线排查。'
      },
      {
        title: '运营迭代维护',
        description: '上线后根据订单、客户、库存、报表和营销反馈继续优化功能与体验。'
      }
    ]
  }
]

const activeSolution = computed(() => solutionTabs.find((tab) => tab.key === activeSolutionTab.value) || solutionTabs[0])
</script>
