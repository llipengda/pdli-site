import { Box, Link, Typography, useTheme } from '@mui/material'

export default function Footer() {
  const isDark = useTheme().palette.mode === 'dark'

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: isDark ? 'background.default' : '#ffffff90',
        borderBottom: isDark ? '1px solid #68686868' : '1px solid #dedede87',
        minHeight: { md: '60px', xs: '30px' }
      }}
    >
      <Typography
        sx={{ color: 'text.primary' }}
        align='center'
        fontSize={{ md: 16, xs: 12 }}
      >
        <strong>PDLi</strong> &copy; {new Date().getFullYear()} -{' '}
        <Link href='https://beian.miit.gov.cn/' underline='hover'>
          鲁ICP备2023011142号
        </Link>
      </Typography>
    </Box>
  )
}
