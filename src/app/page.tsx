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
import WelcomePage from '@/components/WelcomePage'
import GoodbyePage from '@/components/GoodbyePage'

export default function QuestionnairePage() {
    const { currentStep, answers, next, prev } = useQuestionnaireStore()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const visibleQuestions = useMemo(
        () => questions.filter((q) => shouldDisplay(q.id, conditions, answers)),
        [answers]
    )

    const total = visibleQuestions.length
    const isWelcome = currentStep === -1
    const isGoodbye = currentStep === total
    const currentQuestion = visibleQuestions[currentStep]
    const progress = isWelcome ? 0 : isGoodbye ? 100 : ((currentStep + 1) / (total+1)) * 100
    const isAnswered = answers[currentQuestion?.id] !== undefined && answers[currentQuestion?.id] !== ''
    const borderHue = 120 - ((100 - progress) * 1.2)

    return (
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: '#f5f7fa',
                display: isMobile ? 'block' : 'flex',
                alignItems: isMobile ? 'initial' : 'center',
                justifyContent: isMobile ? 'initial' : 'center',
                px: 2,
                py: isMobile ? 6 : 0
            }}
        >
            <Container
                maxWidth="sm"
                sx={{
                    position: 'relative',
                    borderRadius: 3,
                    bgcolor: '#fff',
                    px: 3,
                    py: isMobile ? 6 : 4,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                    ...(isMobile
                        ? {}
                        : {
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: -4,
                                left: -4,
                                right: -4,
                                bottom: -4,
                                borderRadius: 6,
                                padding: '2px',
                                background: `conic-gradient(
                                      from 0deg,
                                      hsl(${borderHue}, 70%, 50%) ${progress * 3.6}deg,
                                      #ddd ${progress * 3.6}deg 360deg
                                  )`,
                                WebkitMask:
                                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                WebkitMaskComposite: 'xor',
                                maskComposite: 'exclude',
                                zIndex: 1,
                            },
                        }),
                }}
            >
                <Box textAlign="center" mb={4} sx={{ position: 'relative', zIndex: 2 }}>
                    <Typography variant={isMobile ? 'h6' : 'h4'} fontWeight="bold">
                        پرسشنامه مرحله‌ای
                    </Typography>
                </Box>

                {/* ProgressBar always shown */}
                <CustomProgressBar progress={progress} />

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

                <Stack
                    direction={isMobile ? 'column-reverse' : 'row'}
                    spacing={isMobile ? 2 : 0}
                    justifyContent="space-between"
                    flexWrap="wrap"
                    sx={{ position: 'relative', zIndex: 2 }}
                >
                    <Button
                        variant="outlined"
                        disabled={isWelcome || currentStep === 0}
                        onClick={prev}
                        fullWidth={isMobile}
                    >
                        قبلی
                    </Button>
                    <Button
                        variant="contained"
                        onClick={next}
                        disabled={
                            (!isWelcome && !isGoodbye && !isAnswered) ||
                            (isGoodbye)
                        }
                        fullWidth={isMobile}
                    >
                        {isGoodbye ? 'پایان' : 'بعدی'}
                    </Button>
                </Stack>
            </Container>
        </Box>
    )
}
