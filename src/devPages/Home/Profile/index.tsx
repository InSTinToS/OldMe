import Style, { Avatar } from './styles'
import { forwardRef } from 'react'

import useWindowDimensions from 'hooks/useWindowDimensions'

import profile from 'assets/profile.jpg'

import Perspective from 'components/Perspective'
import Github from 'components/Github'

import AudioSpectrum from 'react-audio-spectrum'

interface ProfileProps {}

const Profile = forwardRef<any, ProfileProps>(({}, ref) => {
  const { innerWidth } = useWindowDimensions()

  return (
    <Style ref={ref}>
      <article>
        <Perspective>
          <Avatar src={profile} />
        </Perspective>

        <h1>Miguel Andrade Barreto</h1>

        <h2>Desenvolvedor Front-end</h2>

        <p>
          São Paulo - Brasil <br />
          Engenharia da computação <br />
          Universidade Anhembi Morumbi (6° Semestre) <br />
        </p>

        <Github />

        <AudioSpectrum
          gap={4}
          height={200}
          capHeight={2}
          meterWidth={2}
          capColor='#7C1415'
          meterCount={512}
          id='audio-canvas'
          width={innerWidth}
          audioId='audio-element'
          meterColor={[
            { stop: 0, color: '#b60609' },
            { stop: 1, color: '#B68357' }
          ]}
        />
      </article>
    </Style>
  )
})

export default Profile
