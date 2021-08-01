import axios from 'axios'

const baseURL = `https://api.1inch.exchange/v3.0/${1}`

const httpClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default httpClient
