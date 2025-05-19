import { Box, useMediaQuery, useTheme } from '@mui/material'
import { ReactNode } from 'react'

export default function LayoutWrapper({ children }: { children: ReactNode }) {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

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
            {children}
        </Box>
    )
}
