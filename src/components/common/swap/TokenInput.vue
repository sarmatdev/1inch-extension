<template>
  <div class="token__input">
    <div class="token__input__description--field">
      <description-form>{{ description }}</description-form>
      <description-form>Balance:{{ wallet }}</description-form>
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
            <button-form :icon="`${selectedTicker.icon}`">
              {{ selectedTicker.symbol }}
            </button-form>
          </MenuButton>
          <amount-input-form
            v-model="token"
            placeholder="0.0"
          ></amount-input-form>
        </template>
      </div>
      <MenuItems>
        <div class="token__input__items">
          <div class="token__input__items--container">
            <MenuItem disabled>
              <search-input-form
                v-model="ticker"
                placeholder='Try "Dai"'
              ></search-input-form>
            </MenuItem>
            <MenuItem v-for="ticker in filteredTickers()" :key="ticker.index">
              <ticker-form @click="select(ticker)" :icon="`${ticker.icon}`">
                <template v-slot:name> {{ ticker.name }} </template>
                <template v-slot:symbol> {{ ticker.symbol }} </template>
                <template v-slot:token> {{ ticker.token }} </template>
                <template v-slot:price> =${{ ticker.price }} </template>
              </ticker-form>
            </MenuItem>
          </div>
        </div>
      </MenuItems>
    </Menu>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import TickerForm from '../../forms/TokenInput/TickerForm.vue'
import SearchInputForm from '../../forms/TokenInput/SearchInputForm.vue'
import AmountInputForm from '../../forms/TokenInput/AmountInputForm.vue'
import ButtonForm from '../../forms/TokenInput/ButtonForm.vue'
import LabelForm from '../../forms/TokenInput/LabelForm.vue'
import DescriptionForm from '../../forms/TokenInput/DescriptionForm.vue'

export default {
  name: 'TokenInput',
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    SearchInputForm,
    TickerForm,
    AmountInputForm,
    ButtonForm,
    LabelForm,
    DescriptionForm
  },

  data() {
    return {
      token: '',
      ticker: '',
      //=============== Testing data =================
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
          index: 0,
          name: 'Bitcoin',
          symbol: 'BTC',
          token: '00.2',
          price: '33345',
          icon: '/network-select/eth'
        },
        {
          index: 1,
          name: 'DogeCoin',
          symbol: 'DOGE',
          token: '1.2',
          price: '12.23',
          icon: '/network-select/eth'
        },
        {
          index: 2,
          name: 'DAI StaibleCoin',
          symbol: 'DAI',
          token: '23.22',
          price: '3.345',
          icon: '/network-select/eth'
        },
        {
          index: 2,
          name: 'DAI StaibleCoin',
          symbol: 'DAI',
          token: '23.22',
          price: '3.345',
          icon: '/network-select/eth'
        },
        {
          index: 2,
          name: 'DAI StaibleCoin',
          symbol: 'DAI',
          token: '23.22',
          price: '3.345',
          icon: '/network-select/eth'
        },
        {
          index: 2,
          name: 'DAI StaibleCoin',
          symbol: 'DAI',
          token: '23.22',
          price: '3.345',
          icon: '/network-select/eth'
        },
        {
          index: 2,
          name: 'DAI StaibleCoin',
          symbol: 'DAI',
          token: '23.22',
          price: '3.345',
          icon: '/network-select/eth'
        },
        {
          index: 2,
          name: 'DAI StaibleCoin',
          symbol: 'DAI',
          token: '23.22',
          price: '3.345',
          icon: '/network-select/eth'
        },
        {
          index: 2,
          name: 'DAI StaibleCoin',
          symbol: 'DAI',
          token: '23.22',
          price: '3.345',
          icon: '/network-select/eth'
        },
        {
          index: 2,
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
    description: String
  },
  methods: {
    select(ticker) {
      this.selectedTicker = ticker
    },
    filteredTickers() {
      return this.tickers.filter(
        (el) =>
          el.name.toUpperCase().includes(this.ticker.trim().toUpperCase()) ||
          el.symbol.toUpperCase().includes(this.ticker.trim().toUpperCase())
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.token__input {
  @apply relative;
  &__description--field {
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
    @apply absolute
          w-full
          top-6
          z-50
          bg-gray-800
          rounded-2xl
          py-2.5
          px-2.5
          h-64
          overflow-y-scroll;
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
