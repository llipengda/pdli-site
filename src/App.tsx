import React from 'react'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import { Box } from '@mui/material'
import './App.css'

const App: React.FC = () => {
  return (
    <Box display='flex' flexDirection='column'>
      <Header />
      <Main />
      <Footer />
    </Box>
  )
}

export default App
