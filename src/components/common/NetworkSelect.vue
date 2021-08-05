<template>
  <Listbox v-model="selectedNetwork" v-slot="{ open }">
    <div class="relative mt-1 z-40 text-sm">
      <ListboxButton
        class="
          px-3.5
          py-2.5
          rounded-2xl
          w-full
          flex
          justify-between
          items-center
          text-white
        "
        :class="[
          {
            active_eth: selectedNetwork.id === 1
          },
          {
            active_bsc: selectedNetwork.id === 56
          },
          {
            active_polygon: selectedNetwork.id === 137
          }
        ]"
      >
        <base-logo
          class="w-8 h-8"
          type="svg"
          :icon="`/network-select/${selectedNetwork.icon}-selected`"
        />
        {{ selectedNetwork.name }}

        <base-icon
          name="chevron-down"
          class="text-white ml-2.5 w-4 h-4"
          :class="{ 'transform rotate-180': open }"
        />
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="
            absolute
            -left-8
            py-2
            mt-1
            focus:outline-none
            rounded-2xl
            bg-gray-700
          "
        >
          <ListboxOption
            v-for="network in networks"
            :key="network.name"
            :value="network"
            @click="select(network)"
            as="template"
          >
            <li
              :class="[
                selectedNetwork.id === network.id
                  ? ' bg-gray-800 text-word-3'
                  : 'bg-gray-700 text-word-4',
                'flex items-center cursor-pointer select-none my-2 px-5 py-2 '
              ]"
            >
              <base-logo
                class="w-8 h-8"
                type="svg"
                :icon="`/network-select/${network.icon}`"
              />
              <base-title class="ml-2.5 text-left">{{
                network.name
              }}</base-title>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption
} from '@headlessui/vue'
import { useStore } from 'vuex'
import useRefreshApi from '@/composables/useRefreshApi'

export default defineComponent({
  name: 'NetworkSelect',
  components: {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption
  },
  setup() {
    const store = useStore()
    let selectedNetwork = reactive({
      name: 'Ethereum',
      icon: 'eth',
      id: 1
    })
    store.commit('settings/setSelectedNetwork', selectedNetwork.id)

    const networks = ref([
      { name: 'Ethereum', icon: 'eth', id: 1 },
      { name: 'BSC Mainnet', icon: 'bsc', id: 56 },
      { name: 'Polygon Network', icon: 'polygon', id: 137 }
    ])

    function select(network) {
      selectedNetwork = network
      store.commit('settings/setSelectedNetwork', selectedNetwork.id)
    }

    return {
      selectedNetwork,
      networks,
      select
    }
  }
})
</script>

<style lang="scss" scoped>
.active {
  &_eth {
    background: linear-gradient(73.28deg, #495bfc 6.51%, #114188 88.45%);
  }
  &_bsc {
    background: linear-gradient(73.28deg, #403c3c 6.51%, #403721 88.45%);
  }
  &_polygon {
    background: linear-gradient(73.28deg, #8247e5 6.51%, #6027c0 88.45%);
  }
}
</style>
