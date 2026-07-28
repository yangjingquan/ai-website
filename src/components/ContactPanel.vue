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
          <div class="contact-line"><span>微信号</span><strong>{{ wechat }}</strong></div>
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
  wechat: { type: String, default: 'Yizhixiaofeiyang7988' },
  phone: { type: String, default: '15566047217' },
  buttonText: { type: String, default: '立即沟通需求' }
})
</script>
