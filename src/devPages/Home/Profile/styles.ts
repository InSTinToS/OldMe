import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Avatar = styled(motion.img)`
  width: 220px;
  height: 220px;

  border-radius: 30%;
  margin-bottom: 24px;

  background-color: ${({ theme }) => theme.colors.tertiary};

  @media screen and (min-width: 1000px) {
    grid-area: avatar;

    margin-bottom: 0px;
    margin-right: 24px;
  }
`

export const Sidebar = styled(motion.div)`
  position: fixed;
  top: 10vh;
  left: 0px;
  z-index: 2;

  width: 72px;
  height: 80vh;
  border-radius: 0 48px 48px 0;

  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  background: rgba(103, 218, 249, 0.4);
  border: 1px solid rgba(103, 218, 249, 0.18);
  box-shadow: 0 8px 32px 0 rgba(103, 218, 249, 0.37);
`

export const SliderItem = styled.div`
  width: min(600px, 80vw);

  .title {
    width: 100%;
    text-align: center;
    font-size: ${({ theme }) => theme.font.big};
  }

  #profile {
    p {
      text-align: center;
      margin-top: 24px;
    }

    @media screen and (min-width: 1000px) {
      display: grid;
      align-items: space-between;
      justify-content: space-between;
      grid:
        'avatar h1'
        'avatar h2'
        'avatar p' / 1fr 2fr;

      h1 {
        grid-area: h1;
      }

      h2 {
        grid-area: h2;
      }

      p {
        grid-area: p;
      }
    }
  }
`

const Style = styled.section`
  #background {
    position: absolute;
    top: 0;
    z-index: 0;

    width: 100vw;
    height: 100vh;
  }
`

export default Style
