<template>
  <section class="contact-section" id="contact">
    <div class="wrap">
      <div class="contact-panel">
        <div>
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
          <div class="chip-row">
            <span v-for="chip in chips" :key="chip" class="chip">{{ chip }}</span>
          </div>
        </div>
        <div class="contact-box">
          <WechatQr compact />
          <div class="contact-line"><span>手机号</span><strong>{{ phone }}</strong></div>
          <button class="btn dark" type="button">{{ buttonText }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  chips: { type: Array, default: () => [] },
  phone: { type: String, default: '18201117988' },
  buttonText: { type: String, default: '立即沟通需求' }
})

import WechatQr from './WechatQr.vue'
</script>
