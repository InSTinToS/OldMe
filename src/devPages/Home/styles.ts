import styled from 'styled-components'
import { motion } from 'framer-motion'

const Style = styled(motion.main)`
  height: 0px;
  background-color: ${({ theme }) => theme.colors.secondary};

  section {
    width: 100vw;
    min-width: 320px;
  }
`

export default Style
