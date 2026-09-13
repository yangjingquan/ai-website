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
            <a class="btn primary" :href="project.link" target="_blank" rel="noopener noreferrer" :aria-label="`访问${project.name}`">访问案例系统</a>
            <RouterLink class="btn secondary" to="/contact">提交类似需求</RouterLink>
          </div>
        </div>
        <aside class="case-detail-summary" aria-label="项目概览">
          <span>项目概览</span>
          <strong>{{ project.shortName }}</strong>
          <p>{{ project.summaryDescription }}</p>
          <div class="summary-line"><b>项目状态</b><span>{{ project.status }}</span></div>
          <div class="summary-line"><b>开发周期</b><span>{{ project.duration }}</span></div>
          <div class="summary-line"><b>覆盖范围</b><span>{{ project.scope }}</span></div>
        </aside>
      </section>

      <template v-if="project">
        <section class="section case-detail-section" aria-labelledby="case-background-title">
          <div class="section-head"><h2 id="case-background-title" class="section-title">从业务问题到系统交付</h2><p class="section-subtitle">把业务问题、负责内容和交付结果集中说明。</p></div>
          <div class="case-detail-overview-grid">
            <article class="case-detail-panel"><span class="detail-kicker">01 / 项目背景</span><h3>为什么要做</h3><p>{{ project.overview }}</p></article>
            <article class="case-detail-panel"><span class="detail-kicker">02 / 负责内容</span><h3>工作室负责什么</h3><p>{{ project.work }}</p></article>
            <article class="case-detail-panel case-detail-result"><span class="detail-kicker">03 / 交付结果</span><h3>最终交付</h3><p>{{ project.result }}</p></article>
          </div>
          <div class="case-delivery-flow" aria-label="项目交付过程"><div v-for="(step, index) in project.deliveryFlow" :key="step"><span>{{ String(index + 1).padStart(2, '0') }}</span><strong>{{ step }}</strong></div></div>
        </section>

        <section class="section soft-section case-detail-section" aria-labelledby="case-modules-title">
          <div class="section-head"><h2 id="case-modules-title" class="section-title">{{ project.moduleTitle }}</h2></div>
          <div class="case-module-grid">
            <article v-for="(module, index) in project.modules" :key="module.title" class="case-module-card" :class="{ 'case-module-card--portrait': module.portrait }">
              <figure>
                <div class="case-phone-frame">
                  <span class="case-phone-side-buttons" aria-hidden="true"></span>
                  <ImageLightbox :src="module.image" :alt="`${project.name}${module.title}模块截图`" />
                </div>
                <figcaption>{{ String(index + 1).padStart(2, '0') }} / 模块</figcaption>
              </figure>
              <div><h3>{{ module.title }}</h3><p>{{ module.description }}</p></div>
            </article>
          </div>
        </section>

        <section class="section case-detail-section" aria-labelledby="case-stack-title">
          <div class="case-stack-layout">
            <div><div class="eyebrow">工程实现</div><h2 id="case-stack-title" class="section-title">按业务拆分，便于持续迭代。</h2><p class="content-lead">前后端、数据库和部署环境分层，便于后续扩展模块、接入数据和维护线上版本。</p></div>
            <div class="case-stack-card"><div v-for="group in project.stackGroups" :key="group.label"><span>{{ group.label }}</span><p>{{ group.value }}</p></div><div><span>测试与质量</span><p>{{ project.testing }}</p></div></div>
          </div>
        </section>

        <section class="contact-section" id="contact"><div class="wrap"><div class="contact-panel"><div><h2>{{ project.contactTitle }}</h2><p>工作室会先了解现有流程和角色，再判断适合的系统范围、交付方式和排期。</p></div><RouterLink class="btn dark" to="/contact">发起需求评估</RouterLink></div></div></section>
      </template>

      <section v-else class="case-detail-missing"><div class="eyebrow">案例不存在</div><h1>暂时找不到这个案例。</h1><RouterLink class="btn primary" to="/cases">返回项目案例</RouterLink></section>
    </div>
    <SiteFooter text="纳启字节信息技术工作室 · 案例详情" />
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
