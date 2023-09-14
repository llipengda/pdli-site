import { Box, Paper, Typography } from '@mui/material'
import RouterMenu from '../../components/Main/Services/RouterMenu'
import { Outlet } from 'react-router-dom'
import { useTheme } from '@mui/material'

export default function Services() {
  const isDark = useTheme().palette.mode === 'dark'

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
        mt={{ md: 2.5, xs: 0 }}
        mb={{ md: 2.5, xs: 1 }}
        display='flex'
        justifyContent='center'
        flexDirection={{ md: 'row', xs: 'column' }}
        alignItems='center'
        columnGap={0}
      >
        <Paper
          elevation={0}
          sx={{
            p: { md: 5, xs: 0 },
            height: { md: 620, xs: 'none' },
            width: { md: 'none', xs: '100%' },
            bgcolor: isDark ? 'background.paper' : '#f3f6f9',
            display: 'flex',
            flexDirection: 'column',
            borderRight: {
              md: isDark ? '1px solid #3f3f3f' : '1px solid #dededede',
              xs: 'none'
            }
          }}
        >
          <Box mx={{ md: 0, xs: 3 }} my={{ md: 0, xs: 1 }}>
            <Typography
              mb={{ md: 5, xs: 2 }}
              variant='h1'
              fontWeight={400}
              fontFamily="'Candal',Helvetica,Arial,Lucida,sans-serif"
              fontSize={{ md: 80, xs: 60 }}
              sx={{
                background:
                  'linear-gradient(to right, #6e45e2 0%, #42d4f5 100%)',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              SERVICES&nbsp;
            </Typography>
            <RouterMenu />
          </Box>
        </Paper>
        <Paper
          elevation={0}
          sx={{
            height: { md: 700, xs: 'none' },
            minWidth: { md: 990, xs: '100%' },
            maxWidth: { md: 'none', xs: '100%' },
            display: 'flex',
            alignItems: 'center',
            bgcolor: isDark ? 'background.paper' : '#f3f6f9'
          }}
        >
          <Outlet />
        </Paper>
      </Box>
    </Box>
  )
}
