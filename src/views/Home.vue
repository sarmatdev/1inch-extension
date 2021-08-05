<template>
  <div>
    <TokenInput
      @handleToken="tokenInput"
      @hanldeApprove="hanldeApprove"
      title="You Pay"
    />
    <TokenInput
      disabled
      class="mt-4"
      @handleToken="tokenOutput"
      title="You Recieve"
    />
    <base-button v-if="needApprove" class="mt-8" block color="gradient"
      >Approve</base-button
    >
    <base-button
      v-else
      @click="swap"
      :loading="loading"
      class="mt-8"
      block
      color="gradient"
      >swap</base-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { swapTokens } from '@/services/swap'
import useWeb3 from '@/services/web3/useWeb3'
import { IToken } from '@/types'
import TokenInput from '@/components/common/Swap/TokenInput.vue'
export default defineComponent({
  name: 'Home',
  components: {
    TokenInput
  },
  setup() {
    const { wallet } = useWeb3()

    const tokenIn = ref<IToken | any>()
    const tokenOut = ref<IToken | any>()
    const needApprove = ref(false)
    const loading = ref(false)
    const disabled = ref(false)

    function tokenInput(token) {
      tokenIn.value = token
    }

    function tokenOutput(token) {
      tokenOut.value = token
    }

    function hanldeApprove(e) {
      needApprove.value = e.value
    }

    async function swap() {
      loading.value = true

      swapTokens({
        fromTokenAddress: tokenIn.value.value.address,
        toTokenAddress: tokenOut.value.value.address,
        amount: tokenIn.value.value.amount,
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

    return {
      tokenIn,
      tokenOut,
      loading,
      tokenInput,
      tokenOutput,
      swap,
      hanldeApprove,
      needApprove,
      disabled
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
