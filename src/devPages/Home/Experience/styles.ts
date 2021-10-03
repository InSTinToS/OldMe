import styled from 'styled-components'

const Style = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    position: static;
    margin-bottom: 48px;
    font-size: ${({ theme }) => theme.font.big};
  }

  video {
    width: min(1280px, 80vw);
    min-height: 60vh;
  }
`

export default Style
