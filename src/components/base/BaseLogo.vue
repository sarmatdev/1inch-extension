<template>
  <div class="icon">
    <img :src="require(`@/icons/${icon}.png`)" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseLogo',
  props: {
    icon: String
  }
})
</script>

<style lang="scss" scoped>
.icon {
  @apply flex justify-center items-center;
}
</style>
