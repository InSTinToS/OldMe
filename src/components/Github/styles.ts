import styled from 'styled-components'

const Style = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border-radius: 8px;

  transition: all 1s ease-in-out;
  box-shadow: 4px 8px 10px 0px black;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.tertiary};

  &:hover {
    transform: scale(1.1);
  }
`

export default Style
