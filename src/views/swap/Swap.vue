<template>
  <div class="relative h-full flex flex-col justify-between">
    <section>
      <TokenInput
        @handleToken="tokenInput"
        @hanldeApprove="hanldeApprove"
        @insufficientBalance="handleInputAmount"
        title="You Pay"
        :defaultTokenIdx="0"
      />
      <TokenOutput
        disabled
        class="mt-4"
        @handleToken="tokenOutput"
        :loading="quoteLoading"
        title="You Recieve"
        :defaultTokenIdx="1"
      />
    </section>
    <section class="mt-28">
      <base-button
        v-if="needApprove"
        :loading="loading"
        @click="approve"
        block
        color="gradient-pink-yellow"
        >Approve</base-button
      >
      <base-button
        v-else
        @click="modalOpen = !modalOpen"
        :loading="loading"
        :disabled="disabled || insufficientBalance"
        block
        color="gradient"
        >{{
          insufficientBalance ? 'Insufficient Balance' : 'Swap'
        }}</base-button
      >
    </section>
    <ConfirmSwapModal
      :openModal="modalOpen"
      @closeModal="(val) => (modalOpen = val)"
      :tokenIn="tokenIn"
      :tokenOut="tokenOut"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, unref } from 'vue'
import { quoteTokens, approveCalldata } from '@/services/swap'
import { IToken } from '@/types'
import sendTransaction from '@/services/transaction'
import { toHex } from '@/utils/eth-utils'
import useWeb3 from '@/services/web3/useWeb3'
import TokenInput from '@/components/common/Swap/TokenInput.vue'
import TokenOutput from '@/components/common/Swap/TokenOutput.vue'
import ConfirmSwapModal from '@/components/common/Modals/ConfirmSwapModal.vue'
import { createNotification } from '@/services/notification'

export default defineComponent({
  name: 'Home',
  components: {
    TokenInput,
    TokenOutput,
    ConfirmSwapModal
  },
  setup() {
    const { wallet } = useWeb3()
    const tokenIn = ref<IToken | any>()
    const tokenOut = ref<IToken | any>()
    const needApprove = ref(false)
    const insufficientBalance = ref(false)
    const loading = ref(false)
    const quoteLoading = ref(false)
    const disabled = ref(false)
    const modalOpen = ref(false)

    async function quote() {
      quoteLoading.value = true
      quoteTokens({
        tokenIn: unref(tokenIn.value).address,
        tokenOut: unref(tokenOut.value).address,
        amount: tokenIn.value.value.amount
      })
        .then((res) => {
          unref(tokenOut.value).amount = res.data.toTokenAmount
        })
        .finally(() => {
          quoteLoading.value = false
        })
    }

    async function getApproveData() {
      loading.value = true
      return approveCalldata(unref(tokenIn.value).address).then((res) => {
        console.log('approve', res)
        const tx = res.data
        delete tx.gasPrice
        tx.value = toHex(tx.value)

        return tx
      })
    }

    async function approve() {
      const tx = await getApproveData()

      sendTransaction({ web3: unref(wallet), tx })
        .then((data) => {
          createNotification({
            title: 'Transaction Sent',
            message: data.hash
          })
        })
        .catch((e) => {
          console.log('❌Approve', e)
        })
        .finally(() => {
          loading.value = false
        })
    }

    function tokenInput(token) {
      tokenIn.value = token
      if (unref(tokenIn.value).amount > 0) {
        quote()
      }
    }

    function tokenOutput(token) {
      tokenOut.value = token
    }

    function hanldeApprove(e) {
      needApprove.value = e.value
    }

    function handleInputAmount(e) {
      insufficientBalance.value = e.value
    }

    async function swap() {
      loading.value = true
      modalOpen.value = true
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
      modalOpen,
      quoteLoading,
      handleInputAmount,
      insufficientBalance,
      approve
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
