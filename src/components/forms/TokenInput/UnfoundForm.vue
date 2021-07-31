<template>
  <div class="token__input--unfound__field">
    <base-icon
      class="token__input--unfound__field--icon"
      icon="/token-input/coins"
    ></base-icon>
    <base-title class="token__input--unfound__field--text">
      <base-wrapper>
        <p>Nothing found.</p>
        <p>Use Custom token feature.</p>
      </base-wrapper>
    </base-title>
    <token-button-form
      @click="openModal()"
      class="token__input--unfound__field--btn"
    >
      Add Token
    </token-button-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TokenButtonForm from './TokenButtonForm.vue'

export default defineComponent({
  name: 'UnfoundForm',
  components: { TokenButtonForm },
  data() {
    return {}
  },
  methods: {
    openModal() {
      this.$emit('ModalOpenEvent')
    }
  }
})
</script>

<style lang="scss" scoped>
.token__input--unfound__field {
  @apply flex flex-col;
  &--icon {
    @apply w-32 h-32 mx-auto;
  }
  &--text {
    @apply text-word-5 text-sm;
  }
  &--btn {
    @apply my-5 mx-10;
  }
}
</style>
