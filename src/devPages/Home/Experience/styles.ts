import styled from 'styled-components'

const Style = styled.section`
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.secondary};

  h2 {
    padding-top: 24px;
    font-size: ${({ theme }) => theme.font.big};
  }
`

export default Style
