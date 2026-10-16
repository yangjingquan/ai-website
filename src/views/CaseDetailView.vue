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
            <RouterLink class="btn primary" :to="{ path: '/contact', query: { projectType: project.contactProjectType, source: project.contactSource }, hash: '#form-section' }">{{ project.contactAction }}</RouterLink>
            <a v-if="project.demoUrl" class="btn secondary" :href="project.demoUrl" target="_blank" rel="noopener noreferrer">打开在线系统 ↗</a>
            <a class="btn secondary" href="#case-modules-title">查看项目截图</a>
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
          <div class="section-head"><h2 id="case-background-title" class="section-title">业务场景、项目范围与实际交付</h2><p class="section-subtitle">先说明适用场景与交付边界，再展示负责工作和可核验结果。</p></div>
          <div class="case-story-grid">
            <article class="case-story-panel"><span class="detail-kicker">{{ project.sceneKicker || '客户场景' }}</span><h3>{{ project.sceneHeading || '适合这样的业务' }}</h3><p>{{ project.customerScene }}</p></article>
            <article class="case-story-panel case-story-scope"><span class="detail-kicker">02 / 项目范围</span><h3>{{ project.scope }}</h3><dl><div v-for="item in project.scopeItems" :key="item.label"><dt>{{ item.label }}</dt><dd>{{ item.value }}</dd></div></dl></article>
            <article class="case-story-panel"><span class="detail-kicker">03 / 实际负责</span><h3>我承担的工作</h3><p>{{ project.work }}</p></article>
            <article class="case-story-panel case-detail-result"><span class="detail-kicker">04 / 可核验交付</span><h3>已经交付的结果</h3><p>{{ project.result }}</p></article>
          </div>
          <div class="case-delivery-flow" aria-label="项目交付过程"><div v-for="(step, index) in project.deliveryFlow" :key="step"><span>{{ String(index + 1).padStart(2, '0') }}</span><strong>{{ step }}</strong></div></div>
        </section>

        <section class="section soft-section case-detail-section" aria-labelledby="case-modules-title">
          <div class="section-head"><div><h2 id="case-modules-title" class="section-title">{{ project.moduleTitle }}</h2><p class="section-subtitle">{{ project.moduleSubtitle }}</p></div></div>
          <div class="case-module-grid">
            <article v-for="(module, index) in project.modules" :key="module.title" class="case-module-card" :class="{ 'case-module-card--portrait': module.portrait, 'case-module-card--contain': module.contain }">
              <figure>
                <div class="case-phone-frame">
                  <span class="case-phone-side-buttons" aria-hidden="true"></span>
                  <ImageLightbox :src="module.image" :alt="`${project.name}${module.title}模块截图`" />
                </div>
                <figcaption>{{ String(index + 1).padStart(2, '0') }} / {{ module.title }} · 项目截图</figcaption>
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

        <section class="contact-section" id="contact"><div class="wrap"><div class="contact-panel"><div><h2>{{ project.contactTitle }}</h2><p>先描述当前业务、最卡的流程和期望改善的结果，再一起确认适合的系统范围与交付方式。</p></div><RouterLink class="btn dark" :to="{ path: '/contact', query: { projectType: project.contactProjectType, source: project.contactSource }, hash: '#form-section' }">{{ project.contactAction }}</RouterLink></div></div></section>
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
