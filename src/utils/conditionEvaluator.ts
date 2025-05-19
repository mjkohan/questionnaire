import {Condition} from '@/types/questionnaire'

export function shouldDisplay(questionId: number, conditions: Condition[], answers: Record<number, string | number>) {
    const condition = conditions.find(c => c.questionId === questionId)
    if (!condition) return true
    return condition.rule(answers)
}