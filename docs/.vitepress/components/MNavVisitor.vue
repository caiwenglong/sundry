<script setup lang="ts">
import type { Ref } from 'vue'
import { inject } from 'vue'

const DEV = inject('DEV') as Ref<boolean>
</script>

<template>
  <img
    class="visitor"
    src="https://visitor-badge.laobi.icu/badge?page_id=caiwenglong.CRM"
    onerror="this.style.display='none'"
  />
</template>

<style scoped>
.visitor {
  margin-left: 8px;
}
@media (min-width: 768px) and (max-width: 920px) {
  .visitor {
    display: none;
  }
}
</style>
