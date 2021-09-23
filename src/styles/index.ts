import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;

    body {
      font-size: 1.6rem;
      overflow-x: hidden;
      
      color: ${({ theme }) => theme.colors.tertiary};

      * {
        font-weight: normal
      }

      h1, h2, h3, h4, h5, h6 {
        text-align: center;
      }

      a {    
        text-decoration: none;
      }

      li {
        list-style-type: none;
      }

      h1 {
        font-size: ${({ theme }) => theme.font.medium};
      }

      h2 {
        font-size: ${({ theme }) => theme.font.small};
      }

      p {
        font-size: ${({ theme }) => theme.font.tiny};
      }

      button {
        cursor: pointer;
        
        border: none;
        background-color: transparent;
      }

      input[type="checkbox"] {
        &, &:focus, &:hover {
          box-shadow: initial;
        }
      }
    }
  }
`
