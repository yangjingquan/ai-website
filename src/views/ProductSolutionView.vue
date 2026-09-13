<template>
  <main class="site product-solution-page" id="site" tabindex="-1">

      <div class="wrap">
        <SiteNav />

        <section class="hero">
          <div class="hero-copy">
            <div class="eyebrow">获客交易 · 客户沉淀 · 内部协同 · 经营管理</div>
            <h1>先确定企业想改善什么，再组合适合的系统能力。</h1>
            <p class="lead">不是从商城、CRM 或 ERP 的名称开始选，而是先判断要解决的是客户自助交易、老客复购、内部履约，还是经营决策，再组合成熟模块与专属流程。</p>
            <div class="hero-actions">
              <a class="btn primary" href="#contact">获取适合的方案</a>
              <a class="btn secondary" href="#contact">发起范围评估</a>
            </div>
            <div class="trust-row">
              <div class="trust-item"><strong>先定目标</strong><span>不盲目购买功能</span></div>
              <div class="trust-item"><strong>首期闭环</strong><span>先验证关键流程</span></div>
              <div class="trust-item"><strong>持续扩展</strong><span>按使用反馈补能力</span></div>
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
                  :aria-pressed="activeSolutionTab === tab.key"
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
          </div>
        </section>
      </div>

      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">先按业务目标找方案，不必一开始就选技术产品</h2>
            <p class="section-subtitle">以下方向分别支撑获客交易、客户沉淀、履约协同与内部管理；再根据页面、流程和数据规则组合落地。</p>
          </div>
          <div class="product-grid">
            <article class="product-card"><div class="icon">商</div><h3>商城小程序</h3><p>让客户能自主浏览、下单、支付和查询，减少客服反复确认；适合品牌零售、电商和微信社群销售。</p><div class="initial-recommendation"><strong>首期建议</strong><span>商品、订单、支付、基础后台</span></div><div class="feature-list"><span>商品规格库存</span><span>订单支付退款</span><span>会员积分优惠</span></div></article>
            <article class="product-card"><div class="icon">团</div><h3>团购小程序</h3><p>让活动、团长、库存、提货和核销围绕同一份订单记录流转，减少表格与聊天里的遗漏。</p><div class="initial-recommendation"><strong>首期建议</strong><span>活动配置、团长管理、提货核销</span></div><div class="feature-list"><span>活动批次配置</span><span>团长佣金统计</span><span>自提核销流程</span></div></article>
            <article class="product-card"><div class="icon">餐</div><h3>点餐小程序</h3><p>桌台点餐、外带自取、套餐规格和后厨打印，适合餐饮门店和连锁轻餐。</p><div class="initial-recommendation"><strong>首期建议</strong><span>菜品、桌台、点餐、订单打印</span></div><div class="feature-list"><span>扫码点餐</span><span>菜品规格口味</span><span>营业时段设置</span></div></article>
            <article class="product-card"><div class="icon">约</div><h3>预约小程序</h3><p>把预约、排班、提醒和客户历史记录放在一起，避免人工确认冲突；适合美业、维修、课程和场馆预约。</p><div class="initial-recommendation"><strong>首期建议</strong><span>服务项目、时段排期、预约提醒</span></div><div class="feature-list"><span>时段排期</span><span>服务人员管理</span><span>预约提醒</span></div></article>
            <article class="product-card"><div class="icon">APP</div><h3>APP 定制开发</h3><p>会员服务、移动办公、业务表单、消息推送和版本发布，适合会员服务、移动办公和企业内部工具。</p><div class="initial-recommendation"><strong>首期建议</strong><span>核心移动端流程、登录、消息和接口</span></div><div class="feature-list"><span>iOS / Android</span><span>推送与扫码</span><span>接口测试发布</span></div></article>
            <article class="product-card"><div class="icon">客</div><h3>CRM 客户系统</h3><p>把线索、跟进、成交和服务记录沉淀为企业资产，避免客户资料跟着员工走。</p><div class="initial-recommendation"><strong>首期建议</strong><span>客户档案、线索跟进、标签和转化</span></div><div class="feature-list"><span>线索分配</span><span>客户标签</span><span>转化看板</span></div></article>
            <article class="product-card"><div class="icon">ERP</div><h3>ERP 管理系统</h3><p>把采购、库存、订单、财务和审批纳入同一份业务数据，减少内部反复核对与协作断层。</p><div class="initial-recommendation"><strong>首期建议</strong><span>采购、库存、审批和基础报表</span></div><div class="feature-list"><span>进销存管理</span><span>审批权限</span><span>经营报表</span></div></article>
          </div>
        </div>
      </section>

      <details class="page-more">
        <summary>查看定制方式、组合方案和常见问题</summary>

      <section class="section">
        <div class="wrap">
          <div class="hybrid-band">
            <article class="hybrid-card">
              <div class="eyebrow">产品方案重点</div>
              <h3>预设功能解决通用问题，定制功能解决你的业务差异。</h3>
              <p>先使用登录、订单、支付、后台、权限和报表等成熟模块，再按行业规则定制流程、字段、权限和接口。</p>
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
            <h2 class="section-title">预设模块与定制功能组合，形成完整业务系统</h2>
            <p class="section-subtitle">基础模块先复用，个性规则再定制，最终打通前台、后台、接口和数据。</p>
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
            <h2 class="section-title">客户定制功能，覆盖六个核心层面</h2>
            <p class="section-subtitle">真正影响使用效果的，是流程、字段、权限、数据、接口和运营配置。</p>
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
            <p class="section-subtitle">先跑通一条完整业务流程，再按运营反馈扩展 CRM、ERP、营销和财务能力。</p>
          </div>
          <div class="package-row">
            <article class="package-card"><div class="package-top"><div class="icon">轻</div><div class="mini-tag">快速上线</div></div><h3>轻量交易方案</h3><p>小程序前台 + 商品服务 + 订单支付 + 基础后台，适合先验证业务闭环。</p><div class="feature-list"><span>商城 / 预约 / 点餐</span><span>支付订单</span><span>基础运营后台</span></div></article>
            <article class="package-card"><div class="package-top"><div class="icon">客</div><div class="mini-tag">客户沉淀</div></div><h3>客户增长方案</h3><p>交易入口 + CRM 客户管理 + 标签分群 + 跟进记录，适合微信社群、会员和老客户复购运营。</p><div class="feature-list"><span>线索分配</span><span>客户标签</span><span>转化报表</span></div></article>
            <article class="package-card"><div class="package-top"><div class="icon">管</div><div class="mini-tag">内部协同</div></div><h3>业务管理方案</h3><p>后台管理 + 库存采购 + 审批权限 + 财务统计，适合把内部流程系统化。</p><div class="feature-list"><span>进销存</span><span>审批权限</span><span>经营报表</span></div></article>
            <article class="package-card"><div class="package-top"><div class="icon">全</div><div class="mini-tag">完整系统</div></div><h3>多端一体方案</h3><p>小程序 / APP + CRM + ERP + 数据看板，适合把获客、交易和内部管理连接起来。</p><div class="feature-list"><span>多端统一</span><span>前后台联动</span><span>长期迭代</span></div></article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">产品方案落地流程：先选方向，再定差异，分阶段上线</h2>
            <p class="section-subtitle">先确认核心业务闭环和首期边界，再逐步补齐细节。</p>
          </div>
          <div class="process-grid">
            <article class="process-card"><div class="step-number">01 选择方向</div><h3>确定接近的基础方案</h3><p>先判断适合商城、预约、点餐、APP、CRM、ERP 或复合系统。</p></article>
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
            <p class="section-subtitle">重点确认：是不是模板、能不能改、能否扩展、首期做什么。</p>
          </div>
          <div class="faq-grid">
            <article class="faq-card"><h3>预设功能是不是固定模板？</h3><p>不是。预设功能是通用业务模块，用来缩短启动时间；页面、流程、字段、权限和接口都可以按项目定制。</p></article>
            <article class="faq-card"><h3>能不能先做小程序，后面再加 CRM 或 ERP？</h3><p>可以。建议先把订单、客户和后台数据结构规划好，后续增加 CRM、库存、审批和报表会更顺。</p></article>
            <article class="faq-card"><h3>已有自己的业务流程怎么办？</h3><p>可以把现有表格、流程图、参考系统或人工操作方式发来，先拆成页面、字段、状态和权限，再进入开发。</p></article>
            <article class="faq-card"><h3>首期功能做多少比较合适？</h3><p>首期优先做能跑通交易或管理闭环的核心功能，把非关键营销、复杂报表和高级自动化留到后续迭代。</p></article>
          </div>
        </div>
      </section>

      </details>

      <section class="contact-section" id="contact">
        <div class="wrap">
          <div class="contact-panel">
            <div>
              <h2>有产品想法或业务流程，可以先一起拆成可开发方案。</h2>
              <p>准备业务类型、核心功能和上线目标，我会帮你确定预设模块与定制范围。</p>
              <div class="chip-row"><span class="chip">预设模块</span><span class="chip">定制功能</span><span class="chip">组合方案</span><span class="chip">上线迭代</span></div>
            </div>
            <div class="contact-box">
              <WechatQr compact />
              <div class="contact-line"><span>手机号</span><a href="tel:18201117988">18201117988</a></div>
              <a class="btn dark" href="tel:18201117988">立即预约产品评估</a>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="wrap">纳启字节信息技术工作室 · 产品方案 / 预设模块 / 客户定制功能 / 商业系统开发 · <a class="filing-link" href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">辽ICP备2026015396号</a><RouterLink class="footer-link" to="/privacy">隐私与服务说明</RouterLink></div>
      </footer>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import SiteNav from '../components/SiteNav.vue'
import WechatQr from '../components/WechatQr.vue'

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
