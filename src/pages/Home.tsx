import React from 'react'
import { Box, Divider } from '@mui/material'
import Welcome from '../components/Main/Home/Welcome/Welcome'
import AboutMe from '../components/Main/Home/AboutMe/AboutMe'
import Links from '../components/Main/Home/Links/Links'
import Comments from '../components/Main/Home/Comments'

const Home: React.FC = () => {
  return (
    <Box display='flex' flexDirection='column' id='home'>
      <Welcome />
      <Divider />
      <AboutMe />
      <Divider />
      <Links />
      <Divider />
      <Comments />
    </Box>
  )
}

export default Home
