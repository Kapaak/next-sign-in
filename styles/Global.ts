import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,*::before,*::after{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    
    :root{
        --dark-blue: #313873;
        --light-blue:#CACBD5;
        --pink: #E662AD;
        --white:#fcfcfc;
        --black:#393939;
        --light-grey:#F7F8FA;

        --main-font:'Titillium Web', sans-serif;

        --button:1.6rem;//tohle mozna budu resit rovnou v tech stylech, at tady tohle neni zbytecne slozity -> takze to pak smaz :)
    }

    html{
        font-size: 62.5%;
    }

    body{
        font-size: 1.6rem;
        font-family: var(--main-font);
    }
`;
