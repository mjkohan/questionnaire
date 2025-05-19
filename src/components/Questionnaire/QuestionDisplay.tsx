import { Paper } from '@mui/material'
import QuestionRenderer from '@/components/Question/QuestionRenderer'
import WelcomePage from '@/components/ui-pages/WelcomePage'
import GoodbyePage from '@/components/ui-pages/GoodbyePage'
import { Question } from '@/types/questionnaire'

export default function QuestionDisplay({
                                            isWelcome,
                                            isGoodbye,
                                            currentQuestion,
                                            isMobile
                                        }: {
    isWelcome: boolean
    isGoodbye: boolean
    currentQuestion: Question | undefined
    isMobile: boolean
}) {
    return (
        <Paper
            elevation={3}
            sx={{
                border: 'none',
                boxShadow: 'none',
                p: isMobile ? 2 : 4,
                borderRadius: 3,
                mb: 4,
                bgcolor: 'background.paper',
                position: 'relative',
                zIndex: 2,

                height: isMobile ? 'auto' : 300,
                overflowY: isMobile ? 'visible' : 'auto',
                maxWidth: isMobile ? '100%' : 600,
                width: '100%',
                mx: 'auto',
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
