import Style, { Avatar } from './styles'
import { forwardRef } from 'react'

import profile from 'assets/spider.jpg'

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
        Universidade Anhembi Morumbi (5 Semestre) <br />
      </p>

      <Perspective>
        <Github />
      </Perspective>
    </article>
  </Style>
))

export default Profile
