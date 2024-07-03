import { i18n } from '@/plugins/i18n'

export const FAQ = [
  {
    question: () => i18n.global.t('faq.question1'),
    answer: () => [i18n.global.t('faq.answer1.p1')],
  },
  {
    question: () => i18n.global.t('faq.question2'),
    answer: () => [i18n.global.t('faq.answer2.p1')],
  },
]
