import { motion } from 'framer-motion'
import styled from 'styled-components'

const Style = styled(motion.main)`
  height: 0px;
  min-width: 320px;

  section {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;

    width: 100vw;
    min-width: 320px;

    background-color: ${({ theme }) => theme.colors.secondary};
  }

  #above section {
    position: relative;
    padding-top: calc(67px + 24px);

    min-height: 100vh;

    h2 {
      font-size: ${({ theme }) => theme.font.big};
    }
  }
`

export default Style
