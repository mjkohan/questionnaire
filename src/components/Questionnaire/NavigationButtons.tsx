import { Button, Stack, useMediaQuery, useTheme } from '@mui/material'

export default function NavigationButtons({
                                              isWelcome,
                                              isGoodbye,
                                              currentStep,
                                              isAnswered,
                                              prev,
                                              next
                                          }: {
    isWelcome: boolean
    isGoodbye: boolean
    currentStep: number
    isAnswered: boolean
    prev: () => void
    next: () => void
}) {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
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
                    (!isWelcome && !isGoodbye && !isAnswered) || isGoodbye
                }
                fullWidth={isMobile}
            >
                {isGoodbye ? 'پایان' : 'بعدی'}
            </Button>
        </Stack>
    )
}
