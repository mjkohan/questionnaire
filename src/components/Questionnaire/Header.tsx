import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'

export default function Header() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box textAlign="center" mb={4} sx={{ position: 'relative', zIndex: 2 }}>
            <Typography variant={isMobile ? 'h6' : 'h4'} fontWeight="bold">
                پرسشنامه مرحله‌ای
            </Typography>
        </Box>
    )
}
