import { AxiosInstance } from 'axios'

import type { Input } from '@/helpers'

const newsPrefix = '/calculate'

export const calculateAPI = (api: AxiosInstance) => ({
  async calculateMortgage(payload: Input) {
    return await api.post(newsPrefix, payload)
  },
})
