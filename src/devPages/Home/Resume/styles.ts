import styled from 'styled-components'

const Style = styled.section`
  height: 100vh;
  width: 100vw;

  background-color: ${({ theme }) => theme.colors.secondary};

  h2 {
    padding-top: 24px;
    font-size: ${({ theme }) => theme.font.big};
  }
`

export default Style
