<template>
  <div class="swap">
    <token-swap-handler
      @tokenAmountChange="InputAmount"
      @tokenAddressChange="InputToken"
    ></token-swap-handler>
    <token-swap-handler
      @tokenAddressChange="OutAddress"
      :TokenOutAmount="OutAmount"
    ></token-swap-handler>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watchEffect } from 'vue'
import TokenSwapHandler from '@/components/common/TokenSwapHandler.vue'
import { getQuote } from '@/api/quote.api'
import { toSendFormated, toShowFormated } from '@/composables/useNumbers'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'SwapPair',
  components: {
    TokenSwapHandler
  },
  props: {},
  setup() {
    const InputToken = computed((token) => {
      console.log(token)
      return token
    })

    const InputAddress = computed((token) => {
      if (!token) {
        return '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
      }

      return token.address
    })
    const InputAmount = computed(() => {
      return toSendFormated(1, 16)
    })

    const OutAddress = computed((token) => {
      if (!token) {
        return '0x111111111117dc0aa78b770fa6a738034120c302'
      }

      return token.address
    })

    let OutAmount = ref(1)
    getQuote(InputAddress.value, OutAddress.value, InputAmount.value).then(
      (response) => (OutAmount.value = response.data.toTokenAmount)
    )
    console.log(OutAmount.value)

    return {
      InputToken,
      InputAddress,
      InputAmount,
      OutAddress,
      OutAmount
    }
  }
})
</script>
