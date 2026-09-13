<template>
  <main class="site content-page cases-index-page" id="site" tabindex="-1">
    <div class="wrap">
      <SiteNav />
      <section class="content-hero" aria-labelledby="cases-title">
        <div>
          <div class="eyebrow">项目案例 · 背景 · 方案 · 结果</div>
          <h1 id="cases-title">用真实项目，说明业务系统如何落地。</h1>
          <p class="content-lead">从业务背景、交付范围到上线结果，查看我如何把复杂流程整理成可运行、可维护的系统。</p>
          <div class="hero-actions"><RouterLink class="btn primary" :to="firstCase ? `/cases/${firstCase.slug}` : '/cases'">查看代表案例</RouterLink><RouterLink class="btn secondary" to="/contact">提交你的项目</RouterLink></div>
        </div>
        <div class="hero-summary"><span>项目案例</span><strong>真实项目案例</strong><p>仅展示已授权或可在本地运行环境核验的项目，业务数据均按展示范围处理。</p><div class="summary-line"><b>详情结构</b><span>背景 · 负责内容 · 交付结果</span></div><div class="summary-line"><b>展示原则</b><span>真实项目 · 数据脱敏</span></div></div>
      </section>
    </div>

    <section class="section" aria-labelledby="case-list-title"><div class="wrap"><div class="section-head"><h2 id="case-list-title" class="section-title">项目案例</h2></div><div class="case-directory-grid" :class="{ 'single-case': caseCatalog.length === 1 }">
      <article v-for="project in caseCatalog" :key="project.slug" class="case-directory-card">
        <div class="case-directory-cover" :class="{ 'case-directory-cover--portrait-contain': project.coverFit === 'portrait-contain', 'case-directory-cover--gallery': project.coverImages?.length, [`case-directory-cover--${project.coverLayout}`]: project.coverImages?.length }">
          <div v-if="project.coverImages?.length" class="case-directory-cover-gallery">
            <ImageLightbox v-for="(image, index) in project.coverImages" :key="image" :src="image" :alt="`${project.name}项目封面截图${index + 1}`" />
          </div>
          <ImageLightbox v-else :src="project.cover" :alt="`${project.name}项目封面`" />
          <RouterLink class="case-directory-cover-link" :to="`/cases/${project.slug}`">查看详情 →</RouterLink>
        </div>
        <div class="case-directory-copy"><div class="case-directory-meta"><span>{{ project.category }}</span><span>{{ project.duration }}</span></div><h3><RouterLink :to="`/cases/${project.slug}`">{{ project.name }}</RouterLink></h3><div class="case-directory-tags" aria-label="项目范围"><span v-for="module in project.modules" :key="module.title">{{ module.title }}</span></div><p>{{ project.summary }}</p><p class="case-directory-result"><strong>交付结果</strong>{{ project.result }}</p><RouterLink class="text-link" :to="`/cases/${project.slug}`">查看案例详情 →</RouterLink></div>
      </article>
    </div></div></section>

    <section class="contact-section" id="contact"><div class="wrap"><div class="contact-panel"><div><h2>如果你有类似的业务系统需求，可以直接沟通。</h2><p>我会先了解业务流程、用户角色和上线目标，再判断适合的系统范围和交付方式。</p></div><RouterLink class="btn dark" to="/contact">发起需求评估</RouterLink></div></div></section>
    <SiteFooter text="纳启字节信息技术工作室 · 项目案例" />
  </main>
</template>

<script setup>
import { computed } from 'vue'
import ImageLightbox from '../components/ImageLightbox.vue'
import SiteFooter from '../components/SiteFooter.vue'
import SiteNav from '../components/SiteNav.vue'
import { caseCatalog } from '../data/cases'

const firstCase = computed(() => caseCatalog[0])
</script>
