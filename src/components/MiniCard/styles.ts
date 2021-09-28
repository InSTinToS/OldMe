import styled from 'styled-components'

const Style = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;

  grid:
    'avatar title' 50%
    'avatar bar' 50% / 72px auto;

  margin: 24px;
  padding: 24px;
  cursor: pointer;
  width: 320px;
  height: 122px;
  border-radius: 8px;

  border: ${({ theme }) => theme.glass.secondary.border};
  box-shadow: ${({ theme }) => theme.glass.secondary.shadow};
  background: ${({ theme }) => theme.glass.secondary.background};
  backdrop-filter: ${({ theme }) => theme.glass.secondary.backdropFilter};

  &:hover {
    transform: scale(1.1);
  }

  img {
    grid-area: avatar;

    width: 72px;
  }

  .title {
    grid-area: title;

    margin-left: 24px;
    font-size: ${({ theme }) => theme.font.small};
  }

  .bar {
    grid-area: bar;

    height: 8px;
    margin-left: 24px;
    border-radius: 8px;

    &#green {
      width: 100px;

      background-color: green;
    }

    &#yellow {
      width: 50px;

      background-color: yellow;
    }

    &#red {
      width: 25px;

      background-color: red;
    }
  }
`

export default Style
