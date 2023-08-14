import { Box, Link, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#ffffff',
        borderTop: '1px solid #dedede87',
        minHeight: { md: '60px', xs: '30px' }
      }}
    >
      <Typography
        sx={{ color: 'black' }}
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
