import axios from 'axios'

const baseURL = `https://balances.1inch.exchange/v1.1/${137}`

const httpClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default httpClient
