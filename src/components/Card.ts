import { motion } from 'framer-motion'
import styled from 'styled-components'

const Card = styled(motion.div).attrs({ className: 'Card' })`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  padding: 24px;
  border-radius: 24px;

  border: ${({ theme }) => theme.glass.primary.border};
  box-shadow: ${({ theme }) => theme.glass.primary.shadow};
  background: ${({ theme }) => theme.glass.primary.background};
  backdrop-filter: ${({ theme }) => theme.glass.primary.backdropFilter};
`

export default Card
