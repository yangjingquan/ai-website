<template>
  <main class="site content-page cases-index-page" id="site" tabindex="-1">
    <div class="wrap">
      <SiteNav />
      <section class="content-hero" aria-labelledby="cases-title">
        <div>
          <div class="eyebrow">业务原状 · 解决重点 · 系统交付</div>
          <h1 id="cases-title">不展示抽象功能清单，用真实项目说明业务问题如何被拆解。</h1>
          <p class="content-lead">从企业原有的协作难点、首期要跑通的流程，到可验证的交付内容，查看系统如何成为业务持续运转的管理基础。</p>
          <div class="hero-actions"><RouterLink class="btn primary" :to="firstCase ? `/cases/${firstCase.slug}` : '/cases'">查看代表案例</RouterLink><RouterLink class="btn secondary" to="/contact">提交你的项目</RouterLink></div>
        </div>
        <div class="hero-summary"><span>项目案例</span><strong>真实项目，交付可核验</strong><p>仅展示已授权或可在本地运行环境核验的项目，业务数据均按展示范围处理。</p><div class="summary-line"><b>案例结构</b><span>业务原状 · 系统重点 · 交付结果</span></div><div class="summary-line"><b>展示原则</b><span>真实项目 · 数据脱敏</span></div></div>
      </section>
    </div>

    <section class="section" aria-labelledby="case-list-title"><div class="wrap"><div class="section-head"><h2 id="case-list-title" class="section-title">从业务原状到系统交付</h2><p class="section-subtitle">不使用未经证实的效率百分比；以真实的业务范围、模块和上线结果建立判断依据。</p></div><div class="case-directory-grid" :class="{ 'single-case': caseCatalog.length === 1 }">
      <article v-for="project in caseCatalog" :key="project.slug" class="case-directory-card">
        <div class="case-directory-cover" :class="{ 'case-directory-cover--portrait-contain': project.coverFit === 'portrait-contain', 'case-directory-cover--gallery': project.coverImages?.length, [`case-directory-cover--${project.coverLayout}`]: project.coverImages?.length }">
          <div v-if="project.coverImages?.length" class="case-directory-cover-gallery">
            <ImageLightbox v-for="(image, index) in project.coverImages" :key="image" :src="image" :alt="`${project.name}项目封面截图${index + 1}`" />
          </div>
          <ImageLightbox v-else :src="project.cover" :alt="`${project.name}项目封面`" />
          <RouterLink class="case-directory-cover-link" :to="`/cases/${project.slug}`">查看详情 →</RouterLink>
        </div>
        <div class="case-directory-copy"><div class="case-directory-meta"><span>{{ project.category }}</span><span>{{ project.duration }}</span></div><h3><RouterLink :to="`/cases/${project.slug}`">{{ project.name }}</RouterLink></h3><div class="case-directory-tags" aria-label="项目范围"><span v-for="module in project.modules" :key="module.title">{{ module.title }}</span></div><p><strong>业务原状</strong>{{ project.overview }}</p><p><strong>解决重点</strong>{{ project.summary }}</p><p class="case-directory-result"><strong>系统交付</strong>{{ project.result }}</p><RouterLink class="text-link" :to="`/cases/${project.slug}`">查看案例详情 →</RouterLink></div>
      </article>
    </div></div></section>

    <section class="contact-section" id="contact"><div class="wrap"><div class="contact-panel"><div><h2>如果你也被分散流程、重复录入或协作断层卡住，可以先从问题评估开始。</h2><p>我会先了解现有流程、角色和系统，再判断是做新模块、连接已有工具，还是优先修复最影响使用的环节。</p></div><RouterLink class="btn dark" to="/contact">发起业务评估</RouterLink></div></div></section>
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
