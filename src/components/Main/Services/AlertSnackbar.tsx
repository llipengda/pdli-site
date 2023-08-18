import React from 'react'
import { Snackbar, Alert } from '@mui/material'

export default function AlertSnackbar({
  open,
  onClose,
  text
}: {
  open: boolean
  onClose: () => void
  text: string
}) {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={onClose}>
      <Alert onClose={onClose} severity='success' sx={{ width: '100%' }}>
        {text}
      </Alert>
    </Snackbar>
  )
}
