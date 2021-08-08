<template>
  <div class="icon">
    <img :src="require(`@/assets/icons${icon}.${type}`)" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseLogo',
  props: {
    icon: { type: String },
    type: { type: String, default: 'png' }
  }
})
</script>

<style lang="scss" scoped>
.icon {
  @apply flex justify-center items-center;
}
</style>
