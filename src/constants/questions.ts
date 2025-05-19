import { Question, Condition } from '@/types/questionnaire'

export const questions: Question[] = [
    {
        id: 1,
        type: 'text',
        title: 'نام کامل شما چیست؟'
    },
    {
        id: 2,
        type: 'choice',
        title: 'جنسیت خود را انتخاب کنید:',
        options: ['زن', 'مرد', 'ترجیح می‌دهم نگویم']
    },
    {
        id: 3,
        type: 'choice',
        title: 'چه نوع گوشی هوشمندی استفاده می‌کنید؟',
        options: ['Android', 'iPhone', 'سایر']
    },
    {
        id: 4,
        type: 'text',
        title: 'چرا این مدل گوشی را انتخاب کرده‌اید؟'
    },
    {
        id: 5,
        type: 'choice',
        title: 'چقدر از گوشی خود راضی هستید؟',
        options: ['خیلی زیاد', 'نسبتاً', 'کم', 'اصلاً']
    },
    {
        id: 6,
        type: 'choice',
        title: 'آیا در ۶ ماه گذشته گوشی خود را تعویض کرده‌اید؟',
        options: ['بله', 'خیر']
    },
    {
        id: 7,
        type: 'text',
        title: 'اگر قصد خرید گوشی جدید دارید، چه مدلی مد نظرتان است؟'
    },
    {
        id: 8,
        type: 'choice',
        title: 'آیا علاقه‌مند به دریافت پیشنهادات خرید بر اساس سلیقه‌تان هستید؟',
        options: ['بله', 'خیر']
    },
    {
        id: 9,
        type: 'text',
        title: 'لطفاً ایمیل خود را وارد کنید تا پیشنهادات برای شما ارسال شود:'
    },
]

export const conditions: Condition[] = [
    {
        questionId: 4,
        rule: (answers) => ['Android', 'iPhone'].includes(String(answers[3]))
    },
    {
        questionId: 7,
        rule: (answers) => answers[6] === 'خیر'
    },
    {
        questionId: 9,
        rule: (answers) => answers[8] === 'بله'
    }
]
