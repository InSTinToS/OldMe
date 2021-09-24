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

  .greenBar {
    grid-area: bar;

    height: 8px;
    width: 100px;
    margin-left: 24px;
    border-radius: 8px;

    background-color: green;
  }

  .yellowBar {
    grid-area: bar;

    height: 8px;
    width: 50px;
    margin-left: 24px;
    border-radius: 8px;

    background-color: yellow;
  }

  .redBar {
    grid-area: bar;

    height: 8px;
    width: 25px;
    margin-left: 24px;
    border-radius: 8px;

    background-color: red;
  }
`

export default Style
