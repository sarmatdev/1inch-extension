import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerBaseComponents } from './helpers/registerBaseComponents'
import './styles/tailwind.css'

export const app = createApp(App)

// Register base components
registerBaseComponents(app)

document.addEventListener('DOMContentLoaded', () => {
  app.use(store).use(router).mount('#app')
})
