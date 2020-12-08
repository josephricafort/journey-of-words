import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.sansserif};

    h1 {
        font-size: 56px;
    }
    h2 {
        font-size: 36px;
    }
    h3 {
        font-size: 24px;
    }
    h4 {
        font-size: 20px;    
    }
    p {
        font-size: 16px;
        line-height: 22px;
    }
    h1, h2, h3 {
        font-family: ${(props) => props.theme.serif};
    }

    @media (max-width: 500px) {
        h1 {
            font-size: 36px;
        }
        h2 {
            font-size: 28px;
        }
    }
  }
`;

export default GlobalStyle;
