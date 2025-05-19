import { ChoiceQuestion as CQ } from '@/types/questionnaire'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { useQuestionnaireStore } from '@/store/questionnaire'

export default function ChoiceQuestion({ question }: { question: CQ }) {
    const { answers, setAnswer } = useQuestionnaireStore()
    return (
        <FormControl component="fieldset" sx={{ mb: 2 }}>
            <FormLabel sx={{ mb: 2 }} component="legend">{question.title}</FormLabel>
            <RadioGroup
                value={answers[question.id] || ''}
                onChange={(e) => setAnswer(question.id, e.target.value)}
            >
                {question.options.map((option) => (
                    <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
                ))}
            </RadioGroup>
        </FormControl>
    )
}
