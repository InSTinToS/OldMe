import { darken } from 'polished'
import styled from 'styled-components'

const Style = styled.ul`
  display: flex;
  justify-content: stretch;
  align-items: center;

  height: 67px;
  min-width: 320px;

  border: ${({ theme }) => theme.glass.tertiary.border};
  box-shadow: ${({ theme }) => theme.glass.tertiary.shadow};
  background: ${({ theme }) => theme.glass.tertiary.background};
  backdrop-filter: ${({ theme }) => theme.glass.tertiary.backdropFilter};

  li {
    width: 100%;
    height: 100%;
    cursor: pointer;
    user-select: none;

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: 100%;
      cursor: pointer;
      user-select: none;
    }

    &:hover {
      background-color: ${({ theme }) => darken(0.1, theme.colors.quaternary)};
    }
  }
`

export default Style
