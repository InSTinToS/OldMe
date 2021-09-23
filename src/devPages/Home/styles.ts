import styled from 'styled-components'
import { motion } from 'framer-motion'

const Style = styled(motion.main)`
  section {
    position: relative;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;
  }

  #skills {
    position: absolute;
    top: 100vh;
    z-index: 0;

    background-color: #000000;
  }
`

export default Style
