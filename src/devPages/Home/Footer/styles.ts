import { motion } from 'framer-motion'
import styled from 'styled-components'

const Style = styled(motion.footer)`
  height: 100%;
  width: 100vw;
  opacity: 1;
  height: 30vh;

  background-color: ${({ theme }) => theme.colors.quaternary};
`

export default Style