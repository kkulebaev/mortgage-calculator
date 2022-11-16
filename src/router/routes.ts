import { MainPage, DetailPage, NotFoundPage } from '@/pages'

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
  {
    path: '/:pathMatch(.*)*',
    name: NotFoundPage.name,
    component: NotFoundPage,
  },
]
