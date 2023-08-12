import { Button, Card, CardMedia, Typography } from '@mui/material'
import { animated, useSpring } from 'react-spring'
import ECNUImage from '../../../../assets/images/ECNU_QUANTUM_THINKING_60406.jpg'

export default function QuantumCard({ show }: { show: boolean }) {
  const animation = useSpring({
    transform: show ? 'translateX(0px)' : 'translateX(600px)'
  })

  return (
    <animated.div style={animation}>
      <Card>
        <CardMedia
          image={ECNUImage}
          sx={{
            height: {
              xs: 210,
              lg: 320
            },
            objectFit: 'contain'
          }}
        />
        <Typography
          display='flex'
          flexDirection='column'
          variant='h5'
          p={1.5}
          pb={{ xs: 0.5, lg: 1.5 }}
          fontWeight={700}
          pl={{ lg: 3, xs: 1.5 }}
          fontSize={{ xs: 17, lg: 25 }}
        >
          <i>Qutantum Thinking</i>
          <Typography
            color='#a7a7a7'
            mb={{ lg: 1.5, xs: 0 }}
            fontSize={{ xs: 15, lg: 20 }}
          >
            A thinking modebased on quantum theory
          </Typography>
          <Button
            size='small'
            href='https://www.ecnu.edu.cn/info/1096/58378.htm'
            target='_blank'
            sx={{
              fontSize: { xs: 12, lg: 16 },
              alignSelf: 'flex-end'
            }}
          >
            Learn more
          </Button>
        </Typography>
      </Card>
    </animated.div>
  )
}
