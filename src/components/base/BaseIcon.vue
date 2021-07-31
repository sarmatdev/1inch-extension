<template>
  <div class="icon">
    <img :src="require(`@/assets/icons${icon}.${iconType}`)" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseIcon',
  props: {
    icon: String,
    iconType: {
      type: String,
      default: 'svg'
    }
  }
})
</script>

<style lang="scss" scoped>
.icon {
  @apply flex justify-center items-center;
}
</style>
