export const caseCatalog = [
  {
    slug: 'multi-merchant-shop',
    name: '多商户商城小程序与经营后台',
    shortName: 'Shop Suite',
    category: '零售电商 · 多端交易系统',
    shareImage: '/og/multi-merchant-shop.png',
    shareImageAlt: '多商户商城小程序与经营后台案例分享图，展示小程序实际页面',
    problemTitle: '交易与多角色运营',
    problemDescription: '适合需要用小程序承接交易，并协调商家商品、库存与履约、平台管理规则的零售业务。',
    problemTopics: ['小程序与订单', '库存与履约', '商家后台', '平台管理'],
    summary: '围绕消费者下单、商家履约与平台运营，交付微信小程序、商家后台、运营后台和服务端接口。',
    status: '已部署 · 持续迭代',
    duration: '持续迭代',
    cover: '/cases/shop-miniap-cover.png',
    coverFit: 'portrait-contain',
    coverImages: ['/cases/shop-miniap-cover.png', '/cases/shop-miniap-category.png'],
    coverLayout: 'row',
    customerScene: '适合需要同时服务消费者、商家与平台运营的零售电商业务。项目要解决的不只是线上下单，还包括商家自行维护商品与履约、平台统一管理商家和运营规则。',
    scopeItems: [
      { label: '系统端与角色', value: '消费者微信小程序、商家后台、平台运营后台与服务端接口；覆盖消费者、商家和平台运营角色。' },
      { label: '核心流程', value: '消费者浏览、下单、支付与售后；商家管理商品、库存和履约；平台管理商家、商品审核、内容与营销规则。' },
      { label: '范围边界', value: '本页只列出已核验的交付范围；未列功能不视为已交付，其他需求以项目确认的范围和交付清单为准。' }
    ],
    overview: '商城业务不仅需要完成商品到支付的交易闭环，还需要让商家独立维护商品与履约，并让平台统一管理商家、内容、审核、资金和营销规则。项目以多商户隔离为基础，覆盖消费者、商家与运营等角色界面。',
    work: '负责业务模型与角色权限梳理，小程序交易链路、Vue 管理后台、Spring Boot 服务端接口、微信支付与回调、订单/库存/售后状态流转，以及部署、迁移和回归验证。',
    result: '已形成小程序交易入口、商家商品与履约工作台、平台运营控制台的协同能力；本地运行环境可验证商家管理、商品审核和营销规则配置。',
    scope: '小程序 · 商家后台 · 运营后台 · 交易服务',
    summaryDescription: '消费者完成选购、支付与售后；商家处理商品、库存和履约；平台统一监管商家、订单、内容和营销边界。',
    contactTitle: '正在搭建多商户交易与履约系统？可以先讨论你的业务流程。',
    contactAction: '讨论交易与履约系统',
    contactProjectType: '电商 / 交易系统',
    contactSource: '项目案例页：多商户商城小程序与经营后台',
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
    shareImage: '/og/shoe-factory-erp.png',
    shareImageAlt: '制鞋厂流程管理 ERP 案例分享图，展示生产执行系统实际页面',
    problemTitle: '生产与内部管理',
    problemDescription: '适合生产、财务、仓储与发货依赖人工记录和多个表格协作，需要统一流程与岗位协同的制造企业。',
    problemTopics: ['生产执行', '财务控制', '仓储与发货', '岗位协同'],
    summary: '围绕生产、财务、仓储和发货流程，完成需求梳理、系统开发、测试部署与上线交付。',
    cover: '/cases/erp-production-execution.jpg',
    coverImages: ['/cases/erp-production-execution.jpg', '/cases/erp-finance-control-center.jpg'],
    coverLayout: 'stack',
    customerScene: '适合生产、财务、仓储和发货仍依赖人工记录与多个表格协作的制鞋厂。项目从跨环节信息分散、进度需要反复沟通的现状出发，把核心经营流程纳入 ERP 管理。',
    scopeItems: [
      { label: '系统与业务角色', value: '制鞋厂 ERP 管理系统，面向生产、财务、仓储与发货等业务环节。' },
      { label: '核心模块与流程', value: '生产执行、财务控制、仓储履约；覆盖生产进度、财务数据、收发货与异常任务协同。' },
      { label: '范围边界', value: '本页只列出案例截图和资料可核验的模块；未列功能不视为已交付，其他需求以项目确认的范围和交付清单为准。' }
    ],
    status: '已上线',
    duration: '按阶段交付',
    overview: '制鞋厂原有业务分散在人工记录和多个表格中，需要把生产、财务、仓库与发货流程放到同一套系统里，减少跨环节沟通成本。',
    work: '负责需求理解、业务流程梳理、前后端功能开发、接口测试、上线部署和后续维护。',
    result: '系统已按照客户需求上线，生产、财务、仓储和发货流程进入统一管理。',
    scope: '生产 · 财务 · 仓储 · 发货',
    summaryDescription: '围绕生产、财务、仓储和发货流程完成系统开发与上线交付。',
    contactTitle: '正在梳理生产与仓储流程？可以先讨论当前最卡的环节。',
    contactAction: '讨论生产与仓储流程',
    contactProjectType: '制造 / ERP / 内部管理',
    contactSource: '项目案例页：制鞋厂流程管理 ERP 系统',
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
  },
  {
    slug: 'ai-enterprise-knowledge-base',
    name: '企业 AI 知识库系统',
    shortName: 'AI 企业知识库',
    category: 'AI 应用 · 企业知识管理',
    shareImage: '/cases/ai-kb-chat-answer.png',
    shareImageAlt: '企业 AI 知识库智能问答页面，展示回答与文档引用来源',
    demoUrl: 'https://kb.nexbyte.top/',
    problemTitle: '企业知识问答',
    problemDescription: '适合制度、手册、产品文档和表格数据分散在多处，需要可追溯问答、分组权限与快速分析的企业团队。',
    problemTopics: ['多格式文档', '带出处问答', '知识库权限', '数据集分析'],
    summary: '自主开发并上线企业 AI 知识库，支持文档问答、原文引用、多轮追问、知识库权限与表格数据分析。',
    status: '已上线 · 持续迭代',
    duration: '持续迭代',
    cover: '/cases/ai-kb-chat-answer.png',
    overviewLabel: '应用场景',
    sceneKicker: '产品定位',
    sceneHeading: '企业知识检索与数据分析',
    overview: '制度、手册、培训资料和业务表格常分散在不同文件里，查找答案依赖人工搜索，也不容易核对信息出处。项目把文档问答、原文查阅与表格分析放进统一工作台。',
    customerScene: '面向需要集中管理 PDF、Office 文件、文本、Markdown 与网页资料，并希望员工可以快速查到依据的企业团队；知识内容按知识库分组，不同成员拥有查看或编辑权限。',
    scopeItems: [
      { label: '系统组成', value: 'Vue 3 前端、Spring Boot 服务端与 Python 检索服务，覆盖智能问答、文档管理、知识库管理、用户管理和效果评测。' },
      { label: '问答与数据流程', value: '支持 PDF、Word、Excel、PPT、TXT、Markdown 和网页导入；文档问答展示文件与页码等引用来源。Excel / CSV 数据集可用于自然语言分析，并查看图表、结果表与 SQL。' },
      { label: '权限与边界', value: '按知识库配置查看或编辑权限；数据分析按只读查询执行。公开案例中的界面截图来自本地演示数据。' }
    ],
    work: '自主完成产品流程设计与前后端实现：包括文档解析和 OCR、混合检索与重排、带引用的多轮问答、知识库权限隔离、表格数据分析，以及容器化部署和上线维护。',
    result: '系统已部署在 kb.nexbyte.top，可通过浏览器访问。当前覆盖文档问答与原文定位、知识库成员权限、问答反馈和历史，以及 Excel / CSV 数据集的自然语言分析。',
    scope: '文档问答 · 原文引用 · 知识库权限 · 表格问数',
    summaryDescription: '员工可用自然语言查找企业资料、核对回答出处；表格数据也能用于查询、图表与结果分析。',
    contactTitle: '正在整理企业文档、制度或表格数据？可以先讨论知识检索和权限需求。',
    contactAction: '讨论企业知识库',
    contactProjectType: 'AI / 企业知识库',
    contactSource: '项目案例页：企业 AI 知识库系统',
    moduleTitle: '从文档到答案，关键流程都有实际页面',
    moduleSubtitle: '界面截图取自本地演示环境，展示系统交互；示例文档与问题为演示数据。',
    deliveryFlow: ['资料导入与解析', '检索与来源引用', '权限与数据分析', '上线与持续迭代'],
    modules: [
      { title: '智能问答与引用来源', description: '回答关联到具体文档和页码，可继续追问，并打开原文查看引用上下文。', image: '/cases/ai-kb-chat-answer.png', contain: true },
      { title: '多格式文档管理', description: '查看文档所属知识库、处理状态与切片数量，支持文件与网页内容集中管理。', image: '/cases/ai-kb-documents.png', contain: true },
      { title: '检索效果评测', description: '使用 60 道评测题覆盖事实检索、多轮问答、Excel、PPT、OCR 与拒答场景，比较不同检索策略。', image: '/cases/ai-kb-eval.png', contain: true }
    ],
    stackGroups: [
      { label: '前端与交互', value: 'Vue 3、Element Plus、Vite、Vue Router、ECharts。' },
      { label: '业务服务', value: 'Java 17、Spring Boot 3、Spring Security、MyBatis-Plus、MySQL 8。' },
      { label: '检索与模型', value: 'Python FastAPI、LangChain、Chroma、向量检索、BM25 混合检索与重排；DeepSeek 生成回答。' },
      { label: '部署', value: 'Docker Compose、Nginx，拆分前端、Java 服务与 Python 检索服务。' }
    ],
    testing: '项目包含 60 道检索与问答评测题，覆盖事实问题、多轮追问、文档编号、Excel、PPT、扫描件 OCR 和知识库外问题。',
    note: '线上体验地址为 https://kb.nexbyte.top/；本页截图来自项目本地演示环境，不代表线上用户数据。'
  },
  {
    slug: 'campus-food-delivery',
    name: '校园食递 · 校园外卖配送平台',
    shortName: '校园食递',
    category: '校园餐饮 · 多端配送系统',
    shareImage: '/og/campus-food-delivery.png',
    shareImageAlt: '校园食递的 PC 管理后台和用户、商户、骑手三个微信小程序',
    problemTitle: '校园外卖集中交接与配送',
    problemDescription: '面向外卖进校受限的校园，帮校外小商户在线接单，并让学生骑手从同一个暂存点分批送餐到寝室。',
    problemTopics: ['跨店下单', '暂存点交接', '批次配送', '售后与结算'],
    summary: '为校外商户和校园学生搭建统一点餐入口。学生可跨店下单，商户分店履约，骑手到暂存点逐单扫码，按批次把餐送到寝室。',
    status: '四端已实现 · 持续迭代',
    duration: '分阶段开发',
    cover: '/cases/campus-food-delivery-cover.webp',
    overview: '校外外卖进校受限，学生常要到校门口取餐。部分小商户缺少线上接单渠道，高峰期餐品交接和延迟订单也难以统一协调。',
    customerScene: '以一所学校、一个暂存点为首期场景。学生在小程序选餐后可查看订单进度和预计配送批次，商户只需把餐送到固定交接点，校内骑手负责送到寝室门口。',
    scopeItems: [
      { label: '跨店点餐与分店履约', value: '一个结算单关联多笔商户订单。各店接收自己的订单，独立处理出餐、库存和售后，学生可按店查看进度。' },
      { label: '集中交接与高峰配送', value: '商户确认到点后，骑手扫描对应小票二维码逐单领取，一趟可送多单。管理员按常规和高峰时段配置发车间隔，错过批次可顺延。' },
      { label: '异常与资金可追溯', value: '按商户订单查看履约状态、支付记录、售后和结算。订单延迟可由管理员协调，退款和提现进度可单独追踪。' }
    ],
    work: '围绕跨店交易、暂存点交接和分批配送，梳理四端权限与订单状态，完成三个原生微信小程序、PC 管理后台和对应服务接口。',
    result: '已实现四端界面，覆盖下单拆单、商户接单到点、骑手扫码与送达确认，以及平台运营管理。正式支付、退款与打款以渠道验收为准。',
    scope: '用户端 · 商户端 · 骑手端 · PC 管理员端',
    summaryDescription: '同一笔交易串联学生点餐、商户出餐、骑手配送和平台运营，以暂存点完成校外到校内的交接。',
    contactTitle: '正在搭建校园点餐或集中交接配送系统？',
    contactAction: '讨论校园配送方案',
    contactProjectType: '电商 / 交易系统',
    contactSource: '项目案例页：校园食递',
    flowTitle: '一笔外卖订单如何送到寝室',
    deliveryFlow: ['学生跨店点餐并合并结算', '商户接单出餐并送至暂存点', '骑手逐单扫码后按批配送', '送达寝室并确认完成'],
    moduleTitle: '三个微信小程序与一个 PC 管理后台',
    moduleSubtitle: '三个小程序取自微信开发者工具，管理后台取自本地运行界面。截图中的个人及订单信息已脱敏。',
    modules: [
      {
        title: '用户端小程序',
        description: '浏览校外商户与餐品，在购物车合并结算。按商户查看订单、预计配送时间和配送进度，并从对应订单发起售后。',
        image: '/cases/campus-food-delivery-user.webp',
        imageAlt: '用户端店铺菜单，展示餐品、起送条件以及外卖配送和到店自取选项',
        portrait: true
      },
      {
        title: '商户端小程序',
        description: '在订单工作台处理本店接单、出餐、小票打印和到点确认，管理商品上下架、库存、售后及本店账务。',
        image: '/cases/campus-food-delivery-merchant.webp',
        imageAlt: '商户订单工作台，展示待接单、出餐中、待领取和配送中等状态筛选',
        portrait: true
      },
      {
        title: '骑手端小程序',
        description: '审核通过后查看配送批次，在暂存点逐单扫码领取，可一次配送多单，按寝室地址导航并确认送达，同时查看收益和结算记录。',
        image: '/cases/campus-food-delivery-rider.webp',
        imageAlt: '骑手配送台，展示当前发车批次、扫码领取餐品入口和下一批时间',
        portrait: true
      },
      {
        title: '管理员端 PC 后台',
        description: '审核商户和骑手入驻，设置配送费、抽成、发车批次和接单超时规则，跟踪异常订单、售后、资金流水和提现审核。',
        image: '/cases/campus-food-delivery-admin.webp',
        imageAlt: 'PC 运营配置页，展示配送时段、常规和高峰批次间隔、结算与接单超时设置',
        wide: true
      }
    ],
    stackTitle: '四端共用交易与配送状态',
    stackLead: '三个微信小程序和 PC 后台统一通过 API 网关接入。订单、交接记录和结算数据在服务端关联，各端按角色查看和处理自己的业务。',
    stackGroups: [
      { label: '客户端', value: '用户、商户和骑手使用原生微信小程序。PC 管理后台使用 Vue 3、TypeScript 与 Element Plus。' },
      { label: '统一接入', value: 'Spring Cloud Gateway 将端侧请求路由到对应服务，Nacos 提供服务注册发现与配置管理。' },
      { label: '业务服务', value: 'Java 21 / Spring Boot 按用户、商户、骑手和管理员拆分 API，共享订单状态定义。下单、到点、扫码领取和送达由相应角色提交至服务端。' },
      { label: '数据与部署', value: 'MySQL 保存订单、库存、配送和账本，Redis 支持管理员会话，Docker Compose 编排运行环境。' }
    ],
    testing: '项目内的隔离联调脚本覆盖跨店拆单、模拟支付、独立履约、售后和配送位置读取。'
  }
]

export function getCaseBySlug(slug) {
  return caseCatalog.find((item) => item.slug === slug)
}
