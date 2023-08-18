import { Box, Card, CardMedia, Link, Tooltip, Typography } from '@mui/material'
import { animated, useSpring } from 'react-spring'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

export default function LinkCard({
  image,
  title,
  description,
  link
}: {
  image: string
  title: string
  description: string
  link: string
}) {
  const calc = (x: number, y: number) => {
    let r = 2
    if (x > (2 / 3) * window.innerWidth - 40) {
      r = 1.3
    } else if (x < (1 / 3) * window.innerWidth + 20) {
      r = 5
    }
    return [
      -(y - window.innerHeight / 2) / 40,
      (x - window.innerWidth / r) / 40,
      1.05
    ]
  }
  const trans = (x: number, y: number, s: number) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }))

  return (
    <Card
      elevation={3}
      style={{ transform: props.xys.to(trans) as unknown as string }}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      component={animated.div}
    >
      <CardMedia
        image={image}
        sx={{
          height: { lg: 260, xs: 160 }
        }}
      />
      <Box
        sx={{
          m: { md: 3, xs: 1.5 },
          mt: { md: 2, xs: 1 },
          mb: { md: 1, xs: 0.5 }
        }}
      >
        <Typography variant='h4' fontSize={{ lg: 30, xs: 18 }}>
          <strong>{title}</strong>
        </Typography>
        <Typography variant='h5' fontSize={{ lg: 20, xs: 14 }} lineHeight={1.2}>
          {description}
        </Typography>
      </Box>
      <Box sx={{ ml: { md: 3, xs: 1.5 }, mb: { md: 1.5, xs: 0.5 } }}>
        <Tooltip title='visit' arrow>
          <Link href={link} target='_blank'>
            <OpenInNewIcon sx={{ width: { md: 24, xs: 18 } }} />
          </Link>
        </Tooltip>
      </Box>
    </Card>
  )
}
