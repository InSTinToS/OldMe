import React, { forwardRef } from 'react'
import Style from './styles'

interface FooterProps {}

const Footer = forwardRef<any, FooterProps>(({}, ref) => (
  <Style ref={ref}>
    <div>Autor: Miguel Andrade Barreto</div>

    <div>
      Github: <a href='https://github.com/InSTinToS'>InSTinToS</a>
    </div>

    <div>
      Icons made by{' '}
      <a href='https://www.flaticon.com/authors/ddara' title='dDara'>
        dDara
      </a>
      ,{' '}
      <a
        href='https://www.flaticon.com/authors/dinosoftlabs'
        title='DinosoftLabs'
      >
        DinosoftLabs
      </a>{' '}
      and{' '}
      <a href='https://www.freepik.com' title='Freepik'>
        Freepik
      </a>{' '}
      from{' '}
      <a href='https://www.flaticon.com/' title='Flaticon'>
        www.flaticon.com
      </a>
    </div>

    <div>
      Music by{' '}
      <a href='https://www.youtube.com/watch?v=BXoQoisE9QA&ab_channel=LaloProductionsBeatz'>
        LaloProductionsBeatz
      </a>
    </div>
  </Style>
))

export default Footer
