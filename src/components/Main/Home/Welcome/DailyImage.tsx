import React, { useState, useEffect } from 'react'
import { Box, Card, CardMedia, CircularProgress, Tooltip } from '@mui/material'

const DailyImage: React.FC = () => {
  const [image, setImage] = useState<string>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchImage()
  }, [])

  const fetchImage = async () => {
    setLoading(true)
    const res = await fetch('https://picsum.photos/300/240')
    const blob = await res.blob()
    const imageObjectURL = URL.createObjectURL(blob)
    setImage(imageObjectURL)
    setLoading(false)
  }

  return (
    <Card
      sx={{
        maxHeight: { xs: 190, md: 240 },
        width: { sm: 300, xs: '60%' },
        mb: { md: 0, xs: 4 },
        cursor: loading ? 'inherit' : 'pointer'
      }}
      onClick={fetchImage}
    >
      {loading ? (
        <Box
          height={{ xs: 190, md: 240 }}
          width={{ sm: 300, xs: '60%' }}
          ml={{ xs: 5, sm: 0 }}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <CircularProgress />
        </Box>
      ) : (
        <Tooltip title='a random image - click to refresh' arrow>
          <CardMedia component='img' image={image} alt='Random image' />
        </Tooltip>
      )}
    </Card>
  )
}

export default DailyImage
