import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { Engine, IOptions, RecursivePartial } from 'tsparticles-engine'
import particlesOptions from '../../assets/particles.json'

const Background: React.FC = () => {
  const init = async (main: Engine) => {
    await loadFull(main)
  }

  return (
    <Particles 
      init={init}
      options={particlesOptions as RecursivePartial<IOptions>}
    />
  )
}

export default Background