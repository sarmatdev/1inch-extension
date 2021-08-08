<template>
  <div>
    <TokenInput
      @handleToken="tokenInput"
      @hanldeApprove="hanldeApprove"
      title="You Pay"
      v-model="AmountIn"
      @input="AmountChangeHandler"
      :defaultTokenIdx="0"
    />
    <TokenInput
      disabled
      class="mt-4"
      @handleToken="tokenOutput"
      title="You Recieve"
      :OutAmount="OutAmount"
      :defaultTokenIdx="1"
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
      :defaultTokenIdx="2"
      >swap</base-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import { swapTokens } from '@/services/swap'
import useWeb3 from '@/services/web3/useWeb3'
import { IToken } from '@/types'
import TokenInput from '@/components/common/Swap/TokenInput.vue'
import { getQuote } from '@/api/quote.api'
import { toShowFormated, toSendFormated } from '@/composables/useNumbers'
export default defineComponent({
  name: 'Home',
  components: {
    TokenInput
  },
  setup() {
    const { wallet } = useWeb3()

    const AmountIn = ref(0)
    const tokenIn = ref<IToken | any>()
    const tokenOut = ref<IToken | any>()
    const needApprove = ref(false)
    const loading = ref(false)
    const disabled = ref(false)
    let OutAmount = ref(0)

    function tokenInput(token) {
      tokenIn.value = token
      if (OutAmount.value) {
        AmountChangeHandler()
      }
    }

    function tokenOutput(token) {
      tokenOut.value = token
      if (OutAmount.value) {
        AmountChangeHandler()
      }
    }

    function hanldeApprove(e) {
      needApprove.value = e.value
    }

    function hanldeOutAmount(amount) {
      OutAmount.value = amount
      // console.log(OutAmount.value)
    }

    function AmountChangeHandler() {
      if (AmountIn.value) {
        getQuote(
          tokenIn.value.value.address,
          tokenOut.value.value.address,
          toSendFormated(AmountIn.value, tokenIn.value.value.decimals)
        ).then((response) =>
          hanldeOutAmount(
            toShowFormated(
              response.data.toTokenAmount,
              tokenOut.value.value.decimals
            )
          )
        )
      }
    }

    // watchEffect(() => {
    //   AmountChangeHandler()
    // })

    // const sendOut = computed(() => {
    //   return toShowFormated(OutAmount.value, tokenOut.value.value.decimals)
    // }).value
    // //@ts-ignore

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
      disabled,
      AmountIn,
      OutAmount,
      // sendOut,
      AmountChangeHandler,
      hanldeOutAmount
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
