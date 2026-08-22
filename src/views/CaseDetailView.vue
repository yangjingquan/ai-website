<template>
  <main class="site content-page case-detail-page" id="site" tabindex="-1">
    <div class="wrap">
      <SiteNav />

      <section v-if="project" class="case-detail-hero" aria-labelledby="case-detail-title">
        <div class="case-detail-copy">
          <div class="eyebrow">{{ project.category }} · {{ project.status }}</div>
          <h1 id="case-detail-title">{{ project.name }}</h1>
          <p class="content-lead">{{ project.summary }}</p>
          <div class="hero-actions">
            <a class="btn primary" :href="project.link" target="_blank" rel="noopener noreferrer">访问案例系统</a>
            <RouterLink class="btn secondary" to="/contact">提交类似需求</RouterLink>
          </div>
        </div>
        <aside class="case-detail-summary" aria-label="项目概览">
          <span>PROJECT OVERVIEW</span>
          <strong>{{ project.shortName }}</strong>
          <p>已按客户需求完成开发并上线。</p>
          <div class="summary-line"><b>项目状态</b><span>{{ project.status }}</span></div>
          <div class="summary-line"><b>开发周期</b><span>{{ project.duration }}</span></div>
          <div class="summary-line"><b>覆盖范围</b><span>生产 · 财务 · 发货</span></div>
        </aside>
      </section>

      <template v-if="project">
        <section class="section case-detail-section" aria-labelledby="case-background-title">
          <div class="section-head"><h2 id="case-background-title" class="section-title">从业务背景到可运行系统</h2><p class="section-subtitle">先把流程和边界说清楚，再用可验证的模块承接真实业务。</p></div>
          <div class="case-detail-overview-grid">
            <article class="case-detail-panel"><span class="detail-kicker">01 / 背景</span><h3>为什么要做</h3><p>{{ project.overview }}</p></article>
            <article class="case-detail-panel"><span class="detail-kicker">02 / 工作</span><h3>我负责什么</h3><p>{{ project.work }}</p></article>
            <article class="case-detail-panel"><span class="detail-kicker">03 / 结果</span><h3>最终交付</h3><p>{{ project.result }}</p></article>
          </div>
        </section>

        <section class="section soft-section case-detail-section" aria-labelledby="case-modules-title">
          <div class="section-head"><h2 id="case-modules-title" class="section-title">关键模块，用截图说明系统能力</h2><p class="section-subtitle">以下页面来自 ERP 实际系统，展示数据已按示例信息处理。</p></div>
          <div class="case-module-grid">
            <article v-for="(module, index) in project.modules" :key="module.title" class="case-module-card">
              <figure><ImageLightbox :src="module.image" :alt="`${project.name}${module.title}模块截图`" /><figcaption>MODULE {{ String(index + 1).padStart(2, '0') }}</figcaption></figure>
              <div><span class="detail-kicker">{{ module.title }}</span><h3>{{ module.title }}</h3><p>{{ module.description }}</p></div>
            </article>
          </div>
        </section>

        <section class="section case-detail-section" aria-labelledby="case-stack-title">
          <div class="case-stack-layout">
            <div><div class="eyebrow">工程实现</div><h2 id="case-stack-title" class="section-title">前后端分离，按业务持续迭代。</h2><p class="content-lead">项目使用成熟的前端、后端、数据库与部署工具，方便后续继续增加模块、接入数据和维护线上版本。</p></div>
            <div class="case-stack-card"><div><span>技术栈</span><p>{{ project.stack }}</p></div><div><span>测试与质量</span><p>{{ project.testing }}</p></div></div>
          </div>
        </section>

        <section class="contact-section" id="contact"><div class="wrap"><div class="contact-panel"><div><h2>如果你也有流程管理系统需求，可以从一次评估开始。</h2><p>我会先了解现有流程，再判断适合的系统范围和交付方式。</p></div><RouterLink class="btn dark" to="/contact">发起需求评估</RouterLink></div></div></section>
      </template>

      <section v-else class="case-detail-missing"><div class="eyebrow">案例不存在</div><h1>暂时找不到这个案例。</h1><RouterLink class="btn primary" to="/cases">返回项目案例</RouterLink></section>
    </div>
    <SiteFooter text="小肥羊开发工作室 · 案例详情" />
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ImageLightbox from '../components/ImageLightbox.vue'
import SiteFooter from '../components/SiteFooter.vue'
import SiteNav from '../components/SiteNav.vue'
import { getCaseBySlug } from '../data/cases'

const route = useRoute()
const project = computed(() => getCaseBySlug(route.params.slug))
</script>
