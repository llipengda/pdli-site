import { Box, Typography } from '@mui/material'

export default function Services() {
  return (
    <Box
      id='services'
      position='relative'
      sx={{
        width: '100%',
        minHeight: {
          xs: 'calc(100vh - 120px)',
          sm: 'calc(100vh - 130px)'
        }
      }}
    >
      <Box mt={{ md: 8, xs: 5 }} display='flex' justifyContent='center'>
          <Typography
            variant='h1'
            fontWeight={400}
            fontFamily="'Candal',Helvetica,Arial,Lucida,sans-serif"
            fontSize={{ md: 96, xs: 45 }}
            mb={{ md: 4, xs: 3 }}
            sx={{
              background: 'linear-gradient(to right, #6e45e2 0%, #42d4f5 100%)',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            SERVICES
          </Typography>
      </Box>
    </Box>
  )
}
