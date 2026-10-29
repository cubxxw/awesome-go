<script setup lang="ts">
import DefaultLayout from "@vuepress/theme-default/layouts/Layout.vue";
</script>

<template>
  <DefaultLayout>
    <template #page-bottom>
      <section class="legacy-comments" aria-label="评论状态">
        <h2>历史评论</h2>
        <p>评论暂不可用。原讨论归属尚未核实，恢复后会保留原有讨论记录。</p>
      </section>
    </template>
  </DefaultLayout>
</template>

<style scoped>
.legacy-comments { max-width: var(--content-width); margin: 2rem auto 0; padding: 0 2rem; }
h2 { font-size: 1.1rem; }
p { color: var(--vp-c-text-mute); }
</style>
