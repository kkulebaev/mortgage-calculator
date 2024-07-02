import { createRouter, createWebHistory, Router } from 'vue-router'

import { routes } from './routes.js'

export const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})
