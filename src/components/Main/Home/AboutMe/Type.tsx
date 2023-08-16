import React, { useEffect, useState } from 'react'
import TypewriterComponent from 'typewriter-effect'

const Type: React.FC = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const timer = setInterval(calc, 5000)
    return () => clearInterval(timer)
  }, [])

  const calc = () => {
    const current = new Date()
    const target = new Date('2022-09-05T00:00:00')
    const diff = (current as unknown as number) - (target as unknown as number)
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)
    const formatted = `${days}d ${hours}h ${minutes}min ${seconds}s`
    setTime(formatted)
  }

  return (
    <TypewriterComponent
      options={{
        autoStart: true,
        strings: time,
        loop: true,
        deleteSpeed: 500 / time.length
      }}
    />
  )
}

export default Type
