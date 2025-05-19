import {Button, Stack, Box, useMediaQuery, useTheme} from '@mui/material'

export default function NavigationButtons({
                                              isWelcome,
                                              isGoodbye,
                                              currentStep,
                                              isAnswered,
                                              prev,
                                              next,
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
    const showPrevButton = !isWelcome && currentStep > 0 && !isGoodbye

    return (
        <Stack
            direction={isMobile ? 'column-reverse' : 'row'}
            spacing={isMobile ? 2 : 0}
            justifyContent="space-between"
            flexWrap="wrap"
            sx={{position: 'relative', zIndex: 2}}
        >
            {showPrevButton ? (
                <Button
                    variant="outlined"
                    onClick={prev}
                    fullWidth={isMobile}
                >
                    قبلی
                </Button>
            ) : (
                <Box sx={{visibility: 'hidden', width: isMobile ? '100%' : 'auto'}}>
                    <Button variant="outlined" fullWidth={isMobile}>
                        قبلی
                    </Button>
                </Box>
            )}

            <Button
                variant="contained"
                onClick={isGoodbye ? () => window.location.reload() : next}
                disabled={isWelcome ? false : (!isAnswered && !isGoodbye)}
                fullWidth={isMobile}
            >
                {isGoodbye ? 'پایان' : 'بعدی'}
            </Button>

        </Stack>
    )
}
