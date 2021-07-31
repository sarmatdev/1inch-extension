<template>
  <Listbox v-model="selectedNetwork" v-slot="{ open }">
    <div class="network__select">
      <ListboxButton
        class="network__select__button"
        :class="[
          {
            'network__select__button--eth__active':
              selectedNetwork.name === 'Ethereum'
          },
          {
            'network__select__button--bscm__active':
              selectedNetwork.name === 'BSC Mainnet'
          },
          {
            'network__select__button--polygon__active':
              selectedNetwork.name === 'Polygon Network'
          }
        ]"
      >
        <base-icon
          class="network__select--network__icon"
          :icon="`/network-select/${selectedNetwork.icon}-selected`"
        ></base-icon>
        <base-title>{{ selectedNetwork.name }}</base-title>
        <base-icon
          class="network__select__button--btn__icon"
          :class="{ 'transform rotate-180': open }"
          icon="/network-select/arrow"
        ></base-icon>
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions class="network__select__options">
          <ListboxOption
            v-slot="{ active }"
            v-for="network in networks"
            :key="network.name"
            :value="network"
            @click="select(network)"
            as="template"
          >
            <li
              :class="[
                active ? ' bg-gray-800 text-word-3' : 'bg-gray-700 text-word-4',
                'network__select__options__item '
              ]"
            >
              <base-icon
                class="network__select--network__icon"
                :icon="`/network-select/${network.icon}`"
              ></base-icon>
              <base-title class="network__select__options__item--name">{{
                network.name
              }}</base-title>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption
} from '@headlessui/vue'

export default {
  name: 'NetworkSelect',
  components: {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption
  },
  created() {
    this.$store.commit('settings/setselectedNetwork', this.selectedNetwork.id)
  },
  data() {
    return {
      networks: [
        { name: 'Ethereum', icon: 'eth', id: '1' },
        { name: 'BSC Mainnet', icon: 'bsc', id: '56' },
        { name: 'Polygon Network', icon: 'polygon', id: '137' }
      ],
      selectedNetwork: { name: 'Ethereum', icon: 'eth', id: '1' }
    }
  },
  methods: {
    select(network) {
      this.selectedNetwork = network
      this.$store.commit('settings/setselectedNetwork', this.selectedNetwork.id)
    },
    computed: {
      ...mapGetters({
        selectedNetwork: 'settings/selectedNetwork'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.network__select {
  @apply relative mt-1 z-40 text-sm;
  &--network__icon {
    @apply w-8 h-8;
    background-color: transparent;
  }
  &__button {
    @apply px-3.5 py-2.5 rounded-2xl w-full flex justify-between items-center text-white;
    &--eth__active {
      background: linear-gradient(73.28deg, #495bfc 6.51%, #114188 88.45%);
    }
    &--bscm__active {
      background: linear-gradient(73.28deg, #403c3c 6.51%, #403721 88.45%);
    }
    &--polygon__active {
      background: linear-gradient(73.28deg, #8247e5 6.51%, #6027c0 88.45%);
    }
    &--btn__icon {
      @apply text-white ml-2.5 w-4 h-4;
    }
  }
  &__options {
    @apply absolute w-full py-1 mt-1 focus:outline-none rounded-2xl bg-gray-700;
    &__item {
      @apply flex items-center cursor-pointer select-none my-2 px-5 py-2;
      &--name {
        @apply ml-2.5 text-left;
      }
    }
  }
}
</style>
