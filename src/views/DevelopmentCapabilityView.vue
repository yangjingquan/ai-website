<template>
  <main class="site development-capability-page" id="site" tabindex="-1">

      <div class="wrap">
        <SiteNav />

        <section class="hero">
          <div class="hero-copy">
            <div class="eyebrow">多端交付 · 技术选型 · 接口对接 · 部署维护</div>
            <h1>从前端到部署，交付一套可运行、可维护的系统。</h1>
            <p class="lead">根据业务场景选择合适的技术方案，覆盖小程序、APP、Web 后台、服务端、数据库、接口对接和上线维护。</p>
            <div class="hero-actions">
              <a class="btn primary" href="#tech-stack">查看开发能力</a>
              <a class="btn secondary" href="#contact">发起技术评估</a>
            </div>
            <div class="trust-row">
              <div class="trust-item"><strong>多语言</strong><span>按项目选型</span></div>
              <div class="trust-item"><strong>多端</strong><span>用户、员工、管理端</span></div>
              <div class="trust-item"><strong>全栈</strong><span>从前端到部署</span></div>
            </div>
          </div>

          <div class="hero-visual">
            <div class="stack-window">
              <div class="window-top"><div class="window-title">全栈技术能力中心</div><div class="status-pill">可按需组合</div></div>
              <div class="stack-tabs">
                <button
                  v-for="tab in stackTabs"
                  :key="tab.key"
                    type="button"
                    class="stack-tab"
                    :class="{ active: activeStackTab === tab.key }"
                    :aria-pressed="activeStackTab === tab.key"
                    @click="activeStackTab = tab.key"
                >
                  {{ tab.label }}
                </button>
              </div>
              <div class="architecture">
                <div v-for="row in activeStack.rows" :key="row.title" class="arch-row">
                  <div class="arch-tag">{{ row.tag }}</div>
                  <div><strong>{{ row.title }}</strong><span>{{ row.description }}</span></div>
                  <div class="arch-state">{{ row.state }}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section class="section" id="tech-stack">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">后端技术栈，按项目选择合适的实现方式</h2>
            <p class="section-subtitle">围绕接口、权限、订单、报表和第三方对接，选择更容易上线和维护的方案。</p>
          </div>
          <div class="language-grid">
            <article class="language-card">
              <div class="icon">J</div>
              <h3>Java / Spring Boot</h3>
              <p>适合 CRM、ERP、审批、财务库存和权限复杂的企业系统，结构稳定，便于团队接手。</p>
              <div class="feature-list"><span>RBAC 权限体系</span><span>复杂业务流程</span><span>企业级接口服务</span></div>
            </article>
            <article class="language-card">
              <div class="icon">N</div>
              <h3>Node.js / NestJS</h3>
              <p>适合前后端协同快速迭代，常用于管理后台、活动系统和轻量业务中台。</p>
              <div class="feature-list"><span>REST / GraphQL 接口</span><span>实时消息与任务</span><span>TypeScript 工程化</span></div>
            </article>
            <article class="language-card">
              <div class="icon">Py</div>
              <h3>Python / Django / FastAPI</h3>
              <p>适合数据处理、内部工具、自动化和 AI 接口集成，验证速度快。</p>
              <div class="feature-list"><span>数据清洗与分析</span><span>AI 能力接入</span><span>后台管理工具</span></div>
            </article>
            <article class="language-card">
              <div class="icon">P</div>
              <h3>PHP / Laravel / ThinkPHP</h3>
              <p>适合商城、官网、内容管理和存量 PHP 系统改造，适合预算有限、需要快速上线的项目。</p>
              <div class="feature-list"><span>商城内容系统</span><span>旧系统二次开发</span><span>轻量后台接口</span></div>
            </article>
            <article class="language-card">
              <div class="icon">Go</div>
              <h3>Go / Gin</h3>
              <p>适合高并发接口、任务调度、网关和对性能要求较高的业务模块。</p>
              <div class="feature-list"><span>高并发接口</span><span>异步任务服务</span><span>网关与中间层</span></div>
            </article>
            <article class="language-card">
              <div class="icon">C#</div>
              <h3>.NET / C#</h3>
              <p>适合企业内部系统、桌面工具和已有 .NET 团队的项目，便于延续原有资产。</p>
              <div class="feature-list"><span>企业内部系统</span><span>桌面与服务端</span><span>存量系统维护</span></div>
            </article>
          </div>
        </div>
      </section>

      <section class="section" id="tech-selection">
        <div class="wrap">
          <div class="choice-band">
            <article class="choice-card">
              <div class="eyebrow">技术选型原则</div>
              <h3>技术选型不追求最多，而是追求适合项目。</h3>
              <p>根据业务复杂度、上线周期、预算和后续维护方式，决定语言、框架和数据库。</p>
              <div class="chip-row"><span class="chip">周期可控</span><span class="chip">成本可控</span><span class="chip">后续可维护</span><span class="chip">扩展可预留</span></div>
            </article>
            <div class="choice-list">
              <div class="choice-item"><div class="choice-tag">快速上线</div><div><strong>小程序 + 管理后台 + Node/PHP</strong><span>适合团购、预约、点餐、活动报名等轻量商业闭环。</span></div><div class="choice-score">快</div></div>
              <div class="choice-item"><div class="choice-tag">企业管理</div><div><strong>Web 后台 + Java/.NET + 关系型数据库</strong><span>适合 CRM、ERP、审批、库存、财务和多角色权限系统。</span></div><div class="choice-score">稳</div></div>
              <div class="choice-item"><div class="choice-tag">多端统一</div><div><strong>UniApp / Taro + 服务端 API</strong><span>同一业务逻辑覆盖小程序、H5、Android、iOS 和后台。</span></div><div class="choice-score">省</div></div>
              <div class="choice-item"><div class="choice-tag">数据增长</div><div><strong>PostgreSQL / Redis / 搜索与报表组件</strong><span>为订单、客户、库存、日志、分析和运营报表预留扩展。</span></div><div class="choice-score">扩</div></div>
            </div>
          </div>
        </div>
      </section>

      <section class="showcase" id="fullstack">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">前端、服务、数据与部署，协同完成一次交付</h2>
            <p class="section-subtitle">每一层都对应真实交付：用户体验、后台效率、接口稳定和上线维护。</p>
          </div>
          <div class="showcase-grid">
            <div class="tech-dashboard">
              <div class="dash-nav">
                <strong>全栈架构分层</strong>
                <div class="dash-tabs">
                  <button
                    v-for="tab in architectureTabs"
                    :key="tab.key"
                    type="button"
                    class="dash-tab"
                    :class="{ active: activeArchitectureTab === tab.key }"
                    :aria-pressed="activeArchitectureTab === tab.key"
                    @click="activeArchitectureTab = tab.key"
                  >
                    {{ tab.label }}
                  </button>
                </div>
              </div>
              <div class="layer-list">
                <div v-for="row in activeArchitecture.rows" :key="row.title" class="layer-row">
                  <div class="layer-tag">{{ row.tag }}</div>
                  <div><strong>{{ row.title }}</strong><span>{{ row.description }}</span></div>
                  <div class="layer-state">{{ row.state }}</div>
                </div>
              </div>
            </div>
            <div class="module-list">
              <article v-for="card in activeArchitecture.cards" :key="card.title" class="module-card">
                <h3>{{ card.title }}</h3>
                <p>{{ card.description }}</p>
                <div class="chip-row"><span v-for="chip in card.chips" :key="chip" class="chip">{{ chip }}</span></div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="platforms">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">多平台交付能力，覆盖用户端、员工端和管理端</h2>
            <p class="section-subtitle">用户端承接业务，员工端负责操作，管理端配置规则并查看数据。</p>
          </div>
          <div class="platform-grid">
            <article class="platform-card"><div class="icon">微</div><h3>微信小程序</h3><p>适合微信登录、支付、商城、预约、点餐、会员和核销等业务场景。</p><div class="feature-list"><span>微信登录支付</span><span>消息订阅</span><span>门店与核销</span></div></article>
            <article class="platform-card"><div class="icon">APP</div><h3>iOS / Android APP</h3><p>适合高频使用、会员服务、员工协同、设备能力调用和品牌独立入口。</p><div class="feature-list"><span>推送与扫码</span><span>文件与定位</span><span>应用发布支持</span></div></article>
            <article class="platform-card"><div class="icon">H5</div><h3>Web / H5</h3><p>适合活动页、移动官网、客户查询、外部分享和无需安装的轻量业务入口。</p><div class="feature-list"><span>响应式页面</span><span>分享传播</span><span>轻量表单流程</span></div></article>
            <article class="platform-card"><div class="icon">管</div><h3>管理后台 / CRM / ERP</h3><p>适合商品、订单、客户、库存、员工、审批、财务和报表等高频运营操作。</p><div class="feature-list"><span>权限角色</span><span>数据看板</span><span>导入导出</span></div></article>
          </div>
        </div>
      </section>

      <section class="section" id="data-capability">
        <div class="wrap">
          <div class="data-board">
            <article class="quality-card">
              <div class="eyebrow">多数据库能力</div>
              <h3>数据结构先设计清楚，系统才好扩展。</h3>
              <p>订单、客户、库存、日志和报表需要不同的数据结构；先把核心模型设计好，再决定数据库、缓存和搜索方案。</p>
              <div class="chip-row"><span class="chip">字段建模</span><span class="chip">索引优化</span><span class="chip">缓存设计</span><span class="chip">备份恢复</span></div>
            </article>
            <div class="data-grid compact">
              <article class="data-card"><div class="icon">DB</div><h3>业务数据库</h3><p>MySQL、MariaDB 或 PostgreSQL，承载订单、商品、客户和库存等核心数据。</p></article>
              <article class="data-card"><div class="icon">Re</div><h3>缓存与任务</h3><p>Redis 用于登录态、验证码、缓存、限流和高频读取场景。</p></article>
              <article class="data-card"><div class="icon">Mo</div><h3>文档与日志</h3><p>MongoDB 适合灵活表单、日志、配置和字段变化频繁的模块。</p></article>
              <article class="data-card"><div class="icon">Es</div><h3>搜索与分析</h3><p>Elasticsearch 等组件用于商品搜索、客户检索、日志查询和复杂筛选。</p></article>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="integration">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">从接口对接到上线维护，覆盖完整交付链路</h2>
            <p class="section-subtitle">支付、短信、物流、旧系统对接，以及安全、部署和维护，都纳入交付范围。</p>
          </div>
          <div class="integration-grid">
            <article class="integration-card"><div class="icon">接</div><h3>接口与系统对接</h3><p>对接支付、短信、地图、物流、公众号、企业微信、ERP、CRM 或已有内部系统。</p><div class="feature-list"><span>API 规范</span><span>回调处理</span><span>异常重试</span></div></article>
            <article class="integration-card"><div class="icon">权</div><h3>权限与数据安全</h3><p>按管理员、员工、门店、客户、财务等角色配置数据权限和操作权限。</p><div class="feature-list"><span>角色权限</span><span>操作日志</span><span>敏感数据保护</span></div></article>
            <article class="integration-card"><div class="icon">付</div><h3>支付订单闭环</h3><p>处理支付、退款、核销、发货、售后、对账、消息通知和订单状态同步。</p><div class="feature-list"><span>微信支付</span><span>退款售后</span><span>财务流水</span></div></article>
            <article class="integration-card"><div class="icon">报</div><h3>报表与运营分析</h3><p>围绕订单、客户、商品、库存、转化、营收和员工绩效设计可读报表。</p><div class="feature-list"><span>数据看板</span><span>导入导出</span><span>统计口径</span></div></article>
            <article class="integration-card"><div class="icon">部</div><h3>部署与环境配置</h3><p>完成服务器、域名、证书、Nginx、Docker、数据库、文件存储和发布流程。</p><div class="feature-list"><span>测试生产环境</span><span>备份策略</span><span>日志排查</span></div></article>
            <article class="integration-card"><div class="icon">维</div><h3>长期维护迭代</h3><p>上线后根据真实运营反馈继续优化功能、性能、页面体验和后台操作效率。</p><div class="feature-list"><span>问题修复</span><span>版本升级</span><span>功能扩展</span></div></article>
          </div>
        </div>
      </section>

      <section class="section" id="delivery-process">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">开发交付流程：先评估，再设计，分阶段上线</h2>
            <p class="section-subtitle">先明确平台、范围和验收标准，再按业务优先级推进开发。</p>
          </div>
          <div class="process-grid">
            <article class="process-card"><div class="step-number">01 技术评估</div><h3>确认平台与技术栈</h3><p>根据业务目标、预算周期、访问量、数据规模和维护习惯选择语言、框架和数据库。</p></article>
            <article class="process-card"><div class="step-number">02 架构设计</div><h3>拆分端、接口与数据</h3><p>规划小程序、APP、后台、接口、数据库、第三方能力和部署环境之间的关系。</p></article>
            <article class="process-card"><div class="step-number">03 模块开发</div><h3>按业务流程分批交付</h3><p>先跑通一条完整流程，再补齐后台管理、权限、报表、消息、支付和数据导入导出。</p></article>
            <article class="process-card"><div class="step-number">04 上线维护</div><h3>部署发布与持续迭代</h3><p>完成服务器部署、账号配置、上线发布、问题修复、备份策略和后续版本计划。</p></article>
          </div>
          <div class="process-result"><strong>技术评估输出：</strong>平台建议、技术路线、首期范围、对接条件和验收标准。</div>
        </div>
      </section>

      <section class="section" id="faq">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">开发能力常见问题</h2>
            <p class="section-subtitle">先回答选型、复用、对接和维护中的常见问题。</p>
          </div>
          <div class="faq-grid">
            <details class="faq-card"><summary><h3>已经有旧系统，能继续开发或重构吗？</h3></summary><p>可以先评估现有代码、数据库、服务器和业务流程，能维护则继续迭代，不适合维护时再拆分重构范围。</p></details>
            <details class="faq-card"><summary><h3>小程序、APP 和后台能共用一套接口吗？</h3></summary><p>可以。常见做法是前端多端适配，后端统一接口、权限和数据模型，减少重复开发与后续维护成本。</p></details>
            <details class="faq-card"><summary><h3>数据库应该选 MySQL 还是 PostgreSQL？</h3></summary><p>要看查询复杂度、团队习惯、部署环境和数据类型。一般商业系统 MySQL 足够，复杂报表和地理数据可考虑 PostgreSQL。</p></details>
            <details class="faq-card"><summary><h3>后续换团队维护会不会很难？</h3></summary><p>会尽量采用成熟框架、清晰目录、常见数据库和可读的接口结构，交接时说明账号、环境、部署和核心业务规则。</p></details>
          </div>
        </div>
      </section>

      <section class="contact-section" id="contact">
        <div class="wrap">
          <div class="contact-panel">
            <div>
              <h2>有多端、多语言、多数据库或全栈开发需求，可以直接联系我评估。</h2>
              <p>提供业务目标、现有系统、上线平台和数据规模即可开始评估，我会帮你确定平台、技术路线和首期范围。</p>
              <div class="chip-row"><span class="chip">平台建议</span><span class="chip">技术路线</span><span class="chip">首期范围</span><span class="chip">对接条件</span></div>
            </div>
            <div class="contact-box">
              <WechatQr compact />
              <div class="contact-line"><span>手机号</span><a href="tel:18201117988">18201117988</a></div>
              <a class="btn dark" href="tel:18201117988">立即预约技术评估</a>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="wrap">纳启字节信息技术工作室 · 小程序 / APP / CRM / ERP / 多语言多平台全栈开发 · <a class="filing-link" href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">辽ICP备2026015396号</a><RouterLink class="footer-link" to="/privacy">隐私与服务说明</RouterLink></div>
      </footer>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import SiteNav from '../components/SiteNav.vue'
import WechatQr from '../components/WechatQr.vue'

const activeStackTab = ref('language')
const activeArchitectureTab = ref('frontend')

const stackTabs = [
  {
    key: 'language',
    label: '语言',
    rows: [
      { tag: '前端', title: 'Vue / React / UniApp / Taro', description: '小程序、H5、APP、管理后台统一体验。', state: 'UI' },
      { tag: '后端', title: 'Java / Node.js / Python / PHP / Go', description: '接口、权限、订单、支付、审批、消息任务。', state: 'API' },
      { tag: '数据', title: 'MySQL / PostgreSQL / Redis / MongoDB', description: '结构化业务、缓存、搜索、日志与报表分析。', state: 'DB' },
      { tag: '上线', title: 'Nginx / Docker / 云服务器 / CI', description: '环境配置、域名证书、备份监控和版本迭代。', state: 'OPS' }
    ]
  },
  {
    key: 'platform',
    label: '平台',
    rows: [
      { tag: '小程序', title: '微信小程序 / 会员交易入口', description: '承接商城、团购、预约、点餐、会员中心、核销和微信支付。', state: 'Mini' },
      { tag: 'APP', title: 'iOS / Android 独立应用', description: '适合高频会员服务、移动办公、推送通知、扫码定位和设备能力调用。', state: 'App' },
      { tag: 'H5', title: 'Web / H5 / 移动官网', description: '适合活动页、表单收集、外部分享、客户查询和轻量业务入口。', state: 'Web' },
      { tag: '后台', title: '管理后台 / CRM / ERP', description: '支持商品、订单、客户、库存、审批、权限、财务和数据报表管理。', state: 'Admin' }
    ]
  },
  {
    key: 'database',
    label: '数据库',
    rows: [
      { tag: '关系型', title: 'MySQL / PostgreSQL', description: '承载订单、客户、商品、库存、财务、审批等核心结构化数据。', state: 'SQL' },
      { tag: '缓存', title: 'Redis / 登录态 / 高频读取', description: '处理验证码、会话、缓存、限流、排行榜和热点数据加速。', state: 'Cache' },
      { tag: '文档', title: 'MongoDB / JSON 配置 / 灵活表单', description: '适合字段变化频繁的表单、日志、配置、内容和扩展资料。', state: 'Doc' },
      { tag: '搜索', title: 'Elasticsearch / 报表查询', description: '支持商品搜索、客户检索、日志追踪、复杂筛选和统计分析。', state: 'Search' }
    ]
  },
  {
    key: 'deploy',
    label: '部署',
    rows: [
      { tag: '网关', title: 'Nginx / 域名 / HTTPS 证书', description: '配置访问入口、静态资源缓存、反向代理、证书和多域名路由。', state: 'Nginx' },
      { tag: '容器', title: 'Docker / Compose / 环境隔离', description: '将前端、后端、数据库、缓存等服务拆分部署，便于迁移和回滚。', state: 'Docker' },
      { tag: '发布', title: 'CI / 构建 / 版本回滚', description: '规范测试环境、生产发布、构建产物、版本记录和异常回退流程。', state: 'CI' },
      { tag: '维护', title: '日志 / 备份 / 监控 / 排查', description: '上线后持续关注运行状态、数据库备份、错误日志和性能瓶颈。', state: 'Ops' }
    ]
  }
]

const architectureTabs = [
  {
    key: 'frontend',
    label: '前端',
    rows: [
      { tag: 'Client', title: '小程序、H5、APP、Web 后台统一交互', description: '首页、列表、详情、表单、支付、消息、角色入口和移动端适配。', state: '体验' },
      { tag: 'UI', title: '组件化页面与设计规范', description: '统一按钮、卡片、表格、弹窗、空状态和加载状态，减少页面割裂。', state: '一致' },
      { tag: 'State', title: '角色入口与页面状态管理', description: '根据客户、员工、管理员等角色展示不同入口、权限和业务状态。', state: '清楚' },
      { tag: 'Mobile', title: '多端适配与高频操作体验', description: '兼顾手机触达、后台效率、表单输入、扫码、定位和消息提醒。', state: '顺畅' }
    ],
    cards: [
      { title: '前端体验开发', description: '用组件化方式搭建首页、商品、订单、客户、审批、报表等页面，兼顾移动端触达和后台高频操作效率。', chips: ['Vue', 'React', 'UniApp', 'Taro'] },
      { title: '交互状态完整', description: '处理加载、空数据、提交失败、权限不足、支付结果和消息提醒等真实使用状态。', chips: ['状态', '反馈', '适配'] },
      { title: '多端统一体验', description: '小程序、H5、APP 和后台共享一致的业务口径，减少重复开发和维护成本。', chips: ['小程序', 'H5', '后台'] }
    ]
  },
  {
    key: 'api',
    label: '接口',
    rows: [
      { tag: 'Server', title: '业务接口、权限认证、订单流转、定时任务', description: '统一接口规范、状态机、支付回调、消息通知、文件上传和日志记录。', state: '稳定' },
      { tag: 'Auth', title: '登录授权与角色权限', description: '支持客户、员工、门店、管理员、财务等角色认证和数据范围控制。', state: '安全' },
      { tag: 'Flow', title: '订单、审批、核销、售后流程', description: '围绕业务状态推进，处理支付、退款、发货、审批和异常分支。', state: '闭环' },
      { tag: 'Task', title: '消息任务与第三方接口', description: '对接支付、短信、物流、地图、企业微信、公众号和已有内部系统。', state: '联通' }
    ],
    cards: [
      { title: '后端业务开发', description: '围绕真实业务规则开发接口与流程，处理登录认证、角色权限、订单状态、支付回调、消息任务和第三方对接。', chips: ['API', '权限', '订单', '任务'] },
      { title: '接口稳定可维护', description: '接口命名、参数校验、错误返回、日志记录和异常重试保持清晰，方便后续维护。', chips: ['规范', '日志', '重试'] },
      { title: '业务流程可扩展', description: '订单、审批、库存和客户流程按状态拆分，后续增加节点不会推翻重做。', chips: ['状态机', '审批', '扩展'] }
    ]
  },
  {
    key: 'data',
    label: '数据',
    rows: [
      { tag: 'Data', title: '客户、商品、订单、库存、财务、报表数据模型', description: '字段设计、索引优化、缓存策略、导入导出、备份恢复和数据统计。', state: '清晰' },
      { tag: 'Model', title: '数据库结构与业务字段', description: '围绕角色、流程、状态、金额、时间和操作记录设计可追踪的数据结构。', state: '可查' },
      { tag: 'Cache', title: '缓存、搜索、统计与导出', description: '用缓存提升高频读取，用搜索和报表支持复杂查询和运营分析。', state: '高效' },
      { tag: 'Backup', title: '备份恢复与数据安全', description: '上线后保留备份策略、日志记录、权限边界和敏感数据保护。', state: '可靠' }
    ],
    cards: [
      { title: '数据建模与统计', description: '设计数据库结构、缓存策略、报表口径和备份方案，让客户、订单、库存、财务数据可追踪。', chips: ['建模', '缓存', '报表'] },
      { title: '数据流转更准确', description: '前台提交、后台处理、服务端规则和报表统计使用同一套数据结构，减少重复录入。', chips: ['字段', '状态', '口径'] },
      { title: '经营数据可分析', description: '围绕订单趋势、客户增长、库存周转、销售绩效和异常情况做可读看板。', chips: ['趋势', '筛选', '导出'] }
    ]
  },
  {
    key: 'deploy',
    label: '部署',
    rows: [
      { tag: 'Ops', title: '服务器、域名证书、Docker、Nginx、发布与监控', description: '测试环境、生产环境、上线发布、异常排查、版本回滚和长期维护。', state: '可管' },
      { tag: 'Nginx', title: '网关、静态资源与反向代理', description: '配置域名、HTTPS、缓存、上传目录、API 代理和多端访问入口。', state: '入口' },
      { tag: 'Docker', title: '容器化部署与环境隔离', description: '将前端、后端、数据库和缓存拆成可管理服务，降低迁移和回滚成本。', state: '隔离' },
      { tag: 'Monitor', title: '日志、备份、监控和迭代发布', description: '上线后持续排查异常、备份数据、记录版本，并根据反馈迭代。', state: '持续' }
    ],
    cards: [
      { title: '部署与上线维护', description: '完成服务器部署、域名证书、Docker/Nginx、日志排查、备份策略和版本迭代。', chips: ['部署', '证书', '维护'] },
      { title: '上线过程可回滚', description: '保留构建产物、配置文件和发布记录，出现异常时可以快速定位和恢复。', chips: ['发布', '回滚', '日志'] },
      { title: '长期运行可保障', description: '关注服务器资源、数据库备份、错误日志和访问异常，让系统上线后能稳定使用。', chips: ['监控', '备份', '排查'] }
    ]
  }
]

const activeArchitecture = computed(() => architectureTabs.find((tab) => tab.key === activeArchitectureTab.value) || architectureTabs[0])

const activeStack = computed(() => stackTabs.find((tab) => tab.key === activeStackTab.value) || stackTabs[0])
</script>
