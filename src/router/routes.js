import MainPage from '/src/pages/MainPage.vue'
import DetailPage from '/src/pages/DetailPage.vue'

export const routes = [
  { path: '/', name: 'mainPage', component: MainPage },
  { path: '/detail', name: 'detailPage', component: DetailPage },
]
