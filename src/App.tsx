import React, { createContext, useMemo, useState } from 'react'
import {
  Box,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
  useTheme
} from '@mui/material'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import './App.css'

export const colorModeContext = createContext({ toggleColorMode: () => {} })

const App: React.FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const [mode, setMode] = useState<'light' | 'dark'>(
    prefersDarkMode ? 'dark' : 'light'
  )

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )

  const defaultTheme = useTheme()

  const theme = useMemo(
    () => ({
      ...defaultTheme,
      palette: {
        ...defaultTheme.palette,
        mode,
        background: {
          default: mode === 'light' ? '#fff0' : '#121212',
          paper: mode === 'light' ? '#fff' : '#202020'
        },
        text: {
          ...defaultTheme.palette.text,
          primary: mode === 'light' ? 'rgba(0, 0, 0, 0.87)' : '#fff',
          disabled: mode === 'light' ? 'rgba(0, 0, 0, 0.38)' : '#686868',
          secondary: mode === 'light' ? 'rgba(0, 0, 0, 0.54)' : '#8c8c8c'
        }
      }
    }),
    [mode]
  )

  console.log(theme)

  return (
    <Box display='flex' flexDirection='column'>
      <colorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Header />
          <Main />
          <Footer />
        </ThemeProvider>
      </colorModeContext.Provider>
    </Box>
  )
}

export default App
