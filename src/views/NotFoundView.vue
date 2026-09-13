<template>
  <main class="site not-found-page" id="site" tabindex="-1">
    <div class="wrap">
      <SiteNav />
      <section class="not-found-content" aria-labelledby="not-found-title">
        <div class="not-found-code">404</div>
        <div class="eyebrow">页面不存在</div>
        <h1 id="not-found-title">这个页面暂时不存在。</h1>
        <p>页面可能已移动、链接输入有误，或者还在准备中。你可以返回首页，查看服务方案，或直接发起需求评估。</p>
        <div class="hero-actions">
          <RouterLink class="btn primary" to="/">返回首页</RouterLink>
          <RouterLink class="btn secondary" to="/product-solution">查看服务方案</RouterLink>
          <RouterLink class="btn ghost" to="/contact">联系我</RouterLink>
        </div>
      </section>
    </div>
    <SiteFooter text="纳启字节信息技术工作室 · 页面导航与服务介绍" />
  </main>
</template>

<script setup>
import SiteNav from '../components/SiteNav.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>
