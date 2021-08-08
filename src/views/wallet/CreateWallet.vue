<template>
  <component @nextStep="nextStep" :is="currentStep"> </component>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import WordList from '@/components/common/WordList.vue'
// import CreatePassword from '@/components/common/CreateWallet/CreatePassword.vue'
import CreateMnemonic from '@/components/common/CreateWallet/CreateMnemonic.vue'
import ConfirmMnemonic from '@/components/common/CreateWallet/ConfirmMnemonic.vue'

export default defineComponent({
  name: 'Create wallet',
  emits: ['nextStep'],
  components: {
    WordList,
    ConfirmMnemonic,
    CreateMnemonic
    // CreatePassword
  },
  setup() {
    const store = useStore()

    // const hasPassword = computed(() => {
    //   return store.getters['auth/hasPassword']
    // })
    const step = ref(1)
    const currentStep = computed(() => {
      switch (step.value) {
        case 1:
          return 'CreateMnemonic'
        case 2:
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
      currentStep
      // hasPassword
    }
  }
})
</script>

<style lang="scss">
.create-wallet {
  .mnemonic {
    height: 60%;
  }
}
</style>
