import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Avatar = styled(motion.img)`
  width: 220px;
  height: 220px;

  border-radius: 50%;

  box-shadow: 4px 4px 10px 0px black;
  background-color: ${({ theme }) => theme.colors.tertiary};

  @media screen and (min-width: 1000px) {
    grid-area: avatar;

    margin-bottom: 0px;
    margin-right: 24px;
  }
`

const Style = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary};

  article {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    height: 80vh;

    background-color: ${({ theme }) => theme.colors.quaternary};

    * + * {
      margin-top: 24px;
    }

    h1 {
      font-size: ${({ theme }) => theme.font.giant};
    }

    h2 {
      margin-top: 0px;
      font-size: ${({ theme }) => theme.font.big};
    }

    p {
      text-align: center;
      font-size: ${({ theme }) => theme.font.medium};
    }

    svg {
      margin-right: 8px;
    }

    #github {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 8px;
      border-radius: 8px;

      transition: all 1s ease-in-out;
      box-shadow: 4px 8px 10px 0px black;
      color: ${({ theme }) => theme.colors.secondary};
      background-color: ${({ theme }) => theme.colors.tertiary};

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`

export default Style
