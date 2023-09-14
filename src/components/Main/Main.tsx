import { Box, Container } from '@mui/material'
import { useRoutes } from 'react-router-dom'
import routes from '../../routes'
import { Suspense, lazy } from 'react'
import Loading from '../Loading'
const Background = lazy(() => import('./Background'))

const Main: React.FC = () => {
  return (
    <Box sx={{bgcolor: 'background.default', transition: 'background-color 0.5s ease-out'}}>
      <Container maxWidth='xl' sx={{ display: 'flex' }}>
        <Suspense fallback={<Loading />}>
        <Background/>
          {useRoutes(routes)}
        </Suspense>
      </Container>
    </Box>
  )
}

export default Main
