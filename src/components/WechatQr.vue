<template>
  <figure class="wechat-qr" :class="{ 'wechat-qr--compact': compact }">
    <div class="wechat-qr__frame">
      <span class="wechat-qr__corner wechat-qr__corner--tl" aria-hidden="true"></span>
      <span class="wechat-qr__corner wechat-qr__corner--tr" aria-hidden="true"></span>
      <img src="/wechat-qr.png" alt="微信二维码，扫码添加微信" loading="lazy">
      <span class="wechat-qr__corner wechat-qr__corner--bl" aria-hidden="true"></span>
      <span class="wechat-qr__corner wechat-qr__corner--br" aria-hidden="true"></span>
    </div>
    <figcaption>
      <strong>扫码添加微信</strong>
      <span>{{ hint }}</span>
    </figcaption>
  </figure>
</template>

<script setup>
defineProps({
  compact: { type: Boolean, default: false },
  hint: { type: String, default: '备注：项目咨询' }
})
</script>
