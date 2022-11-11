import MainPage from '@/pages/main-page.vue'
import DetailPage from '@/pages/detail-page.vue'

export const routes = [
  { path: '/', name: 'mainPage', component: MainPage },
  { path: '/detail', name: 'detailPage', component: DetailPage },
]
