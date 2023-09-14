import React, { useState, useEffect } from 'react'
import {
  Card,
  Typography,
  Box,
  CircularProgress,
  IconButton,
  Alert,
  Snackbar,
  Tooltip
} from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh'
import FileCopyIcon from '@mui/icons-material/FileCopy'

const DailyQuote: React.FC = () => {
  const [quote, setQuote] = useState(['', ''])
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    fetchQuote()
  }, [])

  const fetchQuote = async () => {
    setLoading(true)
    const res = await fetch('https://api.quotable.io/random')
    const data = await res.json()
    setQuote([data.content, data.author])
    setLoading(false)
  }

  const copyQuote = async () => {
    await navigator.clipboard.writeText(quote[0] + ' ' + quote[1])
    setOpen(true)
  }

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <Card
      sx={{
        width: { md: 500, xs: '60%' },
        m: '0 auto',
        mt: { md: 12, xs: 5 },
        pt: { md: 2, xs: 1 },
        pb: { md: 2, xs: 1 },
        pl: { md: 3, xs: 2.5 },
        pr: { md: 3, xs: 2.5 },
        maxHeight: { xs: 140, md: 'none' },
        mb: 8
      }}
      elevation={2}
    >
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        mb={{ md: 1.5, xs: 0.5 }}
        borderBottom='1px solid #dedede97'
      >
        <Typography
          variant='h5'
          fontWeight={700}
          fontSize={{ xs: '1rem', md: '1.7rem' }}
          noWrap
        >
          Daily Quote
        </Typography>
        <Box display={{ xs: 'flex', md: 'none' }}>
          <Tooltip title='refresh'>
            <IconButton onClick={fetchQuote} aria-label='refresh quote'>
              <RefreshIcon sx={{ width: 20, color: 'text.primary' }} />
            </IconButton>
          </Tooltip>
          <Tooltip title='copy'>
            <IconButton onClick={copyQuote} aria-label='copy quote'>
              <FileCopyIcon sx={{ width: 20, color: 'text.primary' }} />
            </IconButton>
          </Tooltip>
        </Box>
        <Box display={{ xs: 'none', md: 'flex' }}>
          <Tooltip title='refresh' arrow placement='top'>
            <IconButton onClick={fetchQuote} aria-label='refresh quote'>
              <RefreshIcon sx={{ color: 'text.primary' }} />
            </IconButton>
          </Tooltip>
          <Tooltip title='copy' arrow placement='top'>
            <IconButton onClick={copyQuote} aria-label='copy quote'>
              <FileCopyIcon sx={{ color: 'text.primary' }} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      {loading ? (
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          height={100}
        >
          <CircularProgress sx={{ mb: 4 }} />
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            maxHeight: { xs: 100, md: 500 }
          }}
        >
          <Typography
            variant='h6'
            fontSize={{ xs: '0.9rem', md: '1.3rem' }}
            lineHeight={1.2}
          >
            {quote[0]}
          </Typography>
          <Typography
            variant='h6'
            textAlign='right'
            fontSize={{ xs: '0.8rem', md: '1.2rem' }}
          >
            {quote[1]}
          </Typography>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity='success'
              sx={{ width: '100%' }}
            >
              Copied!
            </Alert>
          </Snackbar>
        </Box>
      )}
    </Card>
  )
}

export default DailyQuote
