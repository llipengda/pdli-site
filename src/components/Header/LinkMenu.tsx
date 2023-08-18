import { Box, Avatar, Menu, MenuItem, Typography, Link } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import React from 'react'

export default function LinkMenu() {
  const [anchorElBtnNav, setAnchorElBtnNav] =
    React.useState<HTMLElement | null>(null)

  const handleOpenNavBtnMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElBtnNav(event.currentTarget)
  }

  const handleCloseNavBtnMenu = () => {
    setAnchorElBtnNav(null)
  }

  return (
    <Box>
      <Avatar
        sx={{
          mr: 2,
          width: 35,
          height: 35,
          '&:hover': {
            cursor: 'pointer'
          },
          display: {
            md: 'none',
            xs: 'flex'
          }
        }}
        src='/favicon.ico'
        variant='rounded'
        aria-controls='menu-iconbtns'
        aria-haspopup='true'
        onClick={handleOpenNavBtnMenu}
      />
      <Menu
        id='menu-iconbtns'
        open={Boolean(anchorElBtnNav)}
        anchorEl={anchorElBtnNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        onClose={handleCloseNavBtnMenu}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <MenuItem sx={{ '&:focus': { bgcolor: 'initial' } }}>
          <Link
            href='https://github.com/llipengda/pdli-site'
            target='_blank'
            underline='none'
            display='flex'
            onClick={handleCloseNavBtnMenu}
            columnGap={1}
            color='inherit'
          >
            <GitHubIcon />
            <Typography>GitHub</Typography>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            href='mailto:lipengda2@outlook.com'
            onClick={handleCloseNavBtnMenu}
            underline='none'
            display='flex'
            columnGap={1}
            color='inherit'
          >
            <EmailIcon />
            <Typography>Email</Typography>
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  )
}
