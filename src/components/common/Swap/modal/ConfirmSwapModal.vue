<template>
  <div
    class="
      swap
      w-full
      p-1
      bg-gray-800
      grid grid-flow-col grid-cols-1 grid-rows-5
      gap-y-2
      rounded-t-2xl
    "
  >
    <div class="swap-header flex justify-between items-center mx-6">
      <h1 class="text-center text-white text-xl flex p-2">{{ Title }}</h1>
      <button @click="modalClose" class="text-3xl transform rotate-45 p-0.5">
        +
      </button>
    </div>
    <div class="swap-main flex justify-around items-center">
      <div class="swap-from flex flex-col items-center">
        <img class="w-8 h-8 m-2" :src="FromToken.logoURI" />
        <h1 class="text-word-3 text-xl">
          {{ FromTokenAmount }} {{ FromToken.name }}
        </h1>
      </div>
      <base-icon :name="'arrow-right'" :size="'xl'" class="text-word-5" />
      <div class="swap-to flex flex-col items-center">
        <img class="w-8 h-8 m-2" :src="ToToken.logoURI" />
        <h1 class="text-word-3 text-xl">
          {{ ToTokenAmount }} {{ ToToken.name }}
        </h1>
      </div>
    </div>
    <div class="swap_description flex justify-around items-center mx-8">
      <div class="description-from text-left py-2 bg-gray-700 px-2 rounded-xl">
        <h1 class="text-sm text-word-3">From</h1>
        <!-- ? add copy for click -->
        <span class="text-word-5 text-left cursor-pointer hover:underline"
          >{{ FromToken.address.slice(0, 5) }}...{{
            FromToken.address.slice(-5)
          }}</span
        >
      </div>
      <base-icon :name="'arrow-right'" :size="'sm'" class="text-word-5" />
      <div class="description-to text-right py-2 bg-gray-700 px-2 rounded-xl">
        <h1 class="text-sm text-word-3">To</h1>
        <!-- ? add copy for click -->
        <span class="text-word-5 text-left cursor-pointer hover:underline"
          >{{ ToToken.address.slice(0, 5) }}...{{
            ToToken.address.slice(-5)
          }}</span
        >
      </div>
    </div>
    <div class="swap_info text-sm text-word-3 font-medium px-5">
      <ul>
        <li class="flex justify-between p-1">
          <span>You will send:</span>
          <span>{{ FromToken.amount }} {{ FromToken.name }}</span>
        </li>
        <li class="flex justify-between p-1">
          <span>You will give:</span>
          <span>{{ ToToken.amount }} {{ ToToken.name }}</span>
        </li>
      </ul>
    </div>
    <div class="flex justify-around items-center">
      <base-button color="blue" size="xl">Cancel</base-button>
      <base-button color="blue" size="xl">Confirm</base-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'SwapConfirm',
  props: {
    FromToken: {
      type: Object,
      default: function () {
        return {
          symbol: 'CTSI',
          name: 'Cartesi',
          decimals: 18,
          address: '0x491604c0fdf08347dd1fa4ee062a822a5dd06b5d',
          logoURI:
            'https://tokens.1inch.exchange/0x491604c0fdf08347dd1fa4ee062a822a5dd06b5d.png',
          amount: 1.0
        }
      }
    },
    ToToken: {
      type: Object,
      default: function () {
        return {
          symbol: 'CTSI',
          name: 'Cartesi',
          decimals: 18,
          address: '0x491604c0fdf08347dd1fa4ee062a822a5dd06b5d',
          logoURI:
            'https://tokens.1inch.exchange/0x491604c0fdf08347dd1fa4ee062a822a5dd06b5d.png',
          amount: 1.0
        }
      }
    }
  },
  setup() {
    const Title = ref('Confirm Transaction')
    return {
      Title
    }
  }
})
</script>