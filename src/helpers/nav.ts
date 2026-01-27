import { CircleHelp, Home, Table } from 'lucide-vue-next'

export const NAV_ITEMS = [
  {
    id: 'home',
    to: { name: 'MainPage' },
    icon: Home,
  },
  {
    id: 'detail',
    to: { name: 'DetailPage' },
    icon: Table,
  },
  {
    id: 'faq',
    to: { name: 'FaqPage' },
    icon: CircleHelp,
  },
] as const
