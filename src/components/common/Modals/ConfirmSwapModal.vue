<template>
  <transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="translate-y-1 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-100 ease-out"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-1 opacity-0"
  >
    <div
      v-if="modalOpen"
      class="
        absolute
        -bottom-4
        right-0
        swap
        w-full
        h-80
        bg-gray-800
        grid grid-flow-col grid-cols-1 grid-rows-4
        gap-y-2
        rounded-t-2xl
      "
    >
      <div class="swap-header flex justify-between items-center mx-2">
        <h1 class="text-center text-white text-xl flex p-2">Conrirm Swap</h1>
        <base-button circle color="gray" @click="closeModal">
          <base-icon name="x" />
        </base-button>
      </div>
      <div class="swap-main flex justify-around items-center">
        <div class="swap-from flex flex-col items-center">
          <img class="w-8 h-8 m-2" :src="tokenIn.value.logoURI" />
          <h1 class="text-word-3 text-xl">
            {{ tokenIn.name }}
          </h1>
        </div>
        <base-icon :name="'arrow-right'" :size="'xl'" class="text-word-5" />
        <div class="swap-to flex flex-col items-center">
          <img class="w-8 h-8 m-2" :src="tokenOut.value.logoURI" />
          <h1 class="text-word-3 text-xl">{{ tokenOut.name }}</h1>
        </div>
      </div>
      <div class="swap_info text-sm text-word-3 font-medium px-5">
        <ul>
          <li class="flex justify-between p-1">
            <span>You will send:</span>
            <span
              >{{
                toShowFormated(tokenIn.value.amount, tokenIn.value.decimals)
              }}
              {{ tokenIn.value.name }}</span
            >
          </li>
          <li class="flex justify-between p-1">
            <span>You will give:</span>
            <span>
              {{
                toShowFormated(tokenOut.value.amount, tokenOut.value.decimals)
              }}
              {{ tokenOut.value.name }}</span
            >
          </li>
        </ul>
      </div>
      <div class="flex justify-around items-center">
        <base-button @click="closeModal" color="red" outline
          >Cancel</base-button
        >
        <base-button
          @click="swap"
          :loading="loading"
          :disabled="amountZero"
          color="blue"
          >Confirm</base-button
        >
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed, unref } from 'vue'
import { toShowFormated, toSendFormated } from '@/composables/useNumbers'
import { swapTokens } from '@/services/swap'
import { toHex } from '@/utils/eth-utils'
import useWeb3 from '@/services/web3/useWeb3'
import { createNotification } from '@/services/notification'
import sendTransaction from '@/services/transaction'

export default defineComponent({
  name: 'SwapConfirm',
  props: {
    openModal: { type: Boolean },
    tokenIn: {
      type: Object
    },
    tokenOut: {
      type: Object
    }
  },
  setup(props, { emit }) {
    const modalOpen = ref(props.openModal)
    const loading = ref(false)
    const { wallet } = useWeb3()

    const amountZero = computed(() => {
      // @ts-ignore
      if (Number(props.tokenIn.value.amount) === 0) {
        return true
      }

      return false
    })

    function closeModal() {
      emit('closeModal', false)
    }

    function swapTx() {
      loading.value = true
      return swapTokens({
        // @ts-ignore
        fromTokenAddress: props.tokenIn.value.address,
        // @ts-ignore
        toTokenAddress: props.tokenOut.value.address,
        // @ts-ignore
        amount: props.tokenIn.value.amount,
        // @ts-ignore
        fromAddress: wallet.value.address,
        slippage: 1
      })
        .then(async (res) => {
          const tx = res.data.tx
          delete tx.gas
          delete tx.gasPrice
          tx.value = toHex(tx.value)

          return tx
        })
        .catch((e) => {
          console.log(e)
        })
    }

    async function swap() {
      const tx = await swapTx()
      console.log('tx', tx)

      sendTransaction({ web3: unref(wallet), tx })
        .then((data) => {
          console.log('✅', data)
          createNotification({
            title: 'Transaction Confirmed',
            message: data.hash
          })
        })
        .catch((e) => {
          console.log('❌', e)
        })
        .finally(() => {
          loading.value = false
        })
    }

    watch(
      () => props.openModal,
      (val) => {
        modalOpen.value = val
      }
    )
    return {
      props,
      modalOpen,
      closeModal,
      toShowFormated,
      toSendFormated,
      swap,
      amountZero,
      loading
    }
  }
})
</script>

<style></style>
