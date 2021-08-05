<template>
  <div>
    <token-swap-handler />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { swapTokens } from '@/services/swap'
import TokenSwapHandler from '../components/common/TokenSwapHandler.vue'
import useWeb3 from '@/services/web3/useWeb3'
import { TokenInput } from '@/types'

export default defineComponent({
  name: 'Home',
  components: { TokenSwapHandler },
  setup() {
    const { wallet } = useWeb3()

    let tokenIn = ref<TokenInput | any>()
    let tokenOut = ref<TokenInput | any>()
    let amount = ref('0')
    let loading = ref(false)

    async function swap() {
      loading.value = true

      swapTokens({
        fromTokenAddress: tokenIn.value.address,
        toTokenAddress: tokenOut.value.address,
        amount,
        fromAddress: wallet.value.address,
        slippage: 1
      })
        .then(async (res) => {
          console.log(res.data.tx)
        })
        .catch((e) => {
          console.log(e)
        })
        .finally(() => {
          loading.value = false
        })
    }

    function handleTokenIn(value) {
      tokenIn.value = value
    }

    function handleTokenOut(value) {
      tokenOut.value = value
    }

    function handleAmount(val) {
      amount.value = val.toString()
    }

    return {
      swap,
      tokenIn,
      tokenOut,
      loading,
      handleTokenIn,
      handleTokenOut,
      handleAmount,
      amount
    }
  }
})
</script>

<style lang="scss" scoped>
.swap__page--container {
  @apply h-full flex flex-col;
  &--item {
    @apply first:my-10;
  }
}
</style>
