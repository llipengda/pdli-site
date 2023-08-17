import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Link, { LinkProps } from '@mui/material/Link'
import { ListItemProps } from '@mui/material/ListItem'
import Collapse from '@mui/material/Collapse'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import {
  Link as RouterLink,
  Route,
  Routes,
  useLocation
} from 'react-router-dom'
import { ListItemButton } from '@mui/material'

interface ListItemLinkProps extends ListItemProps {
  to: string
  open?: boolean
}

const breadcrumbNameMap: { [key: string]: string } = {
  '/services': 'SERVICES',
  '/services/minecraft': 'MINECRAFT',
  '/services/code-server': 'CODE-SERVER'
}

function ListItemLink(props: ListItemLinkProps) {
  const { to, open, ...other } = props
  const primary = breadcrumbNameMap[to]

  let icon = null
  if (open != null) {
    icon = open ? <ExpandLess /> : <ExpandMore />
  }

  return (
    <li>
      <ListItemButton component={RouterLink as any} to={to} {...other}>
        <ListItemText primary={primary} />
        {icon}
      </ListItemButton>
    </li>
  )
}

interface LinkRouterProps extends LinkProps {
  to: string
  replace?: boolean
}

function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink as any} />
}

function Page({
  setOpen
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter(x => x)

  if (pathnames.length !== 1) {
    setOpen(true)
  }

  return (
    <Breadcrumbs aria-label='breadcrumb'>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1
        const to = `/${pathnames.slice(0, index + 1).join('/')}`

        return last ? (
          <Typography color='text.primary' key={to}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter underline='hover' color='inherit' to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        )
      })}
    </Breadcrumbs>
  )
}

export default function RouterMenu() {
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(prevOpen => !prevOpen)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Routes>
        <Route path='*' element={<Page setOpen={setOpen} />} />
      </Routes>
      <Box
        sx={{
          bgcolor: 'background.paper',
          mt: 1
        }}
        component='nav'
      >
        <List>
          <ListItemLink to='/services' open={open} onClick={handleClick} />
          <Collapse component='li' in={open} timeout='auto' unmountOnExit>
            <List disablePadding>
              <ListItemLink sx={{ pl: 4 }} to='/services/minecraft' />
              <ListItemLink sx={{ pl: 4 }} to='/services/code-server' />
            </List>
          </Collapse>
        </List>
      </Box>
    </Box>
  )
}
