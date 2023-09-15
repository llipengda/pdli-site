import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link, Tooltip, useTheme } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { Avatar } from '@mui/material'
import PageMenu from './PageMenu'
import LinkMenu from './LinkMenu'
import pages from './pages'
import { colorModeContext } from '../../App'

const Header: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false)

  const navigate = useNavigate()

  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  const colorMode = React.useContext(colorModeContext)

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () =>
    setScrolled(document.documentElement.scrollTop > 70)

  const handleNavigate = (page: string) => (event: React.MouseEvent) => {
    event.preventDefault()
    if (page === '/') {
      navigate('/')
    } else {
      navigate(`./${page.toLowerCase()}`)
    }
  }

  return (
    <AppBar
      id='header'
      elevation={0}
      sx={{
        bgcolor: isDark ? 'background.default' : '#ffffff90',
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        borderBottom: isDark ? '1px solid #68686868' : '1px solid #dedede87',
        transition: 'all 0.5s ease-out',
        minHeight: 60,
        top: 0
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <PageMenu />
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
          <Typography
            component='a'
            href='/'
            variant='h5'
            fontSize={{ md: 22, xs: 24 }}
            flexGrow={{ xs: 0.5, md: 0.03 }}
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
          <LinkMenu />
          <Box
            display={{ md: 'flex', xs: 'none' }}
            flexDirection='row'
            columnGap={1}
          >
            <Tooltip title={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
              <IconButton
                onClick={colorMode.toggleColorMode}
                disableRipple
                sx={{
                  color: 'text.primary',
                  border: '1px solid',
                  borderColor: isDark ? '#3e3e3e' : '#dae2ed',
                  borderRadius: '10px',
                  padding: 1,
                  '&:hover': {
                    borderColor: isDark ? '#505050' : '#C7D0DD',
                    bgcolor: isDark ? '#303030' : '#F3F6F9'
                  }
                }}
              >
                {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Tooltip>
            <Tooltip title='GitHub repository'>
              <IconButton
                href='https://github.com/llipengda/pdli-site'
                target='_blank'
                disableRipple
                sx={{
                  color: 'text.primary',
                  border: '1px solid',
                  borderColor: isDark ? '#3e3e3e' : '#dae2ed',
                  borderRadius: '10px',
                  padding: 1,
                  '&:hover': {
                    borderColor: isDark ? '#505050' : '#C7D0DD',
                    bgcolor: isDark ? '#303030' : '#F3F6F9'
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
                  color: 'text.primary',
                  border: '1px solid',
                  borderColor: isDark ? '#3e3e3e' : '#dae2ed',
                  borderRadius: '10px',
                  padding: 1,
                  '&:hover': {
                    borderColor: isDark ? '#505050' : '#C7D0DD',
                    bgcolor: isDark ? '#303030' : '#F3F6F9'
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
