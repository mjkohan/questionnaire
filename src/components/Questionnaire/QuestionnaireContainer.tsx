import { Container } from '@mui/material'
import { ReactNode } from 'react'

export default function QuestionnaireContainer({
                                                   children,
                                                   progress,
                                                   borderHue,
                                                   isMobile
                                               }: {
    children: ReactNode
    progress: number
    borderHue: number
    isMobile: boolean
}) {
    return (
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
            {children}
        </Container>
    )
}
