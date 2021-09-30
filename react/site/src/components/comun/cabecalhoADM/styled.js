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

    height: 6vh;
    width: 18%;
    border: none;
    border-radius: 4vh;
    /* font-size: 2vh; */
    color: #FFF;
    background: none;

    padding: 0;

    transition: 0.65s;
    transition-property: all;

    &:hover{
        
        background-color: #4B4B4B;
        cursor: pointer;
    }
       
        .icon-meuperfil {
            height: 5vh;
            display: flex;
            align-items: center;

            img{
                height: 4.5vh;
            }

        }
        
         .title-meuperfil{
            margin-left: .6vh;
            font-size: 2vh;
        }

`;


