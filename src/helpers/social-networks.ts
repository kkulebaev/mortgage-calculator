import { siGithub, siTelegram, siX } from 'simple-icons'

export const SOCIAL_NETWORKS = [
  {
    id: 'github',
    icon: siGithub.path,
    link: 'https://github.com/kkulebaev/mortgage-calculator',
  },
  {
    id: 'twitter',
    icon: siX.path,
    link: 'https://twitter.com/kkulebaev',
  },
  {
    id: 'telegram',
    icon: siTelegram.path,
    link: 'https://t.me/kkulebaev',
  },
] as const
