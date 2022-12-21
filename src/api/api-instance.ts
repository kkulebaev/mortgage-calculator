import axios from 'axios'

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_URL + import.meta.env.VITE_API_PORT,
})

export { apiInstance }
