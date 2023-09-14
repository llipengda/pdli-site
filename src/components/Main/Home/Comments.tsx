import { Box, Typography, useTheme } from '@mui/material'
import Giscus from '@giscus/react'

export default function Comments() {
  const isDark = useTheme().palette.mode === 'dark'

  return (
    <Box
      id='comments'
      sx={{
        width: '100%',
        minHeight: {
          xs: 'calc(100vh - 130px)',
          sm: 'calc(100vh - 100px)'
        }
      }}
    >
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Typography
          variant='h1'
          fontWeight={400}
          fontFamily="'Candal',Helvetica,Arial,Lucida,sans-serif"
          fontSize={{ md: 62, xs: 35 }}
          mt={{ md: 6, xs: 6 }}
          mb={{ md: 6, xs: 3 }}
          sx={{
            background: 'linear-gradient(to right, #6e45e2 0%, #42d4f5 100%)',
            backgroundClip: 'text',
            color: 'transparent'
          }}
          align='center'
          width={{ md: '100%', xs: '80%' }}
        >
          <i>LEAVE YOUR COMMENTS HERE...</i>
        </Typography>
        <Box width={{ md: '100%', xs: '80%' }} mb={4}>
          <Giscus
            repo='llipengda/comments'
            repoId='R_kgDOJjDBFg'
            category='Announcements'
            categoryId='DIC_kwDOJjDBFs4CWfF2'
            mapping='pathname'
            reactionsEnabled='1'
            emitMetadata='0'
            inputPosition='top'
            theme={isDark ? 'dark' : 'light'}
            lang='en'
            loading='lazy'
          />
        </Box>
      </Box>
    </Box>
  )
}
