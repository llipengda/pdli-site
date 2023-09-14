import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import axios from 'axios'
import ServiceCard from './ServiceCard'
import server from '../../../server'
import ServiceObjs from './ServiceObjs'

const initServiceStatus: { [key in keyof typeof ServiceObjs]: string } = {} as {
  [key in keyof typeof ServiceObjs]: string
}
for (let service in ServiceObjs) {
  ;(initServiceStatus as { [key: string]: string })[service] = 'loading'
}

export default function ServicesIndex() {
  const [serviceStatus, setServiceStatus] = useState(initServiceStatus)

  const getServicesStatus = () => {
    Object.entries(ServiceObjs).forEach(([key, value]) => {
      if (value.name === 'onedrive') {
        setServiceStatus(s => ({ ...s, [key]: 'running' }))
        return
      }
      axios.get(`${server}/ServiceStatus/Get?name=${value.name}`).then(
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
    <Grid
      container
      maxWidth='lg'
      rowGap={{ md: 4, xs: 1 }}
      mx={2}
      my={{ md: 0, xs: 2 }}
    >
      {Object.keys(serviceStatus).map(service => (
        <Grid item md={6} xs={12} key={service}>
          <ServiceCard
            //@ts-ignore
            status={serviceStatus[service]}
            //@ts-ignore
            {...ServiceObjs[service]}
          />
        </Grid>
      ))}
    </Grid>
  )
}
