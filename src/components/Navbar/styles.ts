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
    padding: 8px;
    cursor: pointer;
    user-select: none;

    div {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      width: 100%;
      height: 100%;
      cursor: pointer;
      user-select: none;

      span {
        display: none;
      }

      .Icon {
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }
    }

    &:hover {
      background-color: ${({ theme }) => darken(0.1, theme.colors.quaternary)};
    }
  }

  @media screen and (min-width: 500px) {
    li div {
      span {
        display: inline;
      }
    }
  }

  @media screen and (min-width: 700px) {
    li div {
      flex-direction: row;
    }
  }
`

export default Style
