<template>
  <main class="site" id="site" tabindex="-1">

      <div class="wrap">
        <SiteNav />

        <section class="hero">
          <div class="hero-copy">
            <div class="eyebrow">需求评估 · 原型设计 · 开发与接口测试 · 上线维护</div>
            <h1>把项目拆成阶段，每一步都有交付成果。</h1>
            <p class="lead">面向小程序、APP、CRM、ERP 等商业系统定制开发，把合作拆成清晰阶段：先定业务边界，再定页面与数据结构，随后开发和接口测试、验收、部署上线与持续迭代。</p>
            <div class="hero-actions">
              <a class="btn primary" href="#contact">查看交付阶段</a>
              <a class="btn secondary" href="#contact">发起排期评估</a>
            </div>
            <div class="trust-row">
              <div class="trust-item"><strong>6步</strong><span>标准交付路径</span></div>
              <div class="trust-item"><strong>节点</strong><span>阶段成果可确认</span></div>
              <div class="trust-item"><strong>长期</strong><span>上线后维护迭代</span></div>
            </div>
          </div>

          <div class="hero-board">
            <div class="plan-window">
              <div class="window-top"><div class="window-title">项目交付进度中心</div><div class="status-pill">按阶段推进</div></div>
              <div class="milestone-stack">
                <div class="milestone"><div class="milestone-num">01</div><div><strong>需求边界确认</strong><span>角色、流程、模块、第三方能力和验收范围。</span></div><div class="progress-pill">已确认</div></div>
                <div class="milestone"><div class="milestone-num">02</div><div><strong>原型与数据结构</strong><span>页面路径、字段、订单状态和后台管理逻辑。</span></div><div class="progress-pill">设计中</div></div>
                <div class="milestone"><div class="milestone-num">03</div><div><strong>开发与接口测试</strong><span>前台、后台、接口、支付、消息、权限同步推进。</span></div><div class="progress-pill">待启动</div></div>
                <div class="milestone"><div class="milestone-num">04</div><div><strong>部署上线与维护</strong><span>审核发布、服务器部署、问题修复和迭代计划。</span></div><div class="progress-pill">持续</div></div>
              </div>
            </div>
            <div class="floating-note"><strong>确认后再进入下一步</strong><span>每个阶段都有可查看、可沟通、可确认的成果，减少返工。</span></div>
          </div>
        </section>
      </div>

      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">从想法到上线，拆成适合一对一合作的六个阶段</h2>
            <p class="section-subtitle">流程不做复杂包装，重点让客户知道什么时候沟通、什么时候确认、什么时候能看到阶段成果。</p>
          </div>
          <div class="stage-grid">
            <article class="stage-card">
              <div class="stage-top"><div class="stage-icon">沟通</div><div class="stage-time">01 评估</div></div>
              <h3>需求沟通与范围评估</h3>
              <p>确认业务类型、用户角色、核心流程、已有资料、上线时间和预算范围，把模糊想法整理成开发边界。</p>
              <div class="feature-list"><span>业务目标梳理</span><span>功能范围拆分</span><span>报价与周期评估</span></div>
            </article>
            <article class="stage-card">
              <div class="stage-top"><div class="stage-icon">原型</div><div class="stage-time">02 原型</div></div>
              <h3>页面原型与流程确认</h3>
              <p>先把前台页面、后台模块、表单字段、订单状态和操作路径画清楚，确认后再进入视觉与开发。</p>
              <div class="feature-list"><span>页面结构清单</span><span>业务流程路径</span><span>字段与权限确认</span></div>
            </article>
            <article class="stage-card">
              <div class="stage-top"><div class="stage-icon">设计</div><div class="stage-time">03 设计</div></div>
              <h3>界面风格与技术方案</h3>
              <p>统一小程序、APP、H5、管理后台的视觉规范，同时确定接口、数据库、支付、消息和部署方案。</p>
              <div class="feature-list"><span>视觉组件规范</span><span>技术架构确认</span><span>第三方能力准备</span></div>
            </article>
            <article class="stage-card">
              <div class="stage-top"><div class="stage-icon">开发</div><div class="stage-time">04 接口测试</div></div>
              <h3>前后端开发与接口测试</h3>
              <p>按模块推进移动端、管理后台、服务端接口、数据库和第三方接入，关键节点提供演示版本。</p>
              <div class="feature-list"><span>模块分批交付</span><span>支付和接口测试</span><span>后台权限配置</span></div>
            </article>
            <article class="stage-card">
              <div class="stage-top"><div class="stage-icon">测试</div><div class="stage-time">05 测试</div></div>
              <h3>测试验收与问题修复</h3>
              <p>围绕登录、下单、支付、退款、审批、数据统计和后台操作做验收，集中修复上线前问题。</p>
              <div class="feature-list"><span>主流程走查</span><span>边界状态测试</span><span>验收清单确认</span></div>
            </article>
            <article class="stage-card">
              <div class="stage-top"><div class="stage-icon">上线</div><div class="stage-time">06 上线</div></div>
              <h3>部署发布与后续维护</h3>
              <p>协助小程序审核、APP 发布、域名证书、服务器部署、数据备份和上线后的问题排查与版本迭代。</p>
              <div class="feature-list"><span>上线发布支持</span><span>账号资料交接</span><span>长期维护迭代</span></div>
            </article>
          </div>
        </div>
      </section>

      <section class="showcase">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">交付过程像项目后台一样清楚，进度、成果和风险都能看见</h2>
            <p class="section-subtitle">客户不用猜“现在做到哪了”，每个阶段对应具体成果和确认点，沟通成本会低很多。</p>
          </div>
          <div class="showcase-grid">
            <div class="project-dashboard">
              <div class="dash-nav">
                <strong>项目推进看板</strong>
                <div class="dash-tabs">
                  <button
                    v-for="tab in deliveryTabs"
                    :key="tab.key"
                    type="button"
                    class="dash-tab"
                    :class="{ active: activeDeliveryTab === tab.key }"
                    :aria-pressed="activeDeliveryTab === tab.key"
                    @click="activeDeliveryTab = tab.key"
                  >
                    {{ tab.label }}
                  </button>
                </div>
              </div>
              <div class="phase-list">
                <div v-for="item in activeDelivery.items" :key="item.title" class="phase-row">
                  <div class="phase-tag">{{ item.tag }}</div>
                  <div><strong>{{ item.title }}</strong><span>{{ item.description }}</span></div>
                  <div class="phase-status">{{ item.status }}</div>
                </div>
              </div>
            </div>
            <div class="artifact-list">
              <article v-for="artifact in activeDelivery.artifacts" :key="artifact.title" class="artifact-card">
                <h3>{{ artifact.title }}</h3>
                <p>{{ artifact.description }}</p>
                <div class="chip-row"><span v-for="chip in artifact.chips" :key="chip" class="chip">{{ chip }}</span></div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <details class="page-more">
        <summary>查看确认事项、质量控制、交接与常见问题</summary>

      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">合作中谁确认、谁交付，说在前面更容易推进</h2>
            <p class="section-subtitle">个人开发合作最怕信息反复补充，所以流程页面要把客户需要准备的内容和开发者负责的事项讲清楚。</p>
          </div>
          <div class="confirm-grid">
            <article class="confirm-card">
              <div class="eyebrow">客户需要确认</div>
              <h3>业务资料、决策人和验收边界越明确，项目推进越稳定。</h3>
              <div class="confirm-table">
                <div class="confirm-row"><strong>业务资料</strong><span>产品服务、价格规则、会员规则、门店或仓库信息、现有表格和运营素材。</span></div>
                <div class="confirm-row"><strong>账号资质</strong><span>小程序、公众号、开放平台、支付商户号、域名备案、短信或地图等第三方账号。</span></div>
                <div class="confirm-row"><strong>验收范围</strong><span>必须上线的核心功能、可后续迭代的功能、测试负责人和最终确认人。</span></div>
              </div>
            </article>
            <article class="confirm-card">
              <div class="eyebrow">开发者负责交付</div>
              <h3>从需求拆解到上线维护，由同一个人持续跟进，减少转述偏差。</h3>
              <div class="confirm-table">
                <div class="confirm-row"><strong>产品梳理</strong><span>把业务目标拆成页面、模块、字段、流程、权限和后台管理能力。</span></div>
                <div class="confirm-row"><strong>系统实现</strong><span>完成移动端、后台、接口、数据库、支付、消息通知和第三方系统对接。</span></div>
                <div class="confirm-row"><strong>上线维护</strong><span>处理部署发布、测试修复、使用说明、问题排查和后续功能迭代建议。</span></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <div class="quality-band">
            <article class="scope-card">
              <div class="eyebrow">质量控制重点</div>
              <h3>业务系统不只要能打开，更要能稳定跑流程。</h3>
              <p>确认上线前会围绕完整业务流程检查：用户注册登录、商品或服务配置、订单状态、支付退款、后台权限、数据统计、异常提示、移动端适配和上线环境稳定性。</p>
              <div class="chip-row"><span class="chip">主流程可跑通</span><span class="chip">后台可运营</span><span class="chip">数据可追踪</span><span class="chip">上线可维护</span></div>
            </article>
            <div class="risk-grid">
              <article class="risk-card"><h3>支付与订单状态</h3><p>检查待支付、已支付、退款、取消、核销、发货和售后等状态是否闭环。</p></article>
              <article class="risk-card"><h3>权限与数据安全</h3><p>区分管理员、员工、客户等角色权限，避免越权查看或误操作关键数据。</p></article>
              <article class="risk-card"><h3>移动端体验适配</h3><p>覆盖常见机型、页面空状态、加载状态、失败提示和表单输入体验。</p></article>
              <article class="risk-card"><h3>部署与备份策略</h3><p>上线前确认域名、证书、服务器、数据库备份、日志和后续维护方式。</p></article>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">项目交接不仅交代码，更交能继续运营的资料</h2>
            <p class="section-subtitle">上线后客户需要知道后台怎么用、账号在哪里、数据怎么备份、后续如何继续加功能。</p>
          </div>
          <div class="handover-grid">
            <article class="handover-card"><div class="handover-icon">账</div><h3>账号与权限</h3><p>交接后台账号、管理员权限、第三方平台账号绑定关系和必要的安全提醒。</p></article>
            <article class="handover-card"><div class="handover-icon">环</div><h3>线上环境</h3><p>说明服务器、域名、证书、数据库、存储、短信、支付和发布平台的配置情况。</p></article>
            <article class="handover-card"><div class="handover-icon">用</div><h3>后台使用说明</h3><p>围绕商品、订单、客户、库存、审批、活动和数据报表整理常用操作说明。</p></article>
            <article class="handover-card"><div class="handover-icon">维</div><h3>维护迭代建议</h3><p>记录已上线范围、待优化功能、运营反馈入口和后续版本规划方向。</p></article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <h2 class="section-title">交付流程常见问题，提前说明合作节奏</h2>
            <p class="section-subtitle">让客户在沟通前就理解定制开发为什么需要先确认范围，以及哪些资料会影响周期。</p>
          </div>
          <div class="qa-grid">
            <article class="qa-card"><h3>没有完整需求文档可以开始吗？</h3><p>可以。只要有业务想法或参考系统，就可以先做需求梳理，把页面、流程、字段和功能边界整理出来。</p></article>
            <article class="qa-card"><h3>开发过程中能调整需求吗？</h3><p>小范围优化可以在阶段内调整；涉及流程、数据结构或第三方能力的大变更，会单独评估影响和排期。</p></article>
            <article class="qa-card"><h3>什么时候能看到可演示版本？</h3><p>通常在核心模块开发完成后提供阶段演示，例如登录、首页、下单、后台配置或客户管理先跑通。</p></article>
            <article class="qa-card"><h3>上线后出现问题怎么处理？</h3><p>上线初期会协助排查真实使用中的问题，后续可按维护或迭代方式继续优化功能与体验。</p></article>
          </div>
        </div>
      </section>

      </details>

      <section class="contact-section" id="contact">
        <div class="wrap">
          <div class="contact-panel">
            <div>
              <h2>想确认你的项目适合怎样交付，可以先把需求发我评估。</h2>
              <p>你可以准备业务类型、主要功能、参考案例、是否需要后台、期望上线时间。我会先帮你拆成页面、流程、功能清单和大致排期。</p>
              <div class="chip-row"><span class="chip">需求评估</span><span class="chip">原型梳理</span><span class="chip">阶段交付</span><span class="chip">上线维护</span></div>
            </div>
            <div class="contact-box">
              <WechatQr compact />
              <div class="contact-line"><span>手机号</span><a href="tel:18201117988">18201117988</a></div>
              <a class="btn dark" href="tel:18201117988">立即预约交付评估</a>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="wrap">纳启字节信息技术工作室 · 小程序 / APP / CRM / ERP 商业系统定制开发 · <a class="filing-link" href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">辽ICP备2026015396号</a><RouterLink class="footer-link" to="/privacy">隐私与服务说明</RouterLink></div>
      </footer>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import SiteNav from '../components/SiteNav.vue'
import WechatQr from '../components/WechatQr.vue'

const activeDeliveryTab = ref('phase')

const deliveryTabs = [
  {
    key: 'phase',
    label: '阶段',
    items: [
      { tag: '需求', title: '需求说明与功能清单', description: '确认业务角色、页面模块、后台配置、第三方接口和不包含范围。', status: '100%' },
      { tag: '原型', title: '前台路径与后台结构', description: '确认首页、列表、详情、表单、订单状态、权限和数据字段。', status: '80%' },
      { tag: '开发', title: '模块开发与接口测试', description: '移动端、管理端、服务端、数据库、支付回调和消息通知分批交付。', status: '45%' },
      { tag: '上线', title: '发布部署与资料交接', description: '小程序审核、APP 发布、服务器部署、账号权限和维护方式交接。', status: '待启' }
    ],
    artifacts: [
      { title: '需求阶段成果', description: '需求说明、功能范围、页面清单、后台模块、第三方能力、预算与周期评估。', chips: ['范围清晰', '可报价', '可排期'] },
      { title: '设计开发阶段成果', description: '页面原型、视觉规范、数据库结构、接口文档、阶段演示版本和测试记录。', chips: ['可预览', '可确认', '可迭代'] },
      { title: '上线维护阶段成果', description: '生产环境、发布版本、后台账号、部署说明、验收清单、问题修复和后续优化建议。', chips: ['可使用', '可交接', '可维护'] }
    ]
  },
  {
    key: 'artifact',
    label: '阶段成果',
    items: [
      { tag: '文档', title: '需求与功能范围文档', description: '记录业务目标、角色权限、页面清单、字段说明、第三方能力和首期边界。', status: '确认' },
      { tag: '原型', title: '页面原型与视觉规范', description: '输出前台路径、后台结构、核心表单、交互状态和统一组件样式。', status: '预览' },
      { tag: '接口', title: '接口与数据库结构', description: '记录接口规则、数据表结构、状态流转、支付回调和消息通知逻辑。', status: '测试中' },
      { tag: '版本', title: '演示版本与上线包', description: '按阶段提供可演示版本，最终交付生产环境、部署说明和后台账号。', status: '交接' }
    ],
    artifacts: [
      { title: '沟通阶段资料', description: '需求说明、业务流程图、页面模块、报价周期和不包含范围。', chips: ['可确认', '可估价', '可控范围'] },
      { title: '开发阶段资料', description: '页面原型、视觉规范、接口文档、数据库结构、阶段演示版本和测试记录。', chips: ['可预览', '可测试', '可追踪'] },
      { title: '上线阶段资料', description: '部署环境、后台账号、发布版本、验收清单、使用说明和维护建议。', chips: ['可上线', '可使用', '可维护'] }
    ]
  },
  {
    key: 'acceptance',
    label: '验收',
    items: [
      { tag: '流程', title: '主业务流程走查', description: '检查登录、浏览、下单、预约、支付、退款、核销、审批和售后状态。', status: '必测' },
      { tag: '后台', title: '后台管理验收', description: '检查商品、订单、客户、库存、权限、报表、导入导出和配置入口。', status: '必测' },
      { tag: '适配', title: '多端体验与异常状态', description: '覆盖移动端、后台桌面端、空状态、加载状态、失败提示和表单校验。', status: '走查' },
      { tag: '安全', title: '权限边界与数据保护', description: '确认不同角色只能访问对应菜单、数据范围和关键操作。', status: '复核' }
    ],
    artifacts: [
      { title: '验收清单', description: '按业务主流程列出测试项、负责人、测试结果和遗留问题。', chips: ['有清单', '有记录', '有结论'] },
      { title: '问题修复记录', description: '记录问题描述、影响范围、修复状态、复测结果和上线前处理意见。', chips: ['可复测', '可追踪', '可闭环'] },
      { title: '上线确认', description: '上线前确认账号、支付、域名、证书、服务器、备份和监控可用。', chips: ['可发布', '可回滚', '可排查'] }
    ]
  },
  {
    key: 'maintenance',
    label: '维护',
    items: [
      { tag: '部署', title: '生产环境与账号交接', description: '交接服务器、域名、证书、数据库、存储、支付和第三方平台账号关系。', status: '交接' },
      { tag: '备份', title: '数据备份与恢复策略', description: '说明数据库备份、文件备份、日志保留、恢复方式和关键风险点。', status: '持续' },
      { tag: '优化', title: '上线后问题排查', description: '处理真实使用中的异常、兼容性、性能、后台操作和流程体验问题。', status: '维护' },
      { tag: '迭代', title: '后续版本规划', description: '根据运营反馈继续扩展营销、客户、库存、财务、报表和自动化能力。', status: '规划' }
    ],
    artifacts: [
      { title: '维护交接资料', description: '后台账号、部署说明、服务器信息、第三方配置和常用操作说明。', chips: ['可接手', '可排查', '可运营'] },
      { title: '运行保障资料', description: '备份策略、日志位置、监控建议、常见问题和应急处理方式。', chips: ['可恢复', '可定位', '可保障'] },
      { title: '迭代建议', description: '记录已上线范围、待优化功能、客户反馈和后续版本优先级。', chips: ['可规划', '可扩展', '可持续'] }
    ]
  }
]

const activeDelivery = computed(() => deliveryTabs.find((tab) => tab.key === activeDeliveryTab.value) || deliveryTabs[0])
</script>
