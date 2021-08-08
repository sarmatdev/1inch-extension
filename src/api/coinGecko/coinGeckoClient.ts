import axios from 'axios'

const baseURL = 'https://api.coingecko.com/api/v3/coins'

const coinGeckoClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default coinGeckoClient
