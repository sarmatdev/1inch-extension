import axios from 'axios'
import store from '@/store'

const networkId = store.getters['settings/selectedNetwork'];

const baseURL = `https://api.1inch.exchange/v3.0/${networkId}`;

const httpClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default httpClient