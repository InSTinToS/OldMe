import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Avatar = styled(motion.img)`
  width: clamp(150px, 30%, 220px);
  height: clamp(150px, 30%, 220px);

  border-radius: 50%;

  box-shadow: ${({ theme }) => theme.glass.tertiary.shadow};
  background-color: ${({ theme }) => theme.colors.tertiary};
`

const Style = styled.section`
  article {
    padding: 24px;

    width: 100%;
    min-height: 80vh;

    background-color: ${({ theme }) => theme.colors.quaternary};

    &,
    .Perspective {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

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
  }
`

export default Style
