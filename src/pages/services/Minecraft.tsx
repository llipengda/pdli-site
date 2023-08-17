import React, { useState } from 'react'
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  TextField,
  Typography
} from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import SendIcon from '@mui/icons-material/Send';

export default function Minecraft() {
  const [status, setStatus] = useState('running')

  const isLoading = status.toLowerCase() == 'loading'
  const isRunning = status.toLowerCase() == 'running'

  const log = `[2023-02-28 00:00:00] INFO: Server started
  [2023-02-28 00:01:00] DEBUG: Received request from 192.168.1.1
`

  return (
    <Box
      display='flex'
      flexDirection='column'
      width='100%'
      p={5}
      pt={7}
      alignSelf='flex-start'
      alignItems='flex-start'
      alignContent='flex-start'
    >
      <Typography variant='h2' fontFamily='Kanit'>
        MINECRAFT
      </Typography>
      <Typography
        variant='h3'
        align='center'
        fontFamily='Kanit'
        display='flex'
        alignItems='center'
        color={isLoading ? '#ed6e05' : isRunning ? 'green' : 'red'}
      >
        {isLoading ? (
          <>
            <CircularProgress size='3rem' color='warning' sx={{ mr: 1.5 }} />
            LOADING
          </>
        ) : (
          <>
            <CircleIcon sx={{ mr: 1, color: isRunning ? 'green' : 'red' }} />
            {isRunning ? 'RUNNING' : 'STOPPED'}
            {isRunning ? (
              <Button variant='outlined' color='error' sx={{ ml: 1.5 }}>
                STOP
              </Button>
            ) : (
              <Button variant='outlined' color='success' sx={{ ml: 1.5 }}>
                START
              </Button>
            )}
          </>
        )}
      </Typography>
      <Paper
        sx={{
          width: '85%',
          mt: 4,
          p: 2,
          height: 300,
          overflow: 'auto'
        }}
      >
        <Typography
          display='flex'
          variant='body1'
          fontFamily='Menlo, Monaco, Consolas, "Ubuntu Mono", "DejaVu Sans Mono", "Liberation Mono", "Fira Mono", monospace'
          whiteSpace='pre-line'
        >
          {log}
        </Typography>
      </Paper>
      <Grid container width='85%'>
        <Grid item md={10.875} mr={1}>
          <TextField
            fullWidth
            label='Command'
            margin='normal'
            size='small'
            sx={{ bgcolor: 'white' }}
          />
        </Grid>
        <Grid item md={1}>
          <Button startIcon={<SendIcon />} variant='contained' sx={{mt:2}}>
            SEND
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
