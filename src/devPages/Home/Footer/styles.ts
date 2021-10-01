import { motion } from 'framer-motion'
import styled from 'styled-components'

const Style = styled(motion.footer)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 100vw;
  padding: 48px;

  font-size: ${({ theme }) => theme.font.medium};
  background-color: ${({ theme }) => theme.colors.quaternary};

  a {
    color: #8f00ff;
  }

  div + div {
    margin-top: 16px;
    text-align: center;
  }
`

export default Style
