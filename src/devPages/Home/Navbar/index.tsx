import FixedNavbar from 'components/FixedNavbar'
import { MutableRefObject } from 'hoist-non-react-statics/node_modules/@types/react'
import React from 'react'
import Style from './styles'

interface NavbarProps {
  positionRef: MutableRefObject<HTMLElement>
}

const Navbar = ({ positionRef }: NavbarProps) => {
  return (
    <FixedNavbar positionRef={positionRef}>
      <Style>
        <li>Ínicio</li>
        <li>Tecnologias</li>
        <li>Resumo</li>
        <li>Experiência</li>
      </Style>
    </FixedNavbar>
  )
}

export default Navbar
