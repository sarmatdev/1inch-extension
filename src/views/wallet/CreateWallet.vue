<template>
  <component @nextStep="nextStep" :is="currentStep"> </component>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import WordList from '@/components/common/WordList.vue'
import CreateMnemonic from '@/components/common/CreateWallet/CreateMnemonic.vue'
import ConfirmMnemonic from '@/components/common/CreateWallet/ConfirmMnemonic.vue'

export default defineComponent({
  name: 'Create wallet',
  components: {
    WordList,
    ConfirmMnemonic,
    CreateMnemonic
  },
  setup() {
    const step = ref(1)

    const currentStep = computed(() =>
      step.value === 1 ? 'CreateMnemonic' : 'ConfirmMnemonic'
    )

    const agree = ref(false)
    const walletName = ref('')
    const mnemonicForConfirm = ref('')

    function nextStep(value) {
      step.value = value
    }

    return {
      step,
      agree,
      walletName,
      nextStep,
      mnemonicForConfirm,
      currentStep
    }
  }
})
</script>

<style lang="scss">
.create-wallet {
  .mnemonic {
    height: 60%;
  }
  .agreement {
    position: fixed;
    width: 280px;
    bottom: 200px;
    background-color: #1e2129;
    z-index: 999;
  }
}
</style>
