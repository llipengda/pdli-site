import React, { useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Link,
  Tooltip,
  Typography
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { animated, useSpring } from 'react-spring'
import CircleIcon from '@mui/icons-material/Circle'

interface ServiceCardProps {
  name: string
  status: string
  imageUrl: string
  visitBtn?: boolean
  detailBtn?: boolean
  visitBtnName?: string
  visitUrl?: string
  detailUrl?: string
}

export default function ServiceCard({
  name,
  status,
  imageUrl,
  visitBtn = false,
  detailBtn = false,
  visitBtnName = 'VISIT',
  visitUrl,
  detailUrl
}: ServiceCardProps) {
  const [flipped, setFilpped] = useState(false)

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })

  const isRunning = status.toLowerCase() === 'running'
  const isLoading = status.toLowerCase() === 'loading'

  return (
    <Tooltip
      title={`${status.toLocaleUpperCase()}${
        flipped ? '' : ' - CLICK FOR DETAIL'
      }`}
      placement='top'
    >
      <Box
        position='relative'
        display='flex'
        justifyContent='center'
        sx={{
          cursor: 'pointer',
          willChange: 'transform, opacity',
          height: { md: 300, xs: 200 },
          width: { md: 450, xs: '100%' },
          margin: '0 auto'
        }}
        onClick={() => setFilpped(flipped => !flipped)}
      >
        <Card
          component={animated.div}
          style={{
            opacity: opacity.to(o => 1 - o) as unknown as string,
            transform: transform as unknown as string
          }}
          sx={{
            position: 'absolute',
            height: { md: 300, xs: 200 },
            width: { md: 450, xs: '95%' }
          }}
        >
          <CardMedia
            image={imageUrl}
            sx={{
              height: { md: 220, xs: 145 },
              width: { md: 450, xs: '100%' }
            }}
            component='img'
          />
          <CardContent
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: { md: 40, xs: 20 }
            }}
          >
            {isLoading ? (
              <CircularProgress size='2rem' color='warning' sx={{ mr: 1.5 }} />
            ) : (
              <CircleIcon
                sx={{ mr: 1.5, color: isRunning ? 'green' : 'red' }}
              />
            )}
            <Typography
              variant='h3'
              fontSize={{ md: 40, xs: 30 }}
              fontFamily='Kanit'
            >
              {name.toUpperCase()}
            </Typography>
          </CardContent>
        </Card>
        <Card
          component={animated.div}
          style={{
            opacity: opacity as unknown as string,
            transform: transform as unknown as string,
            //@ts-ignore
            rotateX: '180deg'
          }}
          sx={{
            height: { md: 300, xs: 200 },
            width: { md: 450, xs: '95%' },
            position: 'absolute',
            bgcolor: '#f8f8f8'
          }}
        >
          <CardContent
            sx={{
              mt: { md: 5, xs: 3 },
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <Typography
              variant='h3'
              fontSize={{ md: 48, xs: 36 }}
              align='center'
              fontFamily='Kanit'
            >
              {name.toUpperCase()}
            </Typography>
            <Typography
              fontSize={{ md: 34, xs: 28 }}
              variant='h4'
              align='center'
              fontFamily='Kanit'
              display='flex'
              alignItems='center'
              color={isLoading ? '#ed6e05' : isRunning ? 'green' : 'red'}
            >
              {isLoading ? (
                <>
                  <CircularProgress
                    size='2rem'
                    color='warning'
                    sx={{ mr: 1.5, display: { md: 'block', xs: 'none' } }}
                  />
                  <CircularProgress
                    size='1.4rem'
                    color='warning'
                    sx={{ mr: 1.4, display: { xs: 'block', md: 'none' } }}
                  />
                  LOADING
                </>
              ) : (
                <>
                  <CircleIcon
                    sx={{ mr: 1.5, color: isRunning ? 'green' : 'red' }}
                  />
                  {isRunning ? 'RUNNING' : 'STOPPED'}
                </>
              )}
            </Typography>
            <Box mt={{ md: 4, xs: 1.5 }}>
              {isRunning && visitBtn && (
                <Link
                  component='a'
                  href={visitUrl}
                  target='_blank'
                  sx={{ display: flipped ? 'inline' : 'none' }}
                >
                  <Button
                    variant='outlined'
                    size='large'
                    color='success'
                    sx={{ ml: 1 }}
                  >
                    {visitBtnName}
                  </Button>
                </Link>
              )}
              {detailBtn && (
                <RouterLink
                  to={detailUrl as string}
                  style={{ display: flipped ? 'inline' : 'none' }}
                >
                  <Button
                    variant='outlined'
                    size='large'
                    color={isRunning ? 'success' : 'error'}
                    sx={{ ml: 1 }}
                  >
                    DETAIL
                  </Button>
                </RouterLink>
              )}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Tooltip>
  )
}
