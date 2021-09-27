import { motion } from 'framer-motion'
import styled from 'styled-components'

const Style = styled(motion.footer)`
  width: 100vw;
  height: 30vh;

  background-color: ${({ theme }) => theme.colors.quaternary};
`

export default Style
