import Home from '@/assets/img/home.svg'
import Rows from '@/assets/img/rows.svg'
import Faq from '@/assets/img/faq.svg'

export const NAV_ITEMS = [
  {
    id: 'home',
    to: { name: 'MainPage' },
    icon: Home,
  },
  {
    id: 'detail',
    to: { name: 'DetailPage' },
    icon: Rows,
  },
  {
    id: 'faq',
    to: { name: 'FaqPage' },
    icon: Faq,
  },
] as const
