import styled  from "styled-components";

// Styled Cabeçalho ADM

export const Container = styled.div`
    
    color: #FFF;
    background-color: #000;

    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 3em;
    padding: 1em 1.5em;


        .logo img{
            height: 32px;
            cursor: pointer;
        }

`; 

export const Button = styled.button`

    display: flex;
    align-items: center;

    border: none;
    border-radius: 33px;
    color: #FFF;
    background: none;

    padding: 5px 10px;

    &:hover{
        transition: 0.65s;
        background-color: #4B4B4B;
        cursor: pointer;
    }
       
        .icon-meuperfil img{
             height: 20px;
        }
         .title-meuperfil{
            margin-left: 3px;
            font-size: .8em;
        }

`;


