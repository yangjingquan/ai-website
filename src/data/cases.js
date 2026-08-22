export const caseCatalog = [
  {
    slug: 'shoe-factory-erp',
    name: '制鞋厂流程管理 ERP 系统',
    shortName: '制鞋厂 ERP',
    category: '制造业 · 企业管理系统',
    summary: '围绕生产、财务和发货流程搭建统一的企业管理系统，按客户需求完成开发并上线。',
    cover: '/cases/erp-production-execution.jpg',
    status: '已上线',
    duration: '2 个月',
    link: 'http://erp.nexbyte.top',
    overview: '制鞋厂原有业务分散在人工记录和多个表格中，需要把生产、财务、仓库与发货流程放到同一套系统里，减少跨环节沟通成本。',
    work: '负责需求理解、业务流程梳理、前后端功能开发、联调测试、上线部署和后续维护。',
    result: '系统已按照客户需求上线，生产、财务和发货流程进入统一管理。',
    modules: [
      { title: '生产执行', description: '工单排程、替代料、车间异常与生产进度协同。', image: '/cases/erp-production-execution.jpg' },
      { title: '财务控制', description: '账龄、预算、现金预测和往来对账集中查看。', image: '/cases/erp-finance-control-center.jpg' },
      { title: '仓储履约', description: '收货、拣货、复核、发货与异常任务联动。', image: '/cases/erp-wms-execution.jpg' }
    ],
    stack: 'Vue 3、TypeScript、Vite、Element Plus、Vue Router、Pinia、Axios、ECharts；Python FastAPI、Uvicorn、SQLAlchemy 2、Pydantic、PyMySQL、MySQL 8.0；JWT、bcrypt、openpyxl、Docker。',
    testing: '前端使用 Vitest、vue-tsc，后端使用 Pytest、HTTPX 进行自动化测试。',
    note: '截图来自 ERP 实际页面，展示数据已按示例信息处理；管理员账号不会写入网站。'
  }
]

export function getCaseBySlug(slug) {
  return caseCatalog.find((item) => item.slug === slug)
}
