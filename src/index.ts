import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerBaseComponents } from './helpers/registerBaseComponents'
import loadPlugins from './helpers/loadPlugins'
import './styles/tailwind.css'
import Web3Plugin from '@/services/web3/web3.plugin'
import { Web3Provider } from '@ethersproject/providers'

export const app = createApp(App)

// Register base components
registerBaseComponents(app)

// Register plugins
loadPlugins(['bigNumber'])

document.addEventListener('DOMContentLoaded', () => {
  app.use(store).use(router).use(Web3Plugin, Web3Provider).mount('#app')
})
