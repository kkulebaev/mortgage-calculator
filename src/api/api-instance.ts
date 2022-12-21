import axios from 'axios'

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

export { apiInstance }
