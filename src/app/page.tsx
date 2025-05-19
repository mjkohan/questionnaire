'use client'
import {useQuestionnaireStore} from "@/store/questionnaire";
import {Box} from "@mui/system";
import {Paper, Typography} from "@mui/material";
import {conditions, questions} from "@/constants/questions";
import {shouldDisplay} from "@/utils/conditionEvaluator";
import QuestionRenderer from "@/components/QuestionRenderer";

export default function Home() {
    const { answers } = useQuestionnaireStore()

    return (
    <div >
      <main >
          <Box maxWidth="600px" mx="auto" mt={4}>
              <Typography variant="h5" gutterBottom>
                  پرسشنامه مرحله‌ای
              </Typography>

              {questions.map((question) =>
                  shouldDisplay(question.id, conditions, answers) ? (
                      <Paper key={question.id} sx={{ p: 2, mb: 3 }}>
                          <QuestionRenderer question={question} />
                      </Paper>
                  ) : null
              )}
          </Box>
      </main>

    </div>
  );
}
