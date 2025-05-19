import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    direction: 'rtl',
    typography: {
        fontFamily: 'Vazirmatn, sans-serif',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    textTransform: 'none',
                    fontWeight: 600,
                    padding: '10px 20px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
                        transform: 'translateY(-1px)',
                    },
                },
                contained: {
                    backgroundColor: '#3f51b5',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#303f9f',
                    },
                },
                outlined: {
                    borderColor: '#3f51b5',
                    color: '#3f51b5',
                    '&:hover': {
                        backgroundColor: 'rgba(63, 81, 181, 0.04)',
                        borderColor: '#303f9f',
                        color: '#303f9f',
                    },
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.4)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#3f51b5',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#3f51b5',
                        borderWidth: '2px',
                    },
                },
                notchedOutline: {
                    borderColor: 'rgba(0, 0, 0, 0.2)',
                },
            },
        },
    },
})

export default theme
