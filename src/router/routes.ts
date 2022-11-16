import { MainPage, DetailPage } from '@/pages'

export const routes = [
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
]
