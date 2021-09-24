import styled from 'styled-components'
import { motion } from 'framer-motion'

const Style = styled(motion.main)`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.secondary};

  section {
    min-width: 320px;
  }
`

export default Style
