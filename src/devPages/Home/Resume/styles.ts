import styled from 'styled-components'

const Style = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  div {
    padding-bottom: 48px;
    width: min(864px, 80vw);

    p {
      text-align: left;
      margin-top: 24px;
      text-indent: 24px;
      font-size: ${({ theme }) => theme.font.medium};
    }
  }

  h2 {
    padding-top: 24px;
    font-size: ${({ theme }) => theme.font.big};
  }
`

export default Style
