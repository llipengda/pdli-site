import * as React from 'react'
import { ThemeProvider, createTheme } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { Avatar } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const pages = ['Home', 'Services']

const Header: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<HTMLElement | null>(null)
  const [scrolled, setScrolled] = React.useState(false)

  const navigate = useNavigate()

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () =>
    setScrolled(document.documentElement.scrollTop > 70)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleNavigate = (page: string) => {
    navigate(`./${page.toLowerCase()}`)
  }

  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#ffffff'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        id='header'
        elevation={scrolled ? 1 : 0}
        sx={{
          position:'sticky',
          borderBottom: '1px solid #dedede87',
          transition: 'all 1.5s ease-out',
          minHeight: 60,
          top: 0
        }}
      >
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            {/* 移动端显示--Menu按钮 */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
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
                  <MenuItem
                    key={page}
                    onClick={() => {
                      handleNavigate(page)
                      handleCloseNavMenu()
                    }}
                  >
                    <Typography textAlign='center'>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* 图标 */}
            <Avatar
              sx={{
                mr: 2,
                width: 35,
                height: 35,
                '&:hover': {
                  cursor: 'pointer'
                },
                display: {
                  sm: 'flex',
                  xs: 'none'
                }
              }}
              src='/favicon.ico'
              variant='rounded'
              onClick={() => navigate('/')}
            />
            {/* PDLI.SITE 字样 */}
            <Typography
              variant='h6'
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'consolas',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                '&:hover': {
                  cursor: 'pointer'
                }
              }}
              onClick={() => navigate('/')}
            >
              PDLI.SITE
            </Typography>
            {/* 移动端显示--PDLI.SITE 字样 */}
            <Typography
              variant='h5'
              noWrap
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'consolas',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                '&:hover': {
                  cursor: 'pointer'
                }
              }}
            >
              PDLI.SITE
            </Typography>
            {/* 按钮 */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map(page => (
                <Button
                  key={page}
                  onClick={() => handleNavigate(page)}
                  sx={{ my: 2, color: 'initial', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Avatar
              sx={{
                mr: 2,
                width: 35,
                height: 35,
                '&:hover': {
                  cursor: 'pointer'
                },
                display: {
                  sm: 'none',
                  xs: 'flex'
                }
              }}
              src='/favicon.ico'
              variant='rounded'
              onClick={() => navigate('/')}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}
export default Header
