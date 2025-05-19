import {Box} from '@mui/material'

export default function CustomProgressBar({progress}: {progress:number}) {
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
                    backgroundColor: 'primary.main',
                    transition: 'width 0.3s ease',
                }}
            />
        </Box>
    )
}