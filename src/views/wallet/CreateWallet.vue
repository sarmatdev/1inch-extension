<template>
  <component @nextStep="nextStep" :is="currentStep"> </component>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import WordList from '@/components/common/WordList.vue'
import CreatePassword from '@/components/common/CreateWallet/CreatePassword.vue'
import CreateMnemonic from '@/components/common/CreateWallet/CreateMnemonic.vue'
import ConfirmMnemonic from '@/components/common/CreateWallet/ConfirmMnemonic.vue'

export default defineComponent({
  name: 'Create wallet',
  emits: ['nextStep'],
  components: {
    WordList,
    ConfirmMnemonic,
    CreateMnemonic,
    CreatePassword
  },
  setup() {
    const store = useStore()

    const hasPassword = computed(() => {
      return store.getters['auth/hasPassword']
    })
    const step = ref(hasPassword.value ? 2 : 1)
    const currentStep = computed(() => {
      switch (step.value) {
        case 1:
          return 'CreatePassword'
        case 2:
          return 'CreateMnemonic'
        case 3:
          return 'ConfirmMnemonic'
        default:
          return 'CreateMnemonic'
      }
    })

    const agree = ref(false)
    const mnemonicForConfirm = ref('')

    function nextStep(value: number): void {
      step.value = value
    }

    return {
      store,
      step,
      agree,
      nextStep,
      mnemonicForConfirm,
      currentStep,
      hasPassword
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
