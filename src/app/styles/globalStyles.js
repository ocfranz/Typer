import { createGlobalStyle } from "styled-components";

import GilroyBoldWoff from '../assets/fonts/Gilroy-Bold.woff';
import GilroyBoldWoff2 from '../assets/fonts/Gilroy-Bold.woff2';
import GilroyLightWoff from '../assets/fonts/Gilroy-Light.woff';
import GilroyLightWoff2 from '../assets/fonts/Gilroy-Light.woff2'; 
import GilroyRegularWoff from '../assets/fonts/Gilroy-Regular.woff'; 
import GilroyRegularWoff2 from '../assets/fonts/Gilroy-Regular.woff2'; 

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Gilroy';
        src: url(${GilroyRegularWoff2}) format('woff2'),
            url(${GilroyRegularWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url(${GilroyLightWoff2}) format('woff2'),
            url(${GilroyLightWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url(${GilroyBoldWoff2}) format('woff2'),
            url(${GilroyBoldWoff}) format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    body, html{
        border : 0;
        margin :0;
        padding: 0;
    }

    body{
        height: 100%;
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        -webkit-transition: background-color 0.5s linear;
        -moz-transition:  background-color 0.5s linear;
        -o-transition: background-color 0.5s linear;
        transition:  background-color 0.5s linear;
    }
    
    *{
        font-family: 'Gilroy';
    }
    [contenteditable][placeholder]:empty:before {
        content: attr(placeholder);
        position: absolute;
        color: ${({ theme }) => theme.contentEditable};
        background-color: transparent;
    }
`
export default GlobalStyles;
