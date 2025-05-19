'use client'

import { Box, Typography, Paper, Button, LinearProgress, Stack } from '@mui/material'
import { questions, conditions } from '@/constants/questions'
import QuestionRenderer from '@/components/QuestionRenderer'
import { useQuestionnaireStore } from '@/store/questionnaire'
import { shouldDisplay } from '@/utils/conditionEvaluator'
import { useMemo } from 'react'
import CustomProgressBar from "@/components/CustomProgressBar";
export default function QuestionnairePage() {
    const { currentStep, answers, next, prev } = useQuestionnaireStore()

    const visibleQuestions = useMemo(
        () => questions.filter((q) => shouldDisplay(q.id, conditions, answers)),
        [answers]
    )

    const currentQuestion = visibleQuestions[currentStep]
    const total = visibleQuestions.length
    const progress = ((currentStep + 1) / total) * 100

    return (
        <Box maxWidth="600px" mx="auto" mt={4}>
            <Typography variant="h5" gutterBottom>
                پرسشنامه مرحله‌ای
            </Typography>

            <CustomProgressBar progress={progress} />
            {currentQuestion && (
                <Paper key={currentQuestion.id} sx={{ p: 2, mb: 3 }}>
                    <QuestionRenderer question={currentQuestion} />
                </Paper>
            )}

            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Button variant="outlined" disabled={currentStep === 0} onClick={prev}>
                    قبلی
                </Button>
                <Button
                    variant="contained"
                    disabled={currentStep >= total - 1}
                    onClick={next}
                >
                    بعدی
                </Button>
            </Stack>
        </Box>
    )
}