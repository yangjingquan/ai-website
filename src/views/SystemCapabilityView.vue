<template>
  <main class="site system-capability-page" id="site" tabindex="-1">

      <div class="wrap">
        <SiteNav />

        <section class="hero">
          <div class="hero-copy">
            <div class="eyebrow">订单 · 客户 · 商品 · 库存 · 权限 · 财务 · 数据 · 接口</div>
            <h1>从高频业务问题出发，搭建能实际使用的系统。</h1>
            <p class="lead">围绕订单、客户、库存、权限和数据，先解决最耗时、最容易出错的环节，再按实际流程扩展系统。</p>
            <div class="hero-actions">
              <a class="btn primary" href="#pain-points">查看业务痛点</a>
              <a class="btn secondary" href="#contact">发起系统评估</a>
            </div>
            <div class="trust-row">
              <div class="trust-item"><strong>8类</strong><span>核心系统能力</span></div>
              <div class="trust-item"><strong>分阶段</strong><span>先跑通完整流程</span></div>
              <div class="trust-item"><strong>可追踪</strong><span>流程状态有记录</span></div>
            </div>
          </div>

          <div class="hero-visual">
            <div class="pain-window">
              <div class="window-top"><div class="window-title">业务痛点处理中心</div><div class="status-pill">持续优化</div></div>
              <div class="pain-stack">
                <div class="pain-row"><div class="pain-dot">乱</div><div><strong>订单状态靠人工追</strong><span>支付、核销、退款和发货状态分散。</span></div><div class="solve-tag">流程化</div></div>
                <div class="pain-row"><div class="pain-dot">散</div><div><strong>客户信息留不住</strong><span>线索、跟进和成交记录无法沉淀。</span></div><div class="solve-tag">CRM</div></div>
                <div class="pain-row"><div class="pain-dot">慢</div><div><strong>数据统计太滞后</strong><span>销量、库存和营收依赖手工汇总。</span></div><div class="solve-tag">看板</div></div>
                <div class="pain-row"><div class="pain-dot">险</div><div><strong>权限和操作不可控</strong><span>岗位、门店和财务的数据边界不清。</span></div><div class="solve-tag">权限</div></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section class="section" id="pain-points">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">先解决最影响业务的 6 个问题</h2>
            <p class="section-subtitle">从订单、客户、库存、权限、数据和接口入手，优先处理最耗时、最易错的环节。</p>
          </div>
          <div class="pain-grid">
            <article class="pain-card"><div class="icon">单</div><h3>订单状态混乱</h3><p>订单状态散落在微信、表格和收银系统，支付、核销、退款和售后难追踪。</p><div class="resolve"><strong>对应能力</strong>订单状态流转、支付回调、售后记录</div></article>
            <article class="pain-card"><div class="icon">客</div><h3>客户跟进断层</h3><p>客户资料留在个人手机，线索、跟进和成交记录无法沉淀。</p><div class="resolve"><strong>对应能力</strong>客户档案、标签分群、跟进提醒</div></article>
            <article class="pain-card"><div class="icon">库</div><h3>库存经常不准</h3><p>入库、出库、调拨和预售库存靠人工同步，容易超卖或漏发。</p><div class="resolve"><strong>对应能力</strong>库存台账、预警、订单占用</div></article>
            <article class="pain-card"><div class="icon">权</div><h3>员工权限不清</h3><p>岗位、门店和财务的数据边界不清，容易出现误操作。</p><div class="resolve"><strong>对应能力</strong>角色权限、数据范围、操作日志</div></article>
            <article class="pain-card"><div class="icon">数</div><h3>经营数据靠手算</h3><p>销售额、利润和活动效果依赖导表汇总，决策总是慢一步。</p><div class="resolve"><strong>对应能力</strong>数据看板、统一口径、报表导出</div></article>
            <article class="pain-card"><div class="icon">接</div><h3>系统互相割裂</h3><p>支付、物流、公众号和旧系统彼此割裂，业务人员重复录入。</p><div class="resolve"><strong>对应能力</strong>接口集成、消息通知、异常重试</div></article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <div class="mapping-band">
            <article class="mapping-card">
              <div class="eyebrow">首期建议</div>
              <h3>先跑通一条完整流程，再扩展高级能力。</h3>
              <p>不堆功能，先让交易、客户、库存、权限和数据能够顺畅流转，再按使用反馈扩展自动化。</p>
              <div class="chip-row"><span class="chip">流程可追</span><span class="chip">客户可管</span><span class="chip">库存可控</span><span class="chip">数据可看</span></div>
            </article>
            <div class="mapping-list">
              <div class="mapping-item"><div class="status-pill">订单难追</div><div><strong>订单流程 + 审批节点 + 消息提醒</strong><span>让业务从“靠人催”变成“按状态推进”。</span></div><div class="map-code">Flow</div></div>
              <div class="mapping-item"><div class="status-pill">客户易丢</div><div><strong>客户档案 + 标签分群 + 跟进记录</strong><span>把客户资料和跟进记录保存到公司系统，不再只留在个人聊天里。</span></div><div class="map-code">CRM</div></div>
              <div class="mapping-item"><div class="status-pill">库存不准</div><div><strong>规格库存 + 入出库 + 预警 + 盘点</strong><span>减少超卖、漏发、错发和库存不透明。</span></div><div class="map-code">ERP</div></div>
              <div class="mapping-item"><div class="status-pill">数据滞后</div><div><strong>数据看板 + 报表导出 + 经营指标</strong><span>不用等人工统计，也能快速看清业务趋势。</span></div><div class="map-code">Data</div></div>
            </div>
          </div>
        </div>
      </section>

      <section class="showcase" id="capability-showcase">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">前台、后台与服务端协同，业务才能真正跑起来</h2>
            <p class="section-subtitle">从客户入口到数据看板，各环节按同一套业务规则协同运行。</p>
          </div>
          <div class="showcase-grid">
            <div class="ops-board">
              <div class="dash-nav">
                <strong>业务协同中心</strong>
                <div class="dash-tabs">
                  <button
                    v-for="tab in systemTabs"
                    :key="tab.key"
                    type="button"
                    class="dash-tab"
                    :class="{ active: activeSystemTab === tab.key }"
                    :aria-pressed="activeSystemTab === tab.key"
                    @click="activeSystemTab = tab.key"
                  >
                    {{ tab.label }}
                  </button>
                </div>
              </div>
              <div class="ops-grid">
                <div v-for="block in activeSystem.blocks" :key="block.title" class="ops-block"><strong>{{ block.title }}</strong><span>{{ block.description }}</span></div>
              </div>
              <div class="bar-area"><span style="height: 56px"></span><span style="height: 84px"></span><span style="height: 108px"></span><span style="height: 72px"></span><span style="height: 126px"></span><span style="height: 92px"></span><span style="height: 114px"></span></div>
            </div>
            <div class="module-list">
              <article v-for="card in activeSystem.cards" :key="card.title" class="module-card">
                <h3>{{ card.title }}</h3>
                <p>{{ card.description }}</p>
                <div class="chip-row"><span v-for="chip in card.chips" :key="chip" class="chip">{{ chip }}</span></div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="capabilities">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">8 类核心能力，覆盖业务从交易到管理的关键环节</h2>
            <p class="section-subtitle">把订单、客户、商品、库存、权限、财务、数据和接口串成一条业务链。</p>
          </div>
          <div class="capability-grid">
            <article class="cap-card"><div class="icon">订</div><h3>订单流程能力</h3><p>下单、支付、退款、核销、发货和售后状态统一管理。</p><div class="feature-list"><span>状态流转</span><span>支付回调</span><span>售后记录</span></div></article>
            <article class="cap-card"><div class="icon">客</div><h3>客户管理能力</h3><p>客户档案、来源、标签、跟进和转化记录统一沉淀。</p><div class="feature-list"><span>客户沉淀</span><span>销售跟进</span><span>复购运营</span></div></article>
            <article class="cap-card"><div class="icon">商</div><h3>商品服务能力</h3><p>商品分类、规格、价格、套餐、服务项目和上下架统一管理。</p><div class="feature-list"><span>规格价格</span><span>服务项目</span><span>上下架管理</span></div></article>
            <article class="cap-card"><div class="icon">库</div><h3>库存供应能力</h3><p>入库、出库、调拨、盘点、预警和订单占用规则可追踪。</p><div class="feature-list"><span>库存预警</span><span>入出库记录</span><span>门店调拨</span></div></article>
            <article class="cap-card"><div class="icon">权</div><h3>权限审批能力</h3><p>角色权限、数据范围、审批节点和关键操作日志统一配置。</p><div class="feature-list"><span>角色权限</span><span>审批节点</span><span>操作日志</span></div></article>
            <article class="cap-card"><div class="icon">财</div><h3>财务结算能力</h3><p>支付流水、退款、佣金、采购成本和对账数据集中管理。</p><div class="feature-list"><span>流水对账</span><span>佣金结算</span><span>收入报表</span></div></article>
            <article class="cap-card"><div class="icon">数</div><h3>数据报表能力</h3><p>订单、客户、商品、库存和活动数据统一看板与导出。</p><div class="feature-list"><span>指标看板</span><span>筛选分析</span><span>导入导出</span></div></article>
            <article class="cap-card"><div class="icon">接</div><h3>接口集成能力</h3><p>对接支付、短信、物流、地图、企业微信、公众号和旧系统。</p><div class="feature-list"><span>第三方接口</span><span>消息通知</span><span>异常重试</span></div></article>
          </div>
        </div>
      </section>

      <section class="section" id="value">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">系统上线后的价值，要能被业务人员和管理者看见</h2>
            <p class="section-subtitle">减少重复录入、降低操作错误，让业务状态和经营数据更容易被看见。</p>
          </div>
          <div class="metrics-grid">
            <article class="metric-card"><div class="metric-number">少</div><h3>少重复录入</h3><p>客户、订单、库存和财务数据在系统里流转，减少多平台重复登记。</p></article>
            <article class="metric-card"><div class="metric-number">准</div><h3>状态更准确</h3><p>支付、退款、核销、发货、审批和库存变化都有记录，异常更容易排查。</p></article>
            <article class="metric-card"><div class="metric-number">快</div><h3>响应更及时</h3><p>消息提醒、后台筛选、数据看板和流程节点让团队处理问题更快。</p></article>
            <article class="metric-card"><div class="metric-number">清</div><h3>管理更清楚</h3><p>客户、员工、商品、订单和经营数据都有归口，老板能看到真实进展。</p></article>
          </div>
        </div>
      </section>

      <section class="section" id="delivery-process">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">系统能力落地流程：先定优先级，再分阶段上线</h2>
            <p class="section-subtitle">先确认流程边界、首期范围和验收结果，再逐步扩展高级能力。</p>
          </div>
          <div class="process-grid">
            <article class="process-card"><div class="step-number">01 找痛点</div><h3>确认最影响业务的环节</h3><p>梳理订单、客户、库存、权限、数据和接口中最耗时、最容易出错的问题。</p></article>
            <article class="process-card"><div class="step-number">02 定闭环</div><h3>先跑通核心流程</h3><p>把下单、支付、客户沉淀、后台处理、数据记录和消息通知连起来。</p></article>
            <article class="process-card"><div class="step-number">03 补管理</div><h3>加入权限和运营后台</h3><p>补齐员工权限、审批节点、库存管理、报表导出和后台配置能力。</p></article>
            <article class="process-card"><div class="step-number">04 持续优化</div><h3>根据运营反馈迭代</h3><p>上线后继续优化自动化、报表、营销、接口和移动端体验。</p></article>
          </div>
          <div class="process-result"><strong>首期交付关注：</strong>流程边界、核心页面、数据字段、权限规则和验收结果。</div>
        </div>
      </section>

      <section class="section" id="faq">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">系统能力常见问题</h2>
            <p class="section-subtitle">先回答方案选择中最常见的 4 个问题。</p>
          </div>
          <div class="faq-grid">
            <details class="faq-card"><summary><h3>现在用表格管理，也需要系统吗？</h3></summary><p>如果只是少量记录，表格足够；如果已经出现重复录入、库存不准、客户丢失、订单难追踪，就适合系统化。</p></details>
            <details class="faq-card"><summary><h3>能不能只先解决一个痛点？</h3></summary><p>可以。比如先做订单和后台，后续再加客户、库存、财务和报表。关键是前期把数据结构预留好。</p></details>
            <details class="faq-card"><summary><h3>后台权限能做到多细？</h3></summary><p>可以按角色、门店、部门、数据范围和功能菜单配置，也可以记录关键操作日志，方便追踪责任。</p></details>
            <details class="faq-card"><summary><h3>系统能对接现有软件吗？</h3></summary><p>要看现有系统是否提供接口或导入导出能力。能对接时可自动同步，不能对接时也可以设计半自动导入流程。</p></details>
          </div>
        </div>
      </section>

      <section class="contact-section" id="contact">
        <div class="wrap">
          <div class="contact-panel">
            <div>
              <h2>如果你的业务已经被流程、客户、库存或数据卡住，可以先聊痛点。</h2>
              <p>不需要先写完整需求文档。直接描述最麻烦的环节，我会帮你确定首期能力、交付范围，以及是否需要对接现有系统。</p>
              <div class="chip-row"><span class="chip">痛点梳理</span><span class="chip">系统能力</span><span class="chip">流程闭环</span><span class="chip">数据看板</span></div>
            </div>
            <div class="contact-box">
              <WechatQr compact />
              <div class="contact-line"><span>手机号</span><a href="tel:18201117988">18201117988</a></div>
              <a class="btn dark" href="tel:18201117988">立即预约系统评估</a>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="wrap">小肥羊开发工作室 · 系统能力 / 业务痛点 / 流程闭环 / 数据管理 · <a class="filing-link" href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">辽ICP备2026015396号</a><RouterLink class="footer-link" to="/privacy">隐私与服务说明</RouterLink></div>
      </footer>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import SiteNav from '../components/SiteNav.vue'
import WechatQr from '../components/WechatQr.vue'

const activeSystemTab = ref('order')

const systemTabs = [
  {
    key: 'order',
    label: '订单',
    blocks: [
      { title: '前台入口', description: '小程序、APP、H5 承接客户访问、下单、预约、支付、查询和消息触达。' },
      { title: '后台运营', description: '商品、客户、订单、活动、员工、库存、审批和报表都能被配置和维护。' },
      { title: '服务端规则', description: '权限认证、订单状态、支付回调、库存扣减、消息通知和定时任务稳定执行。' },
      { title: '数据看板', description: '营收、订单、客户、库存、转化、员工绩效和异常数据统一汇总。' }
    ],
    cards: [
      { title: '客户侧更顺', description: '客户可以清楚完成浏览、下单、预约、支付、查询、退款和消息接收，减少客服反复解释。', chips: ['体验', '支付', '通知'] },
      { title: '员工侧更省', description: '员工按角色处理订单、核销、跟进、发货、审批和售后，不再靠聊天记录反复确认。', chips: ['权限', '流程', '协同'] },
      { title: '管理侧更清楚', description: '老板和管理者能看到客户、订单、库存、营收和异常情况，知道问题卡在哪一步。', chips: ['看板', '报表', '决策'] }
    ]
  },
  {
    key: 'customer',
    label: '客户',
    blocks: [
      { title: '客户档案', description: '沉淀姓名、电话、来源、标签、等级、权益、成交记录和服务偏好。' },
      { title: '线索跟进', description: '销售线索分配、跟进记录、提醒任务、阶段状态和转化结果可追踪。' },
      { title: '会员与老客运营', description: '会员分层、优惠活动、复购提醒、消息触达和客户分群统一管理。' },
      { title: '转化分析', description: '统计客户来源、跟进效率、成交周期、复购率和销售绩效。' }
    ],
    cards: [
      { title: '客户资料留在系统里', description: '线索、跟进、成交和售后记录统一保存，不再只存在个人聊天或表格中。', chips: ['档案', '标签', '记录'] },
      { title: '销售跟进更连续', description: '分配、提醒、跟进阶段和客户状态清晰，减少重复沟通和线索流失。', chips: ['分配', '提醒', '转化'] },
      { title: '运营动作更精准', description: '按标签、等级、来源和消费记录做客户分群，便于后续营销和复购运营。', chips: ['分群', '会员', '复购'] }
    ]
  },
  {
    key: 'inventory',
    label: '库存',
    blocks: [
      { title: '规格库存', description: '商品规格、服务库存、门店库存、批次库存和订单占用规则统一维护。' },
      { title: '入库出库', description: '采购入库、销售出库、调拨、盘点、报损和库存变动记录可追溯。' },
      { title: '库存预警', description: '低库存、超卖风险、预售占用、门店缺货和异常变动及时提醒。' },
      { title: '采购协同', description: '结合销量、库存周转和采购成本，辅助补货、调拨和成本控制。' }
    ],
    cards: [
      { title: '库存数量更准确', description: '订单、入库、出库、调拨和盘点联动，减少超卖、漏发和人工同步错误。', chips: ['规格', '批次', '占用'] },
      { title: '仓储操作可追踪', description: '每次库存变化都有记录，方便追查责任、核对账实和处理异常。', chips: ['入库', '出库', '盘点'] },
      { title: '补货决策更清楚', description: '根据库存预警、销售趋势和门店消耗，帮助判断什么时候补、补多少。', chips: ['预警', '周转', '补货'] }
    ]
  },
  {
    key: 'data',
    label: '数据',
    blocks: [
      { title: '经营指标', description: '订单量、销售额、客户增长、库存周转、退款售后和活动效果集中展示。' },
      { title: '报表导出', description: '按时间、门店、员工、商品、客户来源和状态筛选导出经营数据。' },
      { title: '异常洞察', description: '发现订单卡点、库存异常、客户流失、退款高发和审批积压问题。' },
      { title: '管理决策', description: '用统一统计口径辅助老板和管理者快速判断业务趋势和改进方向。' }
    ],
    cards: [
      { title: '数据不用手工汇总', description: '订单、客户、库存、财务和员工数据自动汇总，减少导表和人工统计。', chips: ['指标', '筛选', '汇总'] },
      { title: '问题能被及时发现', description: '通过趋势、异常和对比数据，看清订单、库存、客户和流程卡点。', chips: ['异常', '趋势', '预警'] },
      { title: '经营判断更有依据', description: '老板能看到真实营收、商品销量、客户转化和团队执行情况。', chips: ['报表', '看板', '决策'] }
    ]
  }
]

const activeSystem = computed(() => systemTabs.find((tab) => tab.key === activeSystemTab.value) || systemTabs[0])
</script>
