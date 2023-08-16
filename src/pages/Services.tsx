import { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import axios from 'axios'
import ServiceCard from '../components/Main/Services/ServiceCard'
import ServiceObjs from '../components/Main/Services/ServiceObjs'
import server from '../server'

const initServiceStatus: { [key in keyof typeof ServiceObjs]: string } = {} as {
  [key in keyof typeof ServiceObjs]: string
}
for (let service in ServiceObjs) {
  ;(initServiceStatus as { [key: string]: string })[service] = 'loading'
}

export default function Services() {
  const [serviceStatus, setServiceStatus] = useState(initServiceStatus)

  const getServicesStatus = () => {
    Object.entries(ServiceObjs).forEach(([key, value]) => {
      if (value.name === 'onedrive') {
        setServiceStatus(s => ({ ...s, [key]: 'running' }))
        return
      }
      axios.get(`${server}/ServiceStatus/${value.name}`).then(
        response => {
          if (response.data.success == true) {
            setServiceStatus(s => ({
              ...s,
              [key]: response.data.status.toLowerCase()
            }))
          }
        },
        error => console.log(error)
      )
    })
  }

  useEffect(getServicesStatus, [])

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
      <Box
        mt={{ md: 8, xs: 5 }}
        mb={{ md: 8, xs: 5 }}
        display='flex'
        justifyContent='center'
        flexDirection='row'
        alignItems='center'
        columnGap={0}
      >
        <Box>
          <Typography
            variant='h1'
            fontWeight={400}
            fontFamily="'Candal',Helvetica,Arial,Lucida,sans-serif"
            fontSize={{ md: 96, xs: 45 }}
            sx={{
              background: 'linear-gradient(to right, #6e45e2 0%, #42d4f5 100%)',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            <i>SERVICES&nbsp;</i>
          </Typography>
        </Box>
        <Grid container maxWidth='lg' rowGap={5}>
          <Grid item md={6}>
            <ServiceCard status={serviceStatus.frps} {...ServiceObjs.frps} />
          </Grid>
          <Grid item md={6}>
            <ServiceCard
              status={serviceStatus.onedrive}
              {...ServiceObjs.onedrive}
            />
          </Grid>
          <Grid item md={6}>
            <ServiceCard
              status={serviceStatus.minecraft}
              {...ServiceObjs.minecraft}
            />
          </Grid>
          <Grid item md={6}>
            <ServiceCard
              status={serviceStatus.codeServer}
              {...ServiceObjs.codeServer}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
