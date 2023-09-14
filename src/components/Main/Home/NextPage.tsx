import { useEffect, useState } from 'react'
import { DoubleArrow } from '@mui/icons-material'

const elements = ['home', 'welcome', 'about-me', 'links', 'comments']

export default function NextPage({ nextId }: { nextId: string }) {
  const [elementsTop, setElementsTop] = useState<{ [key: string]: number }>({})

  const calcTop = () => {
    const newElementsTop: { [key: string]: number } = {}
    elements.forEach(
      element =>
        (newElementsTop[element] = document
          .getElementById(element)!
          .getBoundingClientRect().top)
    )
    setElementsTop(newElementsTop)
  }

  useEffect(() => {
    calcTop()
    window.addEventListener('resize', calcTop)
    return () => window.removeEventListener('resize', calcTop)
  }, [])

  return (
    <DoubleArrow
      sx={{
        color: 'text.primary',
        position: 'absolute',
        bottom: { md: 30, xs: 20 },
        alignSelf: 'center',
        transform: 'rotate(90deg)',
        '&:hover': {
          cursor: 'pointer',
          color: 'primary.main'
        }
      }}
      onClick={() =>
        window.scrollTo({
          top: elementsTop[nextId] - elementsTop[elements[0]],
          behavior: 'smooth'
        })
      }
    />
  )
}
