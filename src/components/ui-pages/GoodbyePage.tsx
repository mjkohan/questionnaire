'use client'
import { Box, Typography } from '@mui/material'

export default function GoodbyePage() {
    return (
        <Box textAlign="center" sx={{  display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h5" mb={2}>با تشکر از شما!</Typography>
            <Typography>پاسخ‌های شما با موفقیت ثبت شد.</Typography>
        </Box>
    )
}
