<template>
  <div class="container text-center">
    <img alt="Vue logo" src="../assets/images/logo.png" />
    <h1 class="text-red-500">App started! To The Moon🚀🌑</h1>
    <token-input description="You Pay"></token-input>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TokenInput from '../components/common/swap/TokenInput.vue'

export default defineComponent({
  name: 'Home',
  components: { TokenInput }
})
</script>

<style></style>
