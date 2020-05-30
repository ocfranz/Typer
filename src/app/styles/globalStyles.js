import { createGlobalStyle } from "styled-components";


//@import url('https://fonts.googleapis.com/css2?family=Muli:wght@400;500;700&display=swap');
const GlobalStyles = createGlobalStyle`
    

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
        font-family: 'Muli', sans-serif;
    }
    [contenteditable][placeholder]:empty:before {
        content: attr(placeholder);
        position: absolute;
        color: ${({ theme }) => theme.contentEditable};
        background-color: transparent;
    }
`
export default GlobalStyles;
