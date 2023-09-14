import { Box, Typography } from '@mui/material'
import DailyImage from './DailyImage'
import DailyQuote from './DailyQuote'
import NextPage from '../NextPage'

const Welcome: React.FC = () => {
  return (
    <Box
      id='welcome'
      position='relative'
      display='flex'
      flexDirection='column'
      sx={{
        width: '100%',
        minHeight: 'calc(100vh - 70px)'
      }}
    >
      <Box
        sx={{
          width: '100%',
          justifyContent: 'center',
          mt: {
            md: 15,
            xs: 4
          },
          alignItems: 'center',
          display: 'flex',
          flexDirection: {
            md: 'row',
            xs: 'column'
          }
        }}
      >
        <DailyImage />
        <Box ml={{ xs: 0, md: 6 }}>
          <Typography
            variant='h1'
            fontWeight={700}
            fontSize={{
              xs: '2.2rem',
              md: '4.5rem'
            }}
            sx={{
              background: 'linear-gradient(to right, #88d3ce 0%, #6e45e2 100%)',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            WELCOME TO
            <br />
            <i>PDLI.SITE</i>
          </Typography>
          <Typography
            variant='h6'
            sx={{
              color: 'text.secondary',
              mt: {
                xs: 0.5,
                md: 3
              },
              fontSize: {
                md: '1.3rem',
                xs: '1rem'
              }
            }}
          >
            A personal website of PDLi
          </Typography>
        </Box>
      </Box>
      <DailyQuote />
      <NextPage nextId='about-me' />
    </Box>
  )
}

export default Welcome
