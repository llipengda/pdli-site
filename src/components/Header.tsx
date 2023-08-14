import * as React from 'react'
import { Link, ThemeProvider, Tooltip, createTheme } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
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

  const handleNavigate = (page: string) => (event: React.MouseEvent) => {
    event.preventDefault()
    if (page === '/') {
      navigate('/')
    } else {
      navigate(`./${page.toLowerCase()}`)
    }
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
          position: 'sticky',
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
              component='a'
              href='/'
              sx={{
                mr: 2,
                width: 35,
                height: 35,
                '&:hover': {
                  cursor: 'pointer'
                },
                display: {
                  md: 'flex',
                  xs: 'none'
                }
              }}
              src='/favicon.ico'
              variant='rounded'
              onClick={handleNavigate('/')}
            />
            {/* PDLI.SITE 字样 */}
            <Typography
              component='a'
              href='/'
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
              onClick={handleNavigate('/')}
            >
              PDLI.SITE
            </Typography>
            {/* 移动端显示--PDLI.SITE 字样 */}
            <Typography
              component='a'
              href='/'
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
              onClick={event => {
                event.preventDefault()
                navigate('/')
              }}
            >
              PDLI.SITE
            </Typography>
            {/* 按钮 */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map(page => (
                <Link
                  key={page}
                  component='a'
                  href={`./${page.toLowerCase()}`}
                  onClick={handleNavigate(page)}
                >
                  <Button sx={{ my: 2, color: 'initial', display: 'block' }}>
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>
            {/* 移动端--图标 */}
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
            />
            {/* 图标按钮 */}
            <Box
              display={{ md: 'flex', xs: 'none' }}
              flexDirection='row'
              columnGap={1}
            >
              <Tooltip title='GitHub repository'>
                <IconButton
                  href='https://github.com/llipengda/pdli-site'
                  target='_blank'
                  disableRipple
                  sx={{
                    border: '1px solid',
                    borderColor: '#dae2ed',
                    borderRadius: '10px',
                    padding: 1,
                    '&:hover': {
                      borderColor: '#C7D0DD',
                      bgcolor: '#F3F6F9'
                    }
                  }}
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='Email'>
                <IconButton
                  href='mailto:lipengda2@outlook.com'
                  disableRipple
                  sx={{
                    border: '1px solid',
                    borderColor: '#dae2ed',
                    borderRadius: '10px',
                    padding: 1,
                    '&:hover': {
                      borderColor: '#C7D0DD',
                      bgcolor: '#F3F6F9'
                    }
                  }}
                >
                  <EmailIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}
export default Header
