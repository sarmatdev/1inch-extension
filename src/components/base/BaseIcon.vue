<template>
  <div class="icon">
    <img :src="require(`@/assets/icons/${icon}.svg`)" alt="" />
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

<style lang="scss"></style>
