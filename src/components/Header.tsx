import * as React from 'react'
import { Link, ListItemIcon, Tooltip } from '@mui/material'
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
  const [anchorElBtnNav, setAnchorElBtnNav] =
    React.useState<HTMLElement | null>(null)
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

  const handleOpenNavBtnMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElBtnNav(event.currentTarget)
  }

  const handleCloseNavBtnMenu = () => {
    setAnchorElBtnNav(null)
  }

  const handleNavigate = (page: string, isNavMenu = false) => (event: React.MouseEvent) => {
    event.preventDefault()
    if (page === '/') {
      navigate('/')
    } else {
      navigate(`./${page.toLowerCase()}`)
    }
    if (isNavMenu) {
      handleCloseNavMenu()
    }
  }

  return (
    <AppBar
      id='header'
      elevation={0}
      sx={{
        bgcolor: `rgba(255,255,255,${scrolled ? '0.9' : '1'})`,
        backdropFilter: 'blur(10px)',
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
          <Box sx={{ flexGrow: 0.5, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
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
                <MenuItem key={page} onClick={handleNavigate(page, true)}>
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
              width: 40,
              height: 40,
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
            variant='h5'
            fontSize={{ lg: 22, xs: 24 }}
            flexGrow={{ xs: 0.5, lg: 0.03 }}
            noWrap
            sx={{
              fontFamily: 'consolas',
              fontWeight: 700,
              color: 'text.primary',
              textDecoration: 'none',
              '&:hover': {
                cursor: 'pointer'
              }
            }}
            onClick={handleNavigate('/')}
          >
            PDLI.SITE
          </Typography>
          {/* 按钮 */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(page => (
              <Link
                underline='none'
                key={page}
                component='a'
                href={`./${page.toLowerCase()}`}
                onClick={handleNavigate(page)}
              >
                <Button
                  sx={{
                    my: 2,
                    color: 'text.primary',
                    display: 'block',
                    fontSize: 14
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          {/* 移动端--图标 */}
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
              <MenuItem dense>
                <Link
                  href='https://github.com/llipengda/pdli-site'
                  target='_blank'
                  onClick={handleCloseNavBtnMenu}
                >
                  <ListItemIcon>
                    <GitHubIcon fontSize='small' sx={{ mr: 1 }} />
                    <span>GitHub</span>
                  </ListItemIcon>
                </Link>
              </MenuItem>
              <MenuItem dense>
                <Link
                  href='mailto:lipengda2@outlook.com'
                  onClick={handleCloseNavBtnMenu}
                >
                  <ListItemIcon>
                    <EmailIcon fontSize='small' sx={{ mr: 1 }} />
                    <span>Email</span>
                  </ListItemIcon>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
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
  )
}
export default Header
