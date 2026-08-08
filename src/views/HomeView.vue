<template>
  <main class="site" id="site">

      <div class="wrap">
        <SiteNav />

        <section class="hero">
          <div class="hero-copy">
            <div class="eyebrow">小程序 · APP · CRM · ERP 定制开发</div>
            <h1>把想法拆成可上线的商业系统，先评估，再开发。</h1>
            <p class="lead">从业务目标、页面原型到前台、后台、接口和部署上线，帮你把“想做一个系统”变成一份看得懂、能验收、可继续迭代的功能清单。</p>
            <div class="hero-actions">
              <RouterLink class="btn primary" to="/product-solution">查看适合的方案</RouterLink>
              <a class="btn secondary" href="#contact">免费需求评估</a>
            </div>
            <div class="trust-row">
              <div class="trust-item"><strong>先评估</strong><span>先给功能清单与范围</span></div>
              <div class="trust-item"><strong>分阶段</strong><span>原型、开发、上线可确认</span></div>
              <div class="trust-item"><strong>全流程</strong><span>前后台与部署持续跟进</span></div>
            </div>
          </div>

          <div class="hero-visual">
            <div class="admin-window">
              <div class="window-top"><div class="window-title">商业系统管理中心</div><div class="status-pill">示例看板</div></div>
              <div class="metric-row">
                <div class="metric-card"><strong>订单</strong><span>状态、支付、退款</span></div>
                <div class="metric-card"><strong>客户</strong><span>档案、跟进、分群</span></div>
                <div class="metric-card"><strong>权限</strong><span>角色、日志、数据范围</span></div>
              </div>
              <div class="bar-chart">
                <div class="bar" style="height: 62px"></div>
                <div class="bar" style="height: 86px"></div>
                <div class="bar" style="height: 122px"></div>
                <div class="bar" style="height: 94px"></div>
                <div class="bar" style="height: 132px"></div>
                <div class="bar" style="height: 106px"></div>
                <div class="bar" style="height: 76px"></div>
              </div>
              <div class="admin-flow"><div class="line"></div><div class="line"></div><div class="line" style="width: 74%"></div><div class="line" style="width: 58%"></div></div>
            </div>
            <div class="phone-mini">
              <div class="phone-screen">
                <div class="phone-head"><strong>移动端 APP</strong><span>客户 · 订单 · 服务</span></div>
                <div class="mini-search"></div>
                <div class="mini-grid"><div class="mini-card"></div><div class="mini-card"></div><div class="mini-card"></div><div class="mini-card"></div></div>
              </div>
            </div>
            <div class="floating-note"><strong>交付物可确认</strong><span>功能清单、页面原型、阶段版本与上线资料，按节点沟通。</span></div>
          </div>
        </section>
      </div>

      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">覆盖线上交易、移动应用和企业管理的核心系统场景</h2>
            <p class="section-subtitle">统一视觉规范、组件样式和后台逻辑，根据业务差异配置首页、商品、订单、会员、客户、库存、审批、财务与数据统计。</p>
          </div>
          <div class="product-grid">
            <article class="product-card">
              <div class="icon">商</div>
              <h3>商城小程序</h3>
              <p>适合零售、电商、品牌商品售卖，覆盖商品分类、购物车、微信支付、会员积分、优惠券与售后流程。</p>
              <div class="feature-list"><span>商品规格与库存</span><span>订单支付与退款</span><span>会员营销活动</span></div>
            </article>
            <article class="product-card">
              <div class="icon">团</div>
              <h3>团购小程序</h3>
              <p>适合社群团购、社区自提和团长分销，重点解决活动配置、团长权限、提货核销与数据统计。</p>
              <div class="feature-list"><span>团长管理</span><span>活动库存同步</span><span>自提核销统计</span></div>
            </article>
            <article class="product-card">
              <div class="icon">餐</div>
              <h3>点餐小程序</h3>
              <p>适合餐饮门店堂食、外带、套餐售卖，支持扫码点餐、桌台管理、菜品规格、订单打印与营业设置。</p>
              <div class="feature-list"><span>桌台码点餐</span><span>菜品规格口味</span><span>后厨接单流程</span></div>
            </article>
            <article class="product-card">
              <div class="icon">约</div>
              <h3>预约类小程序</h3>
              <p>适合美业、维修、课程、场馆和服务预约，支持服务项目、时段库存、员工排班与客户档案。</p>
              <div class="feature-list"><span>预约时段排期</span><span>服务人员管理</span><span>到店提醒记录</span></div>
            </article>
            <article class="product-card">
              <div class="icon">APP</div>
              <h3>APP 定制开发</h3>
              <p>适合会员服务、内容平台、业务工具和移动办公，覆盖登录注册、消息推送、数据同步、支付与版本迭代。</p>
              <div class="feature-list"><span>iOS / Android 适配</span><span>移动端交互设计</span><span>接口联调与发布</span></div>
            </article>
            <article class="product-card">
              <div class="icon">客</div>
              <h3>CRM 客户管理系统</h3>
              <p>适合销售跟进、私域运营和客户服务，支持客户档案、线索分配、跟进记录、标签分群与转化报表。</p>
              <div class="feature-list"><span>客户线索沉淀</span><span>销售跟进流程</span><span>转化数据看板</span></div>
            </article>
            <article class="product-card">
              <div class="icon">ERP</div>
              <h3>ERP 业务管理系统</h3>
              <p>适合进销存、采购、仓储、财务和内部审批，帮助企业把订单、库存、成本与执行流程统一管理。</p>
              <div class="feature-list"><span>采购库存管理</span><span>审批权限流程</span><span>经营报表统计</span></div>
            </article>
          </div>
        </div>
      </section>

      <section class="section proof-section">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">先看问题怎么解决，再决定要不要开发</h2>
            <p class="section-subtitle">下面是常见业务场景的案例方向示例。真实客户名称、截图和结果指标可在获得授权后补充，避免用无法核验的数字替代证据。</p>
          </div>
          <div class="proof-grid">
            <article class="proof-card">
              <div class="proof-meta"><span class="proof-label">示例案例 01</span><span class="proof-status">案例方向</span></div>
              <h3>社区团购：从活动发布到提货核销</h3>
              <div class="proof-row"><strong>常见问题</strong><span>团长、活动库存、提货记录分散在表格和聊天里。</span></div>
              <div class="proof-row"><strong>交付范围</strong><span>团长权限、活动配置、库存同步、订单查询、提货核销与统计。</span></div>
              <div class="proof-result">可继续补充：实际页面截图、项目周期与上线后的运营反馈</div>
            </article>
            <article class="proof-card">
              <div class="proof-meta"><span class="proof-label">示例案例 02</span><span class="proof-status">案例方向</span></div>
              <h3>服务预约：把排班、提醒和客户档案放在一起</h3>
              <div class="proof-row"><strong>常见问题</strong><span>预约靠人工确认，客户历史记录和员工排班难同步。</span></div>
              <div class="proof-row"><strong>交付范围</strong><span>服务项目、时段库存、员工排班、预约状态、到店提醒与 CRM 档案。</span></div>
              <div class="proof-result">可继续补充：预约流程图、后台操作视频与客户授权信息</div>
            </article>
            <article class="proof-card">
              <div class="proof-meta"><span class="proof-label">示例案例 03</span><span class="proof-status">案例方向</span></div>
              <h3>进销存后台：让采购、库存和审批有记录</h3>
              <div class="proof-row"><strong>常见问题</strong><span>采购、入库、出库和盘点数据不同步，异常很难追查。</span></div>
              <div class="proof-row"><strong>交付范围</strong><span>采购单、库存变动、盘点、角色权限、审批流与经营报表。</span></div>
              <div class="proof-result">可继续补充：数据结构、权限表和上线维护方式</div>
            </article>
          </div>
        </div>
      </section>

      <section class="section boundary-section">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">合作边界提前说清，报价和周期才不会失控</h2>
            <p class="section-subtitle">定制开发不适合用一个“起步价”覆盖所有项目。先把包含项、变量项和后续费用讲明白，再根据范围评估。</p>
          </div>
          <div class="boundary-grid">
            <article class="boundary-card"><div class="boundary-index">01</div><h3>首轮评估包含什么</h3><p>业务目标、用户角色、核心流程、页面清单、后台模块、第三方接口与首期边界。</p><div class="boundary-note">输出：可沟通的功能清单</div></article>
            <article class="boundary-card"><div class="boundary-index">02</div><h3>费用和周期受什么影响</h3><p>端数量、功能模块、UI 深度、支付/地图/短信等接口、数据迁移、发布审核和验收要求。</p><div class="boundary-note">原则：先按范围评估，再确认排期</div></article>
            <article class="boundary-card"><div class="boundary-index">03</div><h3>上线后怎么继续维护</h3><p>可按问题修复、服务器与证书协助、版本迭代、报表优化和新模块开发继续合作。</p><div class="boundary-note">交接：账号、部署说明、验收清单与待办建议</div></article>
          </div>
        </div>
      </section>

      <section class="section security-section">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">业务系统的可信度，也来自上线后的可维护</h2>
            <p class="section-subtitle">针对 CRM / ERP 和涉及支付的项目，提前确认权限、日志、备份、回调和部署归属，减少上线后的不确定性。</p>
          </div>
          <div class="security-grid">
            <article class="security-card"><div class="security-icon">权</div><h3>角色与数据权限</h3><p>按管理员、员工、门店或部门拆分功能菜单和数据范围，关键操作留痕。</p></article>
            <article class="security-card"><div class="security-icon">备</div><h3>备份与环境交接</h3><p>说明服务器、域名、证书、数据库、存储和备份责任，方便后续接手。</p></article>
            <article class="security-card"><div class="security-icon">付</div><h3>支付与异常状态</h3><p>围绕支付回调、退款、取消、库存扣减和失败重试确认完整状态闭环。</p></article>
            <article class="security-card"><div class="security-icon">维</div><h3>问题响应与迭代</h3><p>上线后区分问题修复和新需求，记录版本、影响范围与下一步处理方式。</p></article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <div class="story-band">
            <article class="story-card">
              <div class="eyebrow">产品设计重点</div>
              <h3>不只做页面，更把业务闭环做顺。</h3>
              <p>官网展示的重点从“我会开发”升级为“我能帮你把业务跑起来”：移动端负责客户触达和服务体验，CRM 负责客户沉淀，ERP 负责内部流转，后台系统负责配置、审批、统计与后续运营。</p>
              <div class="chip-row"><span class="chip">交易闭环</span><span class="chip">客户可跟进</span><span class="chip">业务可管理</span><span class="chip">后续可迭代</span></div>
            </article>
            <div class="scenario-list">
              <div class="scenario-item"><div class="scene-tag">电商</div><div><strong>商品售卖与会员复购</strong><span>商品、活动、订单、会员、售后形成完整交易链路。</span></div><div class="scene-score">B2C</div></div>
              <div class="scenario-item"><div class="scene-tag">移动端</div><div><strong>APP 会员服务与移动办公</strong><span>登录、消息、业务表单、订单状态和服务记录随时可用。</span></div><div class="scene-score">APP</div></div>
              <div class="scenario-item"><div class="scene-tag">客户</div><div><strong>CRM 线索跟进与私域运营</strong><span>客户档案、跟进记录、标签分群和转化报表统一沉淀。</span></div><div class="scene-score">CRM</div></div>
              <div class="scenario-item"><div class="scene-tag">管理</div><div><strong>ERP 进销存与审批协同</strong><span>采购、库存、订单、财务、权限和流程节点清晰可追踪。</span></div><div class="scene-score">ERP</div></div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">个人开发者的优势，是沟通短、责任清、推进快</h2>
            <p class="section-subtitle">从需求确认、页面结构、接口设计到上线维护，由同一个人持续跟进，减少反复转述造成的理解偏差，尤其适合业务系统从 0 到 1 落地。</p>
          </div>
          <div class="cap-grid">
            <article class="cap-card"><div class="icon">需</div><h3>需求梳理</h3><p>把口头想法拆成页面、角色、流程、字段和验收边界，先把开发范围说清楚。</p></article>
            <article class="cap-card"><div class="icon">界</div><h3>界面设计</h3><p>统一色彩、字号、卡片、按钮和间距规范，让移动端、管理后台与业务系统观感一致。</p></article>
            <article class="cap-card"><div class="icon">端</div><h3>多端应用开发</h3><p>搭建小程序、APP、H5、管理端等核心交互，覆盖登录、支付、表单、消息和页面状态。</p></article>
            <article class="cap-card"><div class="icon">台</div><h3>后台管理</h3><p>提供商品、订单、活动、客户、库存、审批、用户、权限和数据统计等可运营管理能力。</p></article>
            <article class="cap-card"><div class="icon">接</div><h3>接口服务</h3><p>完成数据库设计、业务接口、登录授权、支付回调、消息通知、文件上传和第三方系统对接。</p></article>
            <article class="cap-card"><div class="icon">维</div><h3>上线维护</h3><p>协助小程序审核、APP 发布、服务器部署、问题排查、版本迭代和后续功能扩展。</p></article>
          </div>
        </div>
      </section>

      <section class="showcase">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">前台体验和后台管理一起设计，交付后才能真正使用</h2>
            <p class="section-subtitle">页面展示不只放漂亮截图，也突出系统能力：订单、商品、营销、客户、库存、审批、权限和统计都能被后台配置。</p>
          </div>
          <div class="showcase-grid">
            <div class="large-dashboard">
              <div class="dash-nav">
                <strong>业务管理中心</strong>
                <div class="dash-tabs">
                  <button
                    v-for="tab in homeShowcaseTabs"
                    :key="tab.key"
                    type="button"
                    class="dash-tab"
                    :class="{ active: activeHomeShowcaseTab === tab.key }"
                    @click="activeHomeShowcaseTab = tab.key"
                  >
                    {{ tab.label }}
                  </button>
                </div>
              </div>
              <div class="dash-content">
                <div v-for="block in activeHomeShowcase.blocks" :key="block.title" class="dash-block"><strong>{{ block.title }}</strong><p>{{ block.description }}</p></div>
                <div class="wide-chart"><strong>{{ activeHomeShowcase.chartTitle }}</strong><div class="chart-bars"><span v-for="bar in activeHomeShowcase.bars" :key="bar" :style="{ height: `${bar}px` }"></span></div></div>
              </div>
            </div>
            <div class="module-list">
              <article v-for="card in activeHomeShowcase.cards" :key="card.title" class="module-card">
                <h3>{{ card.title }}</h3>
                <p>{{ card.description }}</p>
                <div class="chip-row"><span v-for="chip in card.chips" :key="chip" class="chip">{{ chip }}</span></div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">交付流程透明，每一步都有可确认成果</h2>
            <p class="section-subtitle">适合个人开发合作的节奏：先确认需求边界，再按原型、设计、开发、测试、上线分阶段推进。</p>
          </div>
          <div class="process-grid">
            <article class="process-card"><div class="step-number">01 沟通评估</div><h3>确认业务目标</h3><p>梳理用户角色、核心流程、页面清单、后台字段和第三方能力，明确开发范围。</p></article>
            <article class="process-card"><div class="step-number">02 原型设计</div><h3>先看结构再开发</h3><p>输出关键页面结构、导航路径、表单字段和订单状态，避免边做边改失控。</p></article>
            <article class="process-card"><div class="step-number">03 开发联调</div><h3>前后端同步推进</h3><p>完成小程序、APP、后台、接口、数据库、支付和消息通知，按模块验收。</p></article>
            <article class="process-card"><div class="step-number">04 发布维护</div><h3>上线后继续跟进</h3><p>协助小程序审核、APP 发布、服务器部署、问题修复，并根据运营反馈规划后续迭代。</p></article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">合作前常见问题，官网直接给出清晰答案</h2>
            <p class="section-subtitle">减少客户咨询门槛，让访问者快速判断自己是否适合沟通需求。</p>
          </div>
          <div class="faq-grid">
            <article class="faq-card"><h3>可以只做 APP、CRM 或 ERP 中的一种吗？</h3><p>可以。商城、团购、点餐、预约、APP、CRM、ERP 都可以单独开发，也可以根据业务组合成复合型系统。</p></article>
            <article class="faq-card"><h3>是否包含管理后台？</h3><p>建议包含。后台决定后续能否自主运营商品、订单、活动、客户、库存、审批和数据，不建议只做前台页面。</p></article>
            <article class="faq-card"><h3>已有业务流程但没有设计稿怎么办？</h3><p>可以先做需求梳理和页面原型，把角色、流程、字段、权限和功能边界确认后再进入视觉设计与开发。</p></article>
            <article class="faq-card"><h3>上线后还能继续改功能吗？</h3><p>可以。系统会按模块设计，后续可继续迭代营销活动、客户跟进、库存管理、数据统计和会员体系等能力。</p></article>
          </div>
        </div>
      </section>

      <section class="contact-section" id="contact">
        <div class="wrap">
          <div class="contact-panel">
            <div>
            <h2>免费做一次需求评估，先拿到适合你的功能清单。</h2>
              <p>把业务类型、主要功能、参考案例、是否需要后台和期望上线时间发来。我会先帮你判断首期范围，再讨论周期、费用与后续维护。</p>
              <div class="chip-row"><span class="chip">首期范围</span><span class="chip">功能清单</span><span class="chip">周期评估</span><span class="chip">维护方式</span></div>
            </div>
            <div class="contact-box">
              <div class="contact-line"><span>微信号</span><strong>Yizhixiaofeiyang7988</strong></div>
              <div class="contact-line"><span>手机号</span><a href="tel:15566047217">15566047217</a></div>
              <a class="btn dark" href="tel:15566047217">立即预约需求评估</a>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="wrap">小肥羊开发工作室 · 小程序 / APP / CRM / ERP 商业系统定制开发 · 辽ICP备2026015396号</div>
      </footer>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import SiteNav from '../components/SiteNav.vue'

const activeHomeShowcaseTab = ref('order')

const homeShowcaseTabs = [
  {
    key: 'order',
    label: '订单',
    chartTitle: '近 7 日订单趋势',
    bars: [52, 76, 96, 68, 112, 88, 104],
    blocks: [
      { title: '订单流转', description: '待支付、待处理、待发货、待核销、已完成、售后等状态清晰分层。' },
      { title: '支付与退款', description: '微信支付、退款申请、支付回调、财务流水和异常订单统一记录。' },
      { title: '核销发货', description: '支持到店核销、门店自提、物流发货、订单打印和售后处理。' },
      { title: '订单看板', description: '按时间、状态、商品、客户和门店筛选，快速掌握业务进度。' }
    ],
    cards: [
      { title: '小程序 / APP 前台', description: '首页装修、商品列表、服务预约、客户中心、订单提交、移动表单和消息提醒。', chips: ['体验清晰', '状态完整'] },
      { title: 'CRM / ERP 后台', description: '把客户、商品、订单、库存、审批、排班和基础资料放进后台，让业务人员自己维护。', chips: ['可运营', '可管理', '可扩展'] },
      { title: '接口与部署', description: '服务端接口、数据库、微信支付、登录授权、APP 发布、部署上线和运行维护统一处理。', chips: ['稳定交付', '长期维护'] }
    ]
  },
  {
    key: 'customer',
    label: '客户',
    chartTitle: '近 7 日客户增长',
    bars: [44, 62, 82, 78, 96, 118, 102],
    blocks: [
      { title: '客户档案', description: '沉淀客户来源、联系方式、标签、权益、成交记录和售后服务信息。' },
      { title: '线索跟进', description: '销售线索分配、跟进记录、提醒任务和转化阶段集中维护。' },
      { title: '会员运营', description: '会员等级、积分、优惠券、复购提醒和私域触达按客户分层配置。' },
      { title: '转化统计', description: '客户增长、来源转化、复购情况和销售绩效可视化汇总。' }
    ],
    cards: [
      { title: '客户侧更顺', description: '客户可以清楚完成注册、咨询、下单、预约、查询、售后和消息接收。', chips: ['注册', '咨询', '消息'] },
      { title: '销售侧更省', description: '客户线索、跟进阶段、标签分群和成交记录统一保存，减少重复沟通。', chips: ['线索', '跟进', '转化'] },
      { title: '运营侧更准', description: '按客户来源、标签、等级和消费记录做精细化运营，提高复购机会。', chips: ['标签', '分群', '复购'] }
    ]
  },
  {
    key: 'inventory',
    label: '库存',
    chartTitle: '近 7 日库存周转',
    bars: [68, 54, 90, 74, 116, 86, 98],
    blocks: [
      { title: '商品库存', description: '商品分类、规格、价格、上下架、门店库存和服务项目统一维护。' },
      { title: '采购入库', description: '采购单、入库记录、批次管理、供应商信息和成本数据可追踪。' },
      { title: '调拨盘点', description: '门店调拨、库存盘点、报损记录和库存变动原因清楚留痕。' },
      { title: '库存预警', description: '低库存、超卖风险、预售占用和异常库存及时提醒。' }
    ],
    cards: [
      { title: '商品管理后台', description: '商品、服务、套餐、规格、价格和库存统一配置，前台实时同步。', chips: ['商品', '规格', '价格'] },
      { title: 'ERP 库存协同', description: '采购、入库、出库、调拨、盘点和预警形成完整进销存链路。', chips: ['采购', '盘点', '预警'] },
      { title: '数据辅助补货', description: '结合销量和库存周转判断补货节奏，减少缺货、压货和人工统计。', chips: ['销量', '周转', '补货'] }
    ]
  },
  {
    key: 'stats',
    label: '统计',
    chartTitle: '近 7 日经营数据',
    bars: [58, 86, 72, 102, 128, 94, 116],
    blocks: [
      { title: '经营看板', description: '订单趋势、销售额、客户增长、商品销量和库存周转集中展示。' },
      { title: '报表筛选', description: '按时间、门店、员工、商品、客户来源和订单状态筛选分析。' },
      { title: '导入导出', description: '支持客户、商品、订单、库存和财务数据导入导出。' },
      { title: '异常提醒', description: '退款异常、库存异常、审批积压和订单卡点可及时发现。' }
    ],
    cards: [
      { title: '老板看得懂', description: '关键经营指标、趋势变化和异常情况清楚呈现，辅助快速判断。', chips: ['指标', '趋势', '异常'] },
      { title: '团队用得上', description: '销售、运营、仓储和财务都能按自己的角色查看相关数据。', chips: ['角色', '筛选', '协同'] },
      { title: '后续可迭代', description: '报表口径和数据结构提前规划，后续扩展营销、财务和绩效更顺。', chips: ['报表', '口径', '扩展'] }
    ]
  }
]

const activeHomeShowcase = computed(() => homeShowcaseTabs.find((tab) => tab.key === activeHomeShowcaseTab.value) || homeShowcaseTabs[0])
</script>
