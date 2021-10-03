import { motion } from 'framer-motion'
import styled from 'styled-components'

const Style = styled(motion.main)`
  height: 0px;
  min-width: 320px;

  section {
    width: 100vw;
    min-width: 320px;

    background-color: ${({ theme }) => theme.colors.secondary};
  }

  #above section {
    position: relative;
    padding: calc(67px + 24px) 0px;

    min-height: 100vh;

    h2 {
      font-size: ${({ theme }) => theme.font.big};
    }
  }

  audio {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);

    background-color: transparent;
  }

  @media screen and (min-width: 700px) {
    audio {
      left: 24px;
      transform: translateX(0%);
    }
  }
`

export default Style
