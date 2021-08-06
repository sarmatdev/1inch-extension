<template>
  <confirm-swap-modal />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ConfirmSwapModal from '@/components/common/Swap/modal/ConfirmSwapModal.vue'

export default defineComponent({
  name: 'ConfirmSwap',
  components: { ConfirmSwapModal }
})
</script>
<style lang="scss" scoped>

</style>