import { DoubleArrow } from '@mui/icons-material'

export default function NextPage({ nextId }: { nextId: string }) {
  return (
    <DoubleArrow
      sx={{
        position: 'absolute',
        bottom: { md: 30, xs: 20 },
        alignSelf: 'center',
        transform: 'rotate(90deg)',
        '&:hover': {
          cursor: 'pointer'
        }
      }}
      onClick={() => {
        document
          .getElementById(nextId)
          ?.scrollIntoView({
            behavior: 'smooth',
            block: nextId === 'about-me' ? 'nearest' : 'start'
          })
      }}
    />
  )
}
