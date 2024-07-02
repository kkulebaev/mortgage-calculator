import { RouteRecordRaw } from 'vue-router'

import { DetailPage, FAQPage, MainPage, NotFoundPage } from '@/pages'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: MainPage.name,
    component: MainPage,
  },
  {
    path: '/detail',
    name: DetailPage.name,
    component: DetailPage,
  },
  {
    path: '/faq',
    name: FAQPage.name,
    component: FAQPage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: NotFoundPage.name,
    component: NotFoundPage,
  },
]
