<template>
  <div>
    <token-swap-handler />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TokenSwapHandler from '../components/common/TokenSwapHandler.vue'
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'Home',
  components: { TokenSwapHandler },
  data() {
    return {
      apiNetwork: ''
    }
  },
  computed: {
    ...mapGetters({
      selectedNetwork: 'settings/selectedNetwork'
    })
  },
  watch: {}
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
