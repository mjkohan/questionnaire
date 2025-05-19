export type QuestionType = 'text' | 'choice'

export interface BaseQuestion {
    id: number
    type: QuestionType
    title: string
}

export interface TextQuestion extends BaseQuestion {
    type: 'text'
}

export interface ChoiceQuestion extends BaseQuestion {
    type: 'choice'
    options: string[]
}

export type Question = TextQuestion | ChoiceQuestion

export interface Condition {
    questionId: number
    rule: (answers: Record<number, string | number>) => boolean
}