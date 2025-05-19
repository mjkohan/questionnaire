import { Question } from '@/types/questionnaire'
import TextQuestion from './TextQuestion'
import ChoiceQuestion from './ChoiceQuestion'

export default function QuestionRenderer({ question }: { question: Question }) {
    if (question.type === 'text') return <TextQuestion question={question} />
    if (question.type === 'choice') return <ChoiceQuestion question={question} />
    return null
}
