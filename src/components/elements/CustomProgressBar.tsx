import { Box } from '@mui/material'

export default function CustomProgressBar({ progress }: { progress: number }) {
    const borderHue = 120 - ((100 - progress) * 1.2)
    const fillColor = `hsl(${borderHue}, 70%, 50%)`

    return (
        <Box
            sx={{
                width: '100%',
                height: 10,
                backgroundColor: '#eee',
                borderRadius: 5,
                overflow: 'hidden',
                mb: 3,
            }}
        >
            <Box
                sx={{
                    width: `${progress}%`,
                    height: '100%',
                    backgroundColor: fillColor,
                    transition: 'width 0.3s ease, background-color 0.3s ease',
                }}
            />
        </Box>
    )
}
