import { i18n } from '@/plugins/i18n'

const { t } = i18n.global

export const FAQ = [
  {
    question: () => t('faq.question1'),
    answer: () => [t('faq.answer1.p1')],
  },
  {
    question: () => t('faq.question2'),
    answer: () => [t('faq.answer2.p1')],
  },
]
