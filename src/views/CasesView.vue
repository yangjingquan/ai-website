<template>
  <main class="site content-page cases-index-page" id="site" tabindex="-1">
    <div class="wrap">
      <SiteNav />
      <section class="content-hero" aria-labelledby="cases-title">
        <div>
          <div class="eyebrow">项目案例 · 背景 · 方案 · 结果</div>
          <h1 id="cases-title">用真实案例，说明系统怎样落地。</h1>
          <p class="content-lead">从项目背景、我的工作，到关键模块、技术栈和上线结果，案例详情页会把可验证的信息集中呈现，方便你判断是否适合合作。</p>
          <div class="hero-actions"><RouterLink class="btn primary" :to="firstCase ? `/cases/${firstCase.slug}` : '/cases'">查看代表案例</RouterLink><RouterLink class="btn secondary" to="/contact">提交你的项目</RouterLink></div>
        </div>
        <div class="hero-summary"><span>案例目录</span><strong>{{ caseCatalog.length }} 个已上线项目</strong><p>后续会继续增加经过授权的真实案例。</p><div class="summary-line"><b>详情结构</b><span>背景 · 方案 · 结果</span></div><div class="summary-line"><b>展示原则</b><span>真实项目 · 数据脱敏</span></div></div>
      </section>
    </div>

    <section class="section" aria-labelledby="case-list-title"><div class="wrap"><div class="section-head"><h2 id="case-list-title" class="section-title">案例目录</h2><p class="section-subtitle">点击案例名称进入独立详情页，查看完整项目说明。</p></div><div class="case-directory-grid">
      <article v-for="project in caseCatalog" :key="project.slug" class="case-directory-card">
        <div class="case-directory-cover"><ImageLightbox :src="project.cover" :alt="`${project.name}项目封面`" /><RouterLink class="case-directory-cover-link" :to="`/cases/${project.slug}`">查看详情 →</RouterLink></div>
        <div class="case-directory-meta"><span>{{ project.category }}</span><span>{{ project.duration }}</span></div>
        <h3><RouterLink :to="`/cases/${project.slug}`">{{ project.name }}</RouterLink></h3>
        <p>{{ project.summary }}</p>
        <RouterLink class="text-link" :to="`/cases/${project.slug}`">进入案例详情 →</RouterLink>
      </article>
      <article class="case-directory-card case-directory-placeholder"><div class="case-directory-placeholder-mark">+</div><span class="detail-kicker">NEXT CASE</span><h3>后续案例</h3><p>【待补充：已授权项目名称、截图和结果数据】</p><span class="placeholder">案例会逐步增加，不使用虚构项目填充。</span></article>
    </div></div></section>

    <section class="section soft-section" aria-labelledby="case-publish-title"><div class="wrap"><div class="split-grid"><article class="info-panel"><div class="eyebrow">发布前确认</div><h3 id="case-publish-title">案例能否公开，需要客户授权。</h3><ul class="check-list"><li>确认客户名称、Logo、截图和项目链接是否可公开。</li><li>涉及生产、财务和客户数据时先脱敏。</li><li>管理员账号、密码和真实业务数据不写入网站。</li></ul></article><article class="info-panel"><div class="eyebrow">详情页结构</div><h3>每个案例都按同一套信息展开。</h3><ul class="check-list"><li>项目背景：客户遇到什么业务问题。</li><li>实施内容：做了哪些模块和技术工作。</li><li>交付结果：周期、上线状态和可验证证据。</li></ul></article></div></div></section>

    <section class="contact-section" id="contact"><div class="wrap"><div class="contact-panel"><div><h2>如果你有类似的生产、财务或业务管理系统需求，可以直接沟通。</h2><p>我会先了解现有流程，再判断适合的系统范围和交付方式。</p></div><RouterLink class="btn dark" to="/contact">发起需求评估</RouterLink></div></div></section>
    <SiteFooter text="小肥羊开发工作室 · 项目案例" />
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
