import { apiInstance } from './api-instance'
import { calculateAPI } from './services/calculate'

const apiClient = {
  calculate: calculateAPI(apiInstance),
}

export { apiClient }
