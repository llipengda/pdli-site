import React from "react"
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from "react-router-dom"
import pages from "./pages"

export default function PageMenu() {
  const [anchorElNav, setAnchorElNav] = React.useState<HTMLElement | null>(null)

  const navigate = useNavigate()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleNavigate = (page: string) => (event: React.MouseEvent) => {
    event.preventDefault()
    if (page === '/') {
      navigate('/')
    } else {
      navigate(`./${page.toLowerCase()}`)
    }
    handleCloseNavMenu()
  }

  return (
    <Box sx={{ flexGrow: 0.5, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size='large'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleOpenNavMenu}
        sx={{color:'text.primary'}}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {pages.map(page => (
          <MenuItem key={page} onClick={handleNavigate(page)}>
            <Typography textAlign='center'>{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}