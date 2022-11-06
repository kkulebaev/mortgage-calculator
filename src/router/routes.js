import MainPage from '@/pages/MainPage.vue'
import DetailPage from '@/pages/DetailPage.vue'

export const routes = [
  { path: '/', name: 'mainPage', component: MainPage },
  { path: '/detail', name: 'detailPage', component: DetailPage },
]
