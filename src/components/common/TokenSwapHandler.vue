<template>
  <div class="token__input">
    <custom-token-input-form
      v-if="modalShowStatus"
      class="testModal fixed inset-0 z-50"
      @ModalCloseEvent="closeModal()"
    ></custom-token-input-form>
    <template v-if="!modalShowStatus">
      <div
        v-if="tokenPassMode === 'input'"
        class="token__input--description__field"
      >
        <description-form>You Pay</description-form>
        <description-form>Balance:{{ wallet }}</description-form>
      </div>
      <div
        v-if="tokenPassMode === 'output'"
        class="token__input--description__field"
      >
        <description-form>You Receive</description-form>
      </div>
      <Menu>
        <div class="token__input__header">
          <template class="token__input__header--item">
            <label-form class="token__input__header--item--name">
              {{ selectedTicker.name }}
            </label-form>
            <label-form class="token__input__header--item--price">
              ~${{ selectedTicker.price }}
            </label-form>
          </template>
          <template class="token__input__header--item">
            <MenuButton>
              <button-form :buttonIcon="selectedTicker.icon">
                {{ selectedTicker.symbol }}
              </button-form>
            </MenuButton>
            <amount-pass-form
              v-if="tokenPassMode === 'input'"
              v-model="token"
              placeholder="0.0"
              passMode="input"
            ></amount-pass-form>
            <amount-pass-form
              v-if="tokenPassMode === 'output'"
              passMode="output"
            >
              {{ secondToken }}
            </amount-pass-form>
          </template>
        </div>
        <MenuItems>
          <div
            :class="{ 'overflow-y-scroll h-64': filteredTickers().length > 3 }"
            class="token__input__items"
          >
            <div class="token__input__items--container">
              <template v-if="!modalShowStatus">
                <MenuItem disabled>
                  <search-input-form
                    v-model="ticker"
                    searchIcon="/input-btn/search"
                    placeholder='Try "Dai"'
                  ></search-input-form>
                </MenuItem>
                <MenuItem
                  v-for="ticker in filteredTickers()"
                  :key="ticker.index"
                >
                  <ticker-form
                    @click="select(ticker)"
                    :tickerIcon="ticker.icon"
                  >
                    <template v-slot:name> {{ ticker.name }} </template>
                    <template v-slot:symbol> {{ ticker.symbol }} </template>
                    <template v-slot:token> {{ ticker.token }} </template>
                    <template v-slot:price> =${{ ticker.price }} </template>
                  </ticker-form>
                </MenuItem>
                <MenuItem
                  disabled
                  class="token__input--unfound__field"
                  as="div"
                  v-if="!filteredTickers().length"
                >
                  <unfound-form @ModalOpenEvent="openModal()"></unfound-form>
                </MenuItem>
              </template>
            </div>
          </div>
        </MenuItems>
      </Menu>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import TickerForm from '../forms/TokenInput/TickerForm.vue'
import SearchInputForm from '../forms/TokenInput/SearchInputForm.vue'
import AmountPassForm from '../forms/TokenInput/AmountPassForm.vue'
import ButtonForm from '../forms/TokenInput/ButtonForm.vue'
import LabelForm from '../forms/TokenInput/LabelForm.vue'
import DescriptionForm from '../forms/TokenInput/DescriptionForm.vue'
import UnfoundForm from '../forms/TokenInput/UnfoundForm.vue'
import CustomTokenInputForm from '../forms/TokenInput/CustomTokenInputForm.vue'

export default defineComponent({
  name: 'TokenSwapHandler',
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    SearchInputForm,
    TickerForm,
    AmountPassForm,
    ButtonForm,
    LabelForm,
    DescriptionForm,
    UnfoundForm,
    CustomTokenInputForm
  },

  data() {
    return {
      modalShowStatus: false,
      token: '',
      ticker: '',
      //=============== Testing data =================
      secondToken: '123',
      wallet: '1.0091',
      selectedTicker: {
        index: 0,
        name: 'Etherium',
        symbol: 'ETC',
        token: '00.2',
        price: '33345',
        icon: '/network-select/eth'
      },
      tickers: [
        {
          index: 0,
          name: 'Etherium',
          symbol: 'ETC',
          token: '00.2',
          price: '33345',
          icon: '/network-select/eth'
        },
        {
          index: 1,
          name: 'Etherium',
          symbol: 'ETC',
          token: '00.2',
          price: '33345',
          icon: '/network-select/eth'
        },
        {
          index: 2,
          name: 'Bitcoin',
          symbol: 'BTC',
          token: '00.2',
          price: '33345',
          icon: '/network-select/eth'
        },
        {
          index: 3,
          name: 'DogeCoin',
          symbol: 'DOGE',
          token: '1.2',
          price: '12.23',
          icon: '/network-select/eth'
        },
        {
          index: 4,
          name: 'DAI StaibleCoin',
          symbol: 'DAI',
          token: '23.22',
          price: '3.345',
          icon: '/network-select/eth'
        },
        {
          index: 5,
          name: 'DAI StaibleCoin',
          symbol: 'DAI',
          token: '23.22',
          price: '3.345',
          icon: '/network-select/eth'
        },
        {
          index: 6,
          name: 'DAI StaibleCoin',
          symbol: 'DAI',
          token: '23.22',
          price: '3.345',
          icon: '/network-select/eth'
        },
        {
          index: 7,
          name: 'DAI StaibleCoin',
          symbol: 'DAI',
          token: '23.22',
          price: '3.345',
          icon: '/network-select/eth'
        },
        {
          index: 8,
          name: 'DAI StaibleCoin',
          symbol: 'DAI',
          token: '23.22',
          price: '3.345',
          icon: '/network-select/eth'
        },
        {
          index: 9,
          name: 'DAI StaibleCoin',
          symbol: 'DAI',
          token: '23.22',
          price: '3.345',
          icon: '/network-select/eth'
        },
        {
          index: 10,
          name: 'DAI StaibleCoin',
          symbol: 'DAI',
          token: '23.22',
          price: '3.345',
          icon: '/network-select/eth'
        },
        {
          index: 11,
          name: 'DAI StaibleCoin',
          symbol: 'DAI',
          token: '23.22',
          price: '3.345',
          icon: '/network-select/eth'
        }
      ]
      //=========================================
    }
  },
  props: {
    tokenPassMode: {
      type: String,
      default: 'input',
      validator: (value: string) => ['input', 'output'].includes(value)
    }
  },
  methods: {
    select(ticker) {
      this.selectedTicker = ticker
    },
    filteredTickers() {
      return this.tickers.filter(
        (el) =>
          el.name.toUpperCase().includes(this.ticker.toUpperCase()) ||
          el.symbol.toUpperCase().includes(this.ticker.toUpperCase())
      )
    },
    closeModal() {
      this.modalShowStatus = false
    },
    openModal() {
      this.modalShowStatus = true
    }
  }
})
</script>

<style lang="scss" scoped>
.token__input {
  @apply relative;
  &--description__field {
    @apply flex justify-between items-center;
  }
  &__header {
    @apply relative p-2.5 z-0 w-full border-0 border-solid rounded-2xl bg-black;
    &--item {
      @apply flex
            justify-between
            items-center;
      &--name {
        @apply text-left;
      }
      &--price {
        @apply text-right;
      }
    }
  }
  &__items {
    @apply absolute z-20 py-2.5 px-2.5 top-6 w-full bg-gray-800 rounded-2xl;
    &--container {
      @apply grid gap-y-2 grid-cols-1;
    }
    /* Custom Scrollbar */
    &::-webkit-scrollbar {
      @apply w-1;
    }
    &::-webkit-scrollbar-track {
      @apply bg-transparent;
    }
    &::-webkit-scrollbar-thumb {
      @apply bg-gray-500 rounded-sm;
    }
  }
}
</style>
