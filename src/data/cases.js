export const caseCatalog = [
  {
    slug: 'multi-merchant-shop',
    name: '多商户商城小程序与经营后台',
    shortName: 'Shop Suite',
    category: '零售电商 · 多端交易系统',
    summary: '围绕消费者下单、商家履约与平台运营，交付微信小程序、商家后台、运营后台和服务端接口。',
    status: '已部署 · 持续迭代',
    duration: '持续迭代',
    link: 'https://console.nexbyte.top',
    cover: '/cases/shop-miniap-cover.png',
    coverFit: 'portrait-contain',
    coverImages: ['/cases/shop-miniap-cover.png', '/cases/shop-miniap-category.png'],
    coverLayout: 'row',
    overview: '商城业务不仅需要完成商品到支付的交易闭环，还需要让商家独立维护商品与履约，并让平台统一管理商家、内容、审核、资金和营销规则。项目以多商户隔离为基础，覆盖消费者、商家与运营等角色界面。',
    work: '负责业务模型与角色权限梳理，小程序交易链路、Vue 管理后台、Spring Boot 服务端接口、微信支付与回调、订单/库存/售后状态流转，以及部署、迁移和回归验证。',
    result: '已形成小程序交易入口、商家商品与履约工作台、平台运营控制台的协同能力；本地运行环境可验证商家管理、商品审核和营销规则配置。',
    scope: '小程序 · 商家后台 · 运营后台 · 交易服务',
    summaryDescription: '消费者完成选购、支付与售后；商家处理商品、库存和履约；平台统一监管商家、订单、内容和营销边界。',
    contactTitle: '如果你正在搭建交易、履约或多角色运营体系，可以从一次需求评估开始。',
    moduleTitle: '小程序代表页面，展示从浏览到结算的路径',
    moduleSubtitle: '截图来自项目在微信开发者工具中的实际运行界面；公开案例不展示账号、订单与资金等业务数据。',
    deliveryFlow: ['交易链路设计', '多端功能开发', '规则与状态校验', '部署与持续迭代'],
    modules: [
      { title: '首页与营销入口', description: '首页把搜索、Banner、预售、积分权益、满减活动、分类与推荐商品组织在同一入口，方便用户发现商品与活动。', image: '/cases/shop-miniap-home.png', portrait: true },
      { title: '分类与商品浏览', description: '按类目筛选并浏览商品列表，商品卡片同步展示主图、名称、所属分类和价格信息，承接从发现到查看详情的路径。', image: '/cases/shop-miniap-category.png', portrait: true },
      { title: '购物车与结算准备', description: '购物车支持商品管理、促销提示和猜你喜欢推荐；进入结算前可继续浏览商品并完成选购。', image: '/cases/shop-miniap-cart.png', portrait: true }
    ],
    stackGroups: [
      { label: '消费者端', value: '原生微信小程序、Custom Tab Bar、微信登录与支付能力。' },
      { label: '管理端', value: 'Vue 3、TypeScript、Vite、Element Plus、Pinia、Vue Router、Axios。' },
      { label: '服务与数据', value: 'Java 17、Spring Boot 3、多模块 Maven、MyBatis-Plus、MySQL 8、Redis、Flyway。' },
      { label: '交易与安全', value: '微信支付 API v3、JWT、bcrypt、权限拦截、限流、XSS 处理与操作日志。' }
    ],
    testing: '服务端覆盖订单状态机、库存预占、支付/退款对账、物流、优惠、拼团和权限等单元与集成测试；小程序提供端到端冒烟脚本。',
    note: '小程序截图取自项目在本地微信开发者工具中的实际运行界面；线上控制台接口本次核验不可用，未将其作为数据结论。'
  },
  {
    slug: 'shoe-factory-erp',
    name: '制鞋厂流程管理 ERP 系统',
    shortName: '制鞋厂 ERP',
    category: '制造业 · 企业管理系统',
    summary: '围绕生产、财务、仓储和发货流程，完成需求梳理、系统开发、测试部署与上线交付。',
    cover: '/cases/erp-production-execution.jpg',
    coverImages: ['/cases/erp-production-execution.jpg', '/cases/erp-finance-control-center.jpg'],
    coverLayout: 'stack',
    status: '已上线',
    duration: '按阶段交付',
    link: 'http://erp.nexbyte.top',
    overview: '制鞋厂原有业务分散在人工记录和多个表格中，需要把生产、财务、仓库与发货流程放到同一套系统里，减少跨环节沟通成本。',
    work: '负责需求理解、业务流程梳理、前后端功能开发、接口测试、上线部署和后续维护。',
    result: '系统已按照客户需求上线，生产、财务和发货流程进入统一管理。',
    scope: '生产 · 财务 · 仓储 · 发货',
    summaryDescription: '围绕生产、财务、仓储和发货流程完成系统开发与上线交付。',
    contactTitle: '如果你正在梳理生产、财务或仓储流程，可以从一次需求评估开始。',
    moduleTitle: '三个核心模块，覆盖业务流程',
    moduleSubtitle: '以下页面来自实际 ERP 系统，展示数据已按授权范围脱敏处理。',
    deliveryFlow: ['需求梳理', '功能开发', '接口测试', '上线维护'],
    modules: [
      { title: '生产执行', description: '工单排程、替代料、车间异常与生产进度协同。', image: '/cases/erp-production-execution.jpg' },
      { title: '财务控制', description: '账龄、预算、现金预测和往来对账集中查看。', image: '/cases/erp-finance-control-center.jpg' },
      { title: '仓储履约', description: '收货、拣货、复核、发货与异常任务联动。', image: '/cases/erp-wms-execution.jpg' }
    ],
    stackGroups: [
      { label: '前端', value: 'Vue 3、TypeScript、Vite、Element Plus、Vue Router、Pinia、Axios、ECharts' },
      { label: '后端', value: 'Python FastAPI、Uvicorn、SQLAlchemy 2、Pydantic、PyMySQL、MySQL 8.0' },
      { label: '工程与安全', value: 'JWT、bcrypt、openpyxl、Docker' }
    ],
    stack: 'Vue 3、TypeScript、Vite、Element Plus、Vue Router、Pinia、Axios、ECharts；Python FastAPI、Uvicorn、SQLAlchemy 2、Pydantic、PyMySQL、MySQL 8.0；JWT、bcrypt、openpyxl、Docker。',
    testing: '前端使用 Vitest、vue-tsc，后端使用 Pytest、HTTPX 进行自动化测试。',
    note: '截图来自 ERP 实际页面，展示数据已按示例信息处理；管理员账号不会写入网站。'
  }
]

export function getCaseBySlug(slug) {
  return caseCatalog.find((item) => item.slug === slug)
}
