import { TextQuestion as TQ } from '@/types/questionnaire'
import { TextField } from '@mui/material'
import { useQuestionnaireStore } from '@/store/questionnaire'

export default function TextQuestion({ question }: { question: TQ }) {
    const { answers, setAnswer } = useQuestionnaireStore()
    return (
        <TextField
            fullWidth
            label={question.title}
            value={answers[question.id] || ''}
            onChange={(e) => setAnswer(question.id, e.target.value)}
            sx={{ mb: 2 }}
        />
    )
}