'use client'

import {
    Box,
    Typography,
    Paper,
    Button,
    Stack,
    Container,
    useMediaQuery,
    useTheme
} from '@mui/material'
import { questions, conditions } from '@/constants/questions'
import QuestionRenderer from '@/components/QuestionRenderer'
import { useQuestionnaireStore } from '@/store/questionnaire'
import { shouldDisplay } from '@/utils/conditionEvaluator'
import { useMemo } from 'react'
import CustomProgressBar from '@/components/CustomProgressBar'

export default function QuestionnairePage() {
    const { currentStep, answers, next, prev } = useQuestionnaireStore()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const visibleQuestions = useMemo(
        () => questions.filter((q) => shouldDisplay(q.id, conditions, answers)),
        [answers]
    )

    const currentQuestion = visibleQuestions[currentStep]
    const total = visibleQuestions.length
    const progress = ((currentStep + 1) / total) * 100
    const isAnswered = answers[currentQuestion?.id] !== undefined && answers[currentQuestion?.id] !== ''

    return (
        <Container maxWidth="sm" sx={{ py: 6 }}>
            <Box textAlign="center" mb={4}>
                <Typography variant={isMobile ? 'h6' : 'h4'} fontWeight="bold">
                    پرسشنامه مرحله‌ای
                </Typography>
            </Box>

            <CustomProgressBar progress={progress} />

            {currentQuestion && (
                <Paper
                    key={currentQuestion.id}
                    elevation={3}
                    sx={{
                        p: { xs: 2, sm: 4 },
                        borderRadius: 3,
                        mb: 4,
                        backgroundColor: 'background.paper',
                    }}
                >
                    <QuestionRenderer question={currentQuestion} />
                </Paper>
            )}

            <Stack
                direction={isMobile ? 'column-reverse' : 'row'}
                spacing={isMobile ? 2 : 0}
                justifyContent="space-between"
                flexWrap="wrap"
            >
                <Button
                    variant="outlined"
                    disabled={currentStep === 0}
                    onClick={prev}
                    fullWidth={isMobile}
                >
                    قبلی
                </Button>
                <Button
                    variant="contained"
                    disabled={currentStep >= total - 1 || !isAnswered}

                    onClick={next}
                    fullWidth={isMobile}
                >
                    بعدی
                </Button>
            </Stack>

        </Container>
    )
}
