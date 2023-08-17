import { Box, Paper, Typography } from '@mui/material'
import RouterMenu from '../../components/Main/Services/RouterMenu'
import { Outlet } from 'react-router-dom'

export default function Services() {
  return (
    <Box
      id='services'
      position='relative'
      sx={{
        width: '100%',
        minHeight: {
          xs: 'calc(100vh - 100px)',
          sm: 'calc(100vh - 130px)'
        }
      }}
    >
      <Box
        mt={{ md: 6, xs: 5 }}
        display='flex'
        justifyContent='center'
        flexDirection='row'
        alignItems='center'
        columnGap={0}
      >
        <Paper
          sx={{
            p: 5,
            height: 620,
            bgcolor: '#f3f6f9',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography
            mt={5}
            mb={5}
            variant='h1'
            fontWeight={400}
            fontFamily="'Candal',Helvetica,Arial,Lucida,sans-serif"
            fontSize={{ md: 80, xs: 45 }}
            sx={{
              background: 'linear-gradient(to right, #6e45e2 0%, #42d4f5 100%)',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            SERVICES&nbsp;
          </Typography>
          <RouterMenu />
        </Paper>
        <Paper
          sx={{
            height: 700,
            minWidth: 990,
            display: 'flex',
            alignItems: 'center',
            bgcolor: '#f3f6f9'
          }}
        >
          <Outlet />
        </Paper>
      </Box>
    </Box>
  )
}
