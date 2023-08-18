import React from 'react'
import { Box, Skeleton } from '@mui/material'

export default function Loading() {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{
        width: '100%',
        minHeight: 'calc(100vh - 70px)'
      }}
    >
      <Skeleton height='80%' width='80%' variant='rectangular'/>
    </Box>
  )
}
