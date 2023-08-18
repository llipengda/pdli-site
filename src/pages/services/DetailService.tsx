import React, { useEffect, useRef, useState } from 'react'
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
import SendIcon from '@mui/icons-material/Send'
import axios from 'axios'
import * as SignalR from '@microsoft/signalr'
import server, { hub } from '../../server'

const postedCmd = { index: 0, data: [] } as {
  index: number
  data: string[]
}

export default function DetailService({ name }: { name: string }) {
  const [status, setStatus] = useState('loading')
  const [log, setLog] = useState('')
  const [inputCmd, setInputCmd] = useState('')

  const connection = new SignalR.HubConnectionBuilder()
    .withUrl(hub)
    .withAutomaticReconnect()
    .build()

  connection.on(
    'receiveLog',
    ({ service, message }: { service: string; message: string }) => {
      if (service.toLowerCase() === name.toLowerCase()) {
        setLog(log => log + message + '\n')
      }
    }
  )

  useEffect(() => {
    connection
      .start()
      .then()
      .catch(error => console.log(error))
    return () => {
      connection
        .stop()
        .then()
        .catch(error => console.log(error))
    }
  }, [])

  useEffect(() => {
    getStatus()
    getLog()
  }, [])

  const scrollEnd = () => {
    if (logRef.current != null) {
      const scrollHeight = logRef.current.scrollHeight
      const clientHeight = logRef.current.clientHeight
      logRef.current.scrollTop = scrollHeight - clientHeight
    }
  }

  useEffect(scrollEnd, [log])

  const logRef = useRef<HTMLDivElement>(null)

  const getStatus = () => {
    axios.get(`${server}/ServiceStatus/Get?name=${name}`).then(
      response => setStatus(response.data.status),
      error => console.log(error)
    )
  }

  const getLog = () => {
    axios.get(`${server}/${name.replace('-', '')}/GetLog`).then(
      response => setLog(response.data.log),
      error => {}
    )
  }

  const handleStart = () => {
    setLog('')
    axios
      .post(`${server}/${name.replace('-', '')}/Start`)
      .then(
        response => {
          if (!response.data.success) {
            console.log(response.data.err)
          }
        },
        error => console.log(error)
      )
      .finally(() => getStatus())
  }

  const handleStop = () => {
    axios
      .post(`${server}/${name.replace('-', '')}/Stop`)
      .then(
        response => {
          if (!response.data.success) {
            console.log(response.data.err)
          }
        },
        error => console.log(error)
      )
      .finally(() => getStatus())
  }

  const handlePostCmd = (cmd: string) => () => {
    setInputCmd('')
    if (cmd == '') {
      return
    }
    postedCmd.index = postedCmd.data.push(cmd)
    console.log(postedCmd)
    axios
      .post(`${server}/${name.replace('-', '')}/PostCmd?cmd=${cmd}`)
      .then(
        response => {},
        error => console.log(error)
      )
      .finally(() => getLog())
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.code) {
      case 'Enter':
        handlePostCmd(inputCmd)()
        break
      case 'ArrowUp':
        event.preventDefault()
        if (postedCmd.index > 0 && postedCmd.index <= postedCmd.data.length) {
          setInputCmd(postedCmd.data[--postedCmd.index])
        }
        break
      case 'ArrowDown':
        event.preventDefault()
        if (postedCmd.index + 1 < postedCmd.data.length) {
          setInputCmd(postedCmd.data[++postedCmd.index])
        } else if (postedCmd.index + 1 === postedCmd.data.length) {
          setInputCmd('')
          postedCmd.index++
        }
    }
  }

  const isLoading = status.toLowerCase() == 'loading'
  const isRunning = status.toLowerCase() == 'running'

  return (
    <Box
      display='flex'
      flexDirection='column'
      width='100%'
      p={{ md: 5, xs: 2 }}
      pt={{ md: 7, xs: 2 }}
      alignSelf='flex-start'
      alignItems={{ md: 'flex-start', xs: 'center' }}
      alignContent='flex-start'
    >
      <Typography variant='h2' fontSize={{ md: 60, xs: 50 }} fontFamily='Kanit'>
        {name.toUpperCase()}
      </Typography>
      <Typography
        variant='h3'
        align='center'
        fontFamily='Kanit'
        display='flex'
        alignItems='center'
        fontSize={{ md: 48, xs: 32 }}
        color={isLoading ? '#ed6e05' : isRunning ? 'green' : 'red'}
      >
        {isLoading ? (
          <>
            <CircularProgress
              size='3rem'
              color='warning'
              sx={{ mr: 1.5, display: { md: 'block', xs: 'none' } }}
            />
            <CircularProgress
              size='1.5rem'
              color='warning'
              sx={{ mr: 1.5, display: { xs: 'block', md: 'none' } }}
            />
            LOADING
          </>
        ) : (
          <>
            <CircleIcon sx={{ mr: 1, color: isRunning ? 'green' : 'red' }} />
            {isRunning ? 'RUNNING' : 'STOPPED'}
            {isRunning ? (
              <Button
                variant='outlined'
                color='error'
                sx={{ ml: 1.5 }}
                onClick={handleStop}
              >
                STOP
              </Button>
            ) : (
              <Button
                variant='outlined'
                color='success'
                sx={{ ml: 1.5 }}
                onClick={handleStart}
              >
                START
              </Button>
            )}
          </>
        )}
      </Typography>
      <Paper
        sx={{
          width: { md: '95%', xs: '88%' },
          mt: { md: 4, xs: 2 },
          p: { md: 2, xs: 1 },
          height: { md: 300, xs: 150 },
          overflow: 'auto'
        }}
        ref={logRef}
      >
        <Typography
          display='flex'
          variant='body1'
          fontFamily='Menlo, Monaco, Consolas, "Ubuntu Mono", "DejaVu Sans Mono", "Liberation Mono", "Fira Mono", "微软雅黑", monospace'
          whiteSpace='pre-line'
        >
          {log}
        </Typography>
      </Paper>
      <Grid container width='95%' wrap='nowrap'>
        <Grid item md={11}>
          <TextField
            autoComplete='off'
            value={inputCmd}
            fullWidth
            label='Command'
            margin='normal'
            size='small'
            disabled={!isRunning}
            sx={{ bgcolor: 'white' }}
            onChange={event => setInputCmd(event.target.value)}
            onKeyDown={handleKeyDown}
          />
        </Grid>
        <Grid item md={1}>
          <Button
            startIcon={<SendIcon />}
            variant='contained'
            sx={{ mt: 2, ml: 1 }}
            disabled={!isRunning}
            onClick={handlePostCmd(inputCmd)}
          >
            SEND
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
