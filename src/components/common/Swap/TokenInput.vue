<template>
  <div class="w-full bg-back-10 rounded-lg relative">
    <div class="flex justify-between p-2 text-sm">
      <span>{{ title }}:</span>
      <p>
        <span> Balance: </span>
        <span>{{ balances.balance.toFixed(4) }} </span>
      </p>
    </div>
    <div class="flex justify-between items-center p-2">
      <Menu>
        <MenuButton
          class="
            rounded-lg
            relative
            p-1
            flex
            w-auto
            items-center
            hover:bg-back-9
          "
        >
          <img class="h-8" :src="selectedToken.logoURI" alt="" />
          <p class="ml-1">{{ selectedToken.symbol }}</p>
          <base-icon name="chevron-down" />
        </MenuButton>
        <base-icon
          v-if="needApprove"
          class="text-warning"
          name="lock"
          size="sm"
        />

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="
              absolute
              z-20
              top-24
              w-full
              h-80
              right-0
              bg-gray-800
              rounded-2xl
              overflow-scroll
            "
          >
            <MenuItem class="py-2.5 px-2.5" disabled
              ><base-input
                v-model="tokenForSearch"
                placeholder="Search by name or paste the address"
            /></MenuItem>
            <MenuItem
              v-for="token in filteredTokens"
              :key="token.name"
              @click="selectToken(token)"
            >
              <div
                class="
                  flex
                  items-center
                  justify-between
                  py-2.5
                  px-2.5
                  cursor-pointer
                  hover:bg-back-8
                "
              >
                <div class="flex">
                  <img class="h-10" :src="token.logoURI" alt="" />
                  <div class="ml-2 leading-tight">
                    <span class="font-bold text-white">{{ token.name }}</span>
                    <span class="block">32 {{ token.symbol }}</span>
                  </div>
                </div>
                <span class="font-bold text-white">$32.11</span>
              </div>
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
      <input
        class="text-right text-white text-xl w-44 bg-transparent outline-none"
        type="number"
        placeholder="0"
        v-model="amount"
        v-bind="$attrs"
        :disabled="disabled"
        @keydown="onKeydown"
      />
    </div>
    <div class="flex justify-between p-2 text-sm">
      <span>{{ selectedToken.symbol }}</span>
      <span> ~$13.41 </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import BN from 'bignumber.js'
import { IToken } from '@/types'

export default defineComponent({
  name: 'TokenInput',
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem
  },
  props: {
    title: { type: String, required: true },
    disabled: { type: Boolean }
  },
  setup(_, { emit }) {
    const store = useStore()

    const amount = ref(undefined)
    const tokens = computed(() => store.getters['swap/tokens']).value
    const selectedToken = ref({ ...tokens[0], amount: 0 })

    const tokenForSearch = ref('')
    const filteredTokens = computed(() => {
      return tokens.filter(
        (el) =>
          el.name.toLowerCase().includes(tokenForSearch.value.toLowerCase()) ||
          el.symbol.toLowerCase().includes(tokenForSearch.value.toLowerCase())
      )
    })
    const balances = computed(() =>
      store.getters['swap/balances'](selectedToken)
    )
    const needApprove = computed(() => balances.value.allowance === 0)

    function selectToken(token: IToken): void {
      selectedToken.value = token
    }

    watch(needApprove, () => {
      emit('hanldeApprove', needApprove)
    })

    watchEffect(() => {
      const amountBN = new BN(Number(amount.value)).times(
        `1e${selectedToken.value.decimals}`
      )
      selectedToken.value.amount = amountBN
      emit('handleToken', selectedToken)
    })

    return {
      tokens,
      selectedToken,
      selectToken,
      amount,
      filteredTokens,
      tokenForSearch,
      balances,
      needApprove
    }
  }
})
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
