import styled from 'styled-components'

const Style = styled.section`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 48px;
  min-height: 100vh;
  padding-bottom: calc(30vh + 24px);

  background-color: ${({ theme }) => theme.colors.secondary};

  h2 {
    position: absolute;
    top: 24px;

    font-size: ${({ theme }) => theme.font.big};
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: space-evenly;
    justify-content: space-evenly;

    width: 100%;
  }
`

export default Style
