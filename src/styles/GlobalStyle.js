import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.sansserif};

    h1 {
        font-size: 36px;
    }
    h2 {
        font-size: 28px;
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

    .word {
        &-an {
            display: inline-block;
            text-align: left;
            margin: 10px;
            margin-left: 0;
            font-family: ${(props) => props.theme.cursive};
            font-size: 28px;
            background-color: ${(props) => props.theme.fill1};
            padding: 5px;
        }
        &-en {
            display: inline-block;
            text-align: left;
            margin: 10px;
            margin-left: 0;
            font-family: ${(props) => props.theme.sansserif};
            font-size: 18px;
            opacity: 0.8;
        }
    }

    .graphic-desc {
        display: inline-block;
        text-align: left;
        font-family: ${(props) => props.theme.sansserif};
        font-size: 14px;
        opacity: 0.8;
        margin: 10px;
        margin-left: 0;
    }

    @media (${(props) => props.theme.breakpointMedium}) {
        h1 {
            font-size: 48px;
        }
        h2 {
            font-size: 36px;
        }
    }
  }
`;

export default GlobalStyle;
