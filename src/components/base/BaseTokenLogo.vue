<template>
  <div class="icon">
    <img :src="icon" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseIcon',
  props: {
    icon: String
  }
})
</script>

<style lang="scss" scoped>
.icon {
  @apply w-8 h-8 flex justify-center items-center;
}
</style>
