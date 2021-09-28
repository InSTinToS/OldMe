import styled from 'styled-components'

const Style = styled.section`
  position: relative;

  h2 {
    font-size: ${({ theme }) => theme.font.big};
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: space-evenly;
    justify-content: space-evenly;

    width: 100%;
    padding-top: 32px;
  }
`

export default Style
