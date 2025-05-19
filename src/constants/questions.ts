import { Question, Condition } from '@/types/questionnaire'

export const questions: Question[] = [
    {
        id: 1,
        type: 'text',
        title: 'نام خود را وارد کنید:'
    },
    {
        id: 2,
        type: 'choice',
        title: 'نوع گوشی شما چیست؟',
        options: ['Android', 'iPhone']
    },
    {
        id: 3,
        type: 'text',
        title: 'چرا این مدل گوشی را انتخاب کرده‌اید؟'
    },
    {
        id: 4,
        type: 'text',
        title: 'سوال شرطی شماره ۴'
    },
    {
        id: 5,
        type: 'choice',
        title: 'سؤال ۵',
        options: ['گزینه ۱', 'گزینه ۲']
    },
    {
        id: 7,
        type: 'choice',
        title: 'سؤال ۷',
        options: ['۱', '۲', '۳', '۴']
    },
    {
        id: 8,
        type: 'text',
        title: 'سؤال ۸'
    },
    {
        id: 9,
        type: 'text',
        title: 'سؤال ۹'
    },
]

export const conditions: Condition[] = [
    {
        questionId: 4,
        rule: (answers) => !(answers[2] === 'Android' || answers[2] === 'iPhone')
    },
    {
        questionId: 8,
        rule: (answers) => !(answers[5] === 'گزینه ۲' && answers[7] === '۴')
    }
]