import { Box, Grid, Typography } from '@mui/material'
import LinkCard from './LinkCard'
import linkObjs from './linkObjs'
import React from 'react'
import NextPage from '../NextPage'

export default function Links() {
  return (
    <Box
      id='links'
      position='relative'
      sx={{
        width: '100%',
        minHeight: 'calc(100vh - 70px)'
      }}
    >
      <Box
        display='flex'
        alignItems='center'
        flexDirection='column'
        mt={{ md: 4, xs: 2 }}
      >
        <Typography
          variant='h1'
          fontWeight={400}
          fontFamily="'Candal',Helvetica,Arial,Lucida,sans-serif"
          fontSize={{ md: 120, xs: 45 }}
          mb={{ md: 6, xs: 3 }}
          sx={{
            background: 'linear-gradient(to right, #6e45e2 0%, #42d4f5 100%)',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        >
          <i>LINKS&nbsp;</i>
        </Typography>
        <Grid container spacing={{ md: 6, xs: 2 }} mb={8}>
          {linkObjs.map(obj => (
            <React.Fragment key={obj.title}>
              <Grid item xs={1.5} md={0} display={{ xs: 'flex', md: 'none' }} />
              <Grid item md={12 / linkObjs.length} xs={9}>
                <LinkCard
                  image={obj.picName}
                  title={obj.title}
                  description={obj.description}
                  link={obj.link}
                />
              </Grid>
              <Grid item xs={1.5} md={0} display={{ xs: 'flex', md: 'none' }} />
            </React.Fragment>
          ))}
        </Grid>
        <NextPage nextId='comments' />
      </Box>
    </Box>
  )
}
