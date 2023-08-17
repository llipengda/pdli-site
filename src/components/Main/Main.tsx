import { Container, useTheme } from '@mui/material'
import { useRoutes } from 'react-router-dom'
import routes from '../../routes'
import Background from './Background'

const Main: React.FC = () => {
  return (
    <Container maxWidth='xl' sx={{display: 'flex'}}>
      <Background />
      {useRoutes(routes)}
    </Container>
  )
}

export default Main
