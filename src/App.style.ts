import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%
    }
    body{
        background-size: cover;
        background-color: blue;
        margin: 0;
        padding:0 20px;
        display: flex;
        justify-content: center; 
    }
    *{
        box-sizing: border-box;
    }

`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    > p {
        color:white;
    }
    .score{
        color:white
        font-size:2rem;
        margin 0;
    }

    h1{
        background-size: 100%;
        font-size: 70px;
        text-align: center;
        margin: 20px;
        color: white;
    }

    .start, .next{
        cursor: pointer;
        border: 220 solid black;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding:0 40px;
    }

    .start{
        max-width: 200px;
    }
`