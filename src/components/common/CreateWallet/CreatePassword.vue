<template>
  <section class="create__password">
    <h1 class="create__password__header">Create Password</h1>
    <base-input
      class="create__password__input"
      v-model="password"
      label="Password"
      placeholder="Min. 8 characters"
    ></base-input>
    <base-input
      class="create__password__input"
      v-model="passwordConfirm"
      label="Password confirm"
      placeholder="Min. 8 characters"
    ></base-input>

    <base-button @click="nextStep" class="create__password__button"
      >Create Password</base-button
    >
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'CreatePasword',
  emits: ['nextStep'],
  setup(_, { emit }) {
    const store = useStore()
    const password = ref('')
    const passwordConfirm = ref('')

    function nextStep() {
      if (
        password.value.length >= 8 &&
        password.value === passwordConfirm.value
      ) {
        store.dispatch('auth/storePassword', password.value)
        emit('nextStep', 2)
      }
    }

    return {
      store,
      password,
      passwordConfirm,
      nextStep
    }
  }
})
</script>

<style lang="scss" scoped>
.create__password {
  @apply text-center grid grid-cols-1 gap-y-6;
  &__input,
  &__button {
    @apply w-full;
  }
}
</style>
