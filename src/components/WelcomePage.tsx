'use client'
import { Box, Typography } from '@mui/material'
import CustomProgressBar from './CustomProgressBar'

export default function WelcomePage() {
    return (
        <Box textAlign="center" sx={{  display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h5" mb={2}>خوش آمدید!</Typography>
            <Typography>برای شروع پرسشنامه، روی دکمه "بعدی" کلیک کنید.</Typography>
        </Box>
    )
}
