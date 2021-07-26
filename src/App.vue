<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/welcome">Welcome</router-link>
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    console.log('Hello, 1inch!🦄')
  }
})
</script>

<style lang="scss">
body {
  width: 100vw;
  min-width: 300px;
  height: 100vh;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #617ba3;
  overflow: hidden;
  padding: 10px;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5;
  width: 300px;
  height: 600px;
  background-color: #1e2129;
  box-shadow: 0px 5px 15px #27262633;
}

#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #617ba3;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
