import styled from 'styled-components';
import BackGroundFiltro from '../../../assets/images/imgemfundo_filtrobusca.svg'


const SelectRow = styled.select`
    border: none;
    border-radius: 0.5em;
    width: 49%;
    fill: #FFF;
    background-image: none;

    padding: .5em;

    background-color: #FAD41B;
    font: 1em Montserrat;

        /* svg{
            height: 1vh;
            color: #FFF;
        } */
`;

const Select = styled.select`
    border: none;
    border-radius: 0.5em;
    width: 100%;
    padding: .5em;

    background-color: #FAD41B;
    font: 1em Montserrat;
`;

const Button = styled.button`
    border: none;
    border-radius: 0.5em;

    background-color: #000;
    color: #fff;
    font: 1em Montserrat;

    padding: 0;
    width: 30%;
    height: 100%;
    /* margin-top: 2vh; */
    text-align: center; 
    transition: 0.5s;
    transition-property: box-shadow, background-color;

    &:hover {
        box-shadow: 5px 5px 10px rgba(0, 0, 0, .30);
        background-color: rgba(0, 0, 0, 0.719);
        cursor: pointer;
    }


    @media (max-width: 650px){

        &{      
            width: 100%;

        }

    }
`;

const BoxFiltro = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: 1.5vh 1.5vh 2vh rgba(0, 0, 0, .36);
    transition: 0.7s;
    transition-property: box-shadow;

    &:hover{
        
        box-shadow: 3vh 3vh 5vh rgba(0, 0, 0, 0.5);
    }

    background-image: url(${BackGroundFiltro});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #fff;
    border-radius: 1em;

    padding: 1.5em;
    width: 49em;
    /* min-height: 50vh; */

    .TituloFiltro{
        text-align: center;
        font-size: 1.7em;
    }

    .FiltroBusca{
        display: flex;
        flex-direction: column;
        justify-content: center;

        margin-top: 1.3em;
        width: 100%;
        /* height: 38vh; */

    }   .FiltroBusca div{
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;    
            font-size: 1em;

            height: 3em;

            &:nth-child(4){
                margin: .8em 0;
            }
            
        }

    .ButtonForm {
        justify-content: center !important;
    }

    @media (max-width: 600px){ padding: 1em;  }

    @media (max-width: 950px){
        &{
            width: 100%;
        }

    }

    @media (max-width: 700px){
        &{      
            width: 100%;

            background-image: none;
            background-color: #FFF;
        }

    }

    /* @media (max-width: 200px){padding: 1em } */


`;

export {BoxFiltro, SelectRow, Select, Button};