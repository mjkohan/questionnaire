'use client'

import { useMemo } from 'react'
import { questions, conditions } from '@/constants/questions'
import { useQuestionnaireStore } from '@/store/questionnaire'
import { shouldDisplay } from '@/utils/conditionEvaluator'
import LayoutWrapper from '@/components/Questionnaire/LayoutWrapper'
import QuestionnaireContainer from '@/components/Questionnaire/QuestionnaireContainer'
import Header from '@/components/Questionnaire/Header'
import CustomProgressBar from '@/components/CustomProgressBar'
import QuestionDisplay from '@/components/Questionnaire/QuestionDisplay'
import NavigationButtons from '@/components/Questionnaire/NavigationButtons'
import { useMediaQuery, useTheme } from '@mui/material'

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
    const progress = isWelcome ? 0 : isGoodbye ? 100 : ((currentStep + 1) / (total + 1)) * 100
    const isAnswered = answers[currentQuestion?.id] !== undefined && answers[currentQuestion?.id] !== ''
    const borderHue = 120 - ((100 - progress) * 1.2)

    return (
        <LayoutWrapper>
            <QuestionnaireContainer progress={progress} borderHue={borderHue} isMobile={isMobile}>
                <Header />
                <CustomProgressBar progress={progress} />
                <QuestionDisplay
                    isWelcome={isWelcome}
                    isGoodbye={isGoodbye}
                    currentQuestion={currentQuestion}
                />
                <NavigationButtons
                    isWelcome={isWelcome}
                    isGoodbye={isGoodbye}
                    currentStep={currentStep}
                    isAnswered={isAnswered}
                    prev={prev}
                    next={next}
                />
            </QuestionnaireContainer>
        </LayoutWrapper>
    )
}
