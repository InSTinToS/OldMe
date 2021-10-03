import Style, { Avatar } from './styles'
import { forwardRef } from 'react'

import profile from 'assets/profile.jpg'

import Perspective from 'components/Perspective'
import Github from 'components/Github'

interface ProfileProps {}

const Profile = forwardRef<any, ProfileProps>(({}, ref) => (
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
    </article>
  </Style>
))

export default Profile
