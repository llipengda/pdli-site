import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button
} from '@mui/material'
import React, { useState } from 'react'
import axios, { AxiosError } from 'axios'
import server from '../../../server'

export default function Login({
  open,
  onClose,
  onSuccessfulLogin
}: {
  open: boolean
  onClose: () => void
  onSuccessfulLogin: () => void
}) {
  const [inputPassword, setInputPassword] = useState('')
  const [err, setErr] = useState('')

  const handleSubscribe = () => {
    if (inputPassword.trim() == '') {
      setErr("Password can't be empty")
      return
    }
    axios
      .post(`${server}/login`, inputPassword, {
        headers: { 'Content-Type': 'application/json' }
      })
      .then(
        response => {
          localStorage.setItem('token', response.data)
          onSuccessfulLogin()
          onClose()
        },
        error => {
          if (error instanceof AxiosError && error.response?.status == 401) {
            setErr('The password is incorrect, please try again!')
          } else {
            console.log(error)
          }
        }
      )
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPassword(event.target.value)
    if (event.target.value != '') {
      setErr('')
    } else {
      setErr("Password can't be empty")
    }
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Authentication</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You must be authenticated to perform this operation.
          <br />
          <span style={{ color: 'red' }}>{err}</span>
        </DialogContentText>
        <TextField
          autoFocus
          margin='dense'
          id='name'
          label='Password'
          type='password'
          fullWidth
          variant='standard'
          value={inputPassword}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubscribe}>Submit</Button>
      </DialogActions>
    </Dialog>
  )
}
