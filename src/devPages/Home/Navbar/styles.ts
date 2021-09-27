import { motion } from 'framer-motion'
import styled from 'styled-components'

const Style = styled.ul`
  display: flex;
  justify-content: space-evenly;

  padding: 24px;

  background-color: ${({ theme }) => theme.colors.quaternary};

  li {
    cursor: pointer;
  }
`

export default Style
