import {
  School,
  Computer,
  VideogameAsset,
  PsychologyAlt
} from '@mui/icons-material'
import { Box, Card, CardMedia, Grid, Typography, useTheme } from '@mui/material'
import { animated, useSpring } from 'react-spring'
import Type from './Type'
import selfie from '../../../../assets/images/home/selfie.png'

export default function FlexTest({ show }: { show: boolean }) {
  const theme = useTheme()

  const animation = useSpring({
    transform: show ? 'translateX(0px)' : 'translateX(-600px)'
  })

  return (
    <animated.div style={animation}>
      <Card elevation={3}>
        <Box
          display='flex'
          flexDirection='column'
          p={2}
          pl={{ md: 6, xs: 3 }}
          pr={{ md: 6, xs: 3 }}
        >
          <Typography
            variant='h1'
            fontWeight={400}
            fontFamily="'Candal',Helvetica,Arial,Lucida,sans-serif"
            fontSize={{ lg: 96, xs: 45 }}
            mb={{ lg: 2, xs: 1 }}
            sx={{
              background: 'linear-gradient(to right, #6e45e2 0%, #42d4f5 100%)',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            ABOUT ME
          </Typography>
          <Typography variant='h3' fontSize={{ lg: 48, xs: 26 }}>
            <strong>Hi There!</strong>
            <span className='wave' role='img' aria-labelledby='wave'>
              👋🏻
            </span>
            <br />
            <span>I am </span>
            <strong style={{ color: theme.palette.primary.light }}>PDLi</strong>
          </Typography>
          <Grid container>
            <Grid item md={7.5} xs={12}>
              <Grid
                container
                mt={{ lg: 0, xs: 0.5 }}
                alignItems='center'
                rowSpacing={{ lg: 2, xs: 1 }}
              >
                <Grid item lg={1} xs={1}>
                  <School sx={{ width: { lg: 24, xs: 15, md: 20 } }} />
                </Grid>
                <Grid item lg={11} xs={11}>
                  <Typography
                    variant='h5'
                    fontSize={{ lg: 24, xs: 16 }}
                    pl={{ lg: 0, xs: 1, md: 0 }}
                  >
                    A student that has been studying <strong>SE</strong> at{' '}
                    <strong>ECNU</strong> for ...
                    <Type />
                  </Typography>
                </Grid>
                <Grid item lg={1} xs={1}>
                  <Computer sx={{ width: { lg: 24, xs: 15, md: 20 } }} />
                </Grid>
                <Grid item lg={11} xs={11}>
                  <Typography
                    variant='h5'
                    fontSize={{ lg: 24, xs: 16 }}
                    pl={{ lg: 0, xs: 1,md: 0  }}
                  >
                    Interested in computer science and programing
                  </Typography>
                </Grid>
                <Grid item lg={1} xs={1}>
                  <VideogameAsset sx={{ width: { lg: 24, xs: 15, md: 20 } }} />
                </Grid>
                <Grid item lg={11} xs={11}>
                  <Typography
                    variant='h5'
                    fontSize={{ lg: 24, xs: 16 }}
                    pl={{ lg: 0, xs: 1,md: 0  }}
                  >
                    Why not enjoy video games?
                  </Typography>
                </Grid>
                <Grid item lg={1} xs={1}>
                  <PsychologyAlt sx={{ width: { lg: 24, xs: 15, md: 20 } }} />
                </Grid>
                <Grid item lg={11} xs={11} sx={{ color: 'text.disabled' }}>
                  <Typography
                    variant='h5'
                    display={{ lg: 'flex', xs: 'none' }}
                    fontSize={{ lg: 24 }}
                    pl={{ lg: 0, xs: 1,md: 0  }}
                  >
                    <s>
                      Crazy about Quantum Thinking
                      <br />
                      (learn more on the right)
                    </s>
                  </Typography>
                  <Typography
                    variant='h5'
                    display={{ lg: 'none', xs: 'flex' }}
                    fontSize={{ xs: 16 }}
                    pl={{ lg: 0, xs: 1 ,md: 0 }}
                  >
                    <s>
                      Crazy about Quantum Thinking
                      <br />
                      (learn more below)
                    </s>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={0.8} xs={0} />
            <Grid item md={3.5} display={{ md: 'block', xs: 'none' }}>
              <Card>
                <CardMedia
                  image={selfie}
                  sx={{
                    height: {lg:300,md:180}
                  }}
                />
              </Card>
              <Typography
                align='center'
                sx={{
                  color: '#939393',
                  mt: 1,
                  fontSize:{md:12,lg:16}
                }}
              >
                <s>A SELFIE</s>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </animated.div>
  )
}
