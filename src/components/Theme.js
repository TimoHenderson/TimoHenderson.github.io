import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const Theme = ({ children }) => {



    const theme = {
        textColor: "white",
        darkest: "#0A2647",
        dark: "#144272",
        light: "#205295",
        lightest: "#2C74B3"
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>);
}

const GlobalStyle = createGlobalStyle`
    body{
        color: ${props => props.theme.textColor};
        background-color: ${props => props.theme.dark};
        line-height: 1.5rem;
    }
    p{
        text-align: justify;
    }

`
export default Theme;