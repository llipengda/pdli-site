import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material'
import './AboutMe.css'
import AboutCard from './AboutCard'
import QutantumCard from './QutantumCard'
import NextPage from '../NextPage'

const AboutMe: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () =>
    setScrolled(document.documentElement.scrollTop > 0.4 * window.innerHeight)

  return (
    <Box
      id='about-me'
      display='flex'
      position='relative'
      flexDirection='column'
      sx={{
        width: '100%',
        minHeight: {
          xs: 'calc(100vh - 60px)',
          sm: 'calc(100vh - 70px)'
        },
        overflowX: 'hidden'
      }}
    >
      <Grid
        container
        alignContent='center'
        alignItems='center'
        rowGap={5}
        mt={{ md: 15, xs: 0 }}
        p={{ xs: 2, md: 0 }}
        mb={8}
      >
        <Grid item xs={12} md={7}>
          <AboutCard show={scrolled} />
        </Grid>
        <Grid item xs={0} md={0.5} />
        <Grid item xs={12} md={4.5}>
          <QutantumCard show={scrolled} />
        </Grid>
      </Grid>
      <NextPage nextId='links' />
    </Box>
  )
}

export default AboutMe
