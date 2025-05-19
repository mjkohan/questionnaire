import { Paper } from '@mui/material'
import QuestionRenderer from '@/components/QuestionRenderer'
import WelcomePage from '@/components/WelcomePage'
import GoodbyePage from '@/components/GoodbyePage'
import { Question } from '@/types/questionnaire'

export default function QuestionDisplay({
                                            isWelcome,
                                            isGoodbye,
                                            currentQuestion,
                                        }: {
    isWelcome: boolean
    isGoodbye: boolean
    currentQuestion: Question | undefined
}) {
    return (
        <Paper
            elevation={3}
            sx={{
                border: 'none',
                boxShadow: 'none',
                p: { xs: 2, sm: 4 },
                borderRadius: 3,
                mb: 4,
                bgcolor: 'background.paper',
                position: 'relative',
                zIndex: 2,
                height: 400,
                overflowY: 'auto',
            }}
        >
            {isWelcome ? (
                <WelcomePage />
            ) : isGoodbye ? (
                <GoodbyePage />
            ) : currentQuestion ? (
                <QuestionRenderer question={currentQuestion} />
            ) : null}
        </Paper>
    )
}
