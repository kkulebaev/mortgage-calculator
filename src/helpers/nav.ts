export const NAV_ITEMS = [
  {
    id: 'home',
    to: { name: 'MainPage' },
    icon: ['fas', 'house'],
  },
  {
    id: 'detail',
    to: { name: 'DetailPage' },
    icon: ['fas', 'table'],
  },
  {
    id: 'faq',
    to: { name: 'FaqPage' },
    icon: ['fas', 'circle-question'],
  },
] as const
