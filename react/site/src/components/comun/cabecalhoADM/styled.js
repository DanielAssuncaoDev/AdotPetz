import styled  from "styled-components";

// Styled Cabeçalho ADM

export const Container = styled.div`
    
    color: #FFF;
    background-color: #000;

    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 10vh;
    padding: 1em 1.5em;


        .logo img{
            height: 6vh;
            cursor: pointer;
        }

`; 

export const Button = styled.button`

    display: flex;
    justify-content: center;
    align-items: center;

    height: 3em;
    /* width: 10em; */
    padding: 0 10px;
    border: none;
    border-radius: 2em;
    /* font-size: 2vh; */
    color: #FFF;
    background: none;

    /* padding: 0; */

    transition: 0.65s;
    transition-property: all;

    &:hover{
        
        background-color: #4B4B4B;
        cursor: pointer;
    }
       
        .icon-meuperfil {
            height: 100%;
            display: flex;
            align-items: center;

            img{
                height: 2em;
            }

        }
        
         .title-meuperfil{
            margin-left: 3px;
            font-size: 1em;
        }

`;


