import { tolgee } from '@/plugins/tolgee'

export const FAQ = [
  {
    question: () => tolgee.t('faq.question1'),
    answer: () => [tolgee.t('faq.answer1.p1')],
  },
  {
    question: () => tolgee.t('faq.question2'),
    answer: () => [tolgee.t('faq.answer2.p1')],
  },
]
