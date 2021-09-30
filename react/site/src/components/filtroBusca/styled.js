import styled from 'styled-components';
import BackGroundFiltro from '../../assets/images/imgemfundo_filtrobusca.svg'


const SelectRow = styled.select`
    border: none;
    border-radius: 1vh;
    width: 49%;
    fill: #FFF;
    background-image: none;

    padding: 1.2vh;

    background-color: #FAD41B;
    font: 1em Montserrat;

        svg{
            height: 1vh;
            color: #FFF;
        }
`;

const Select = styled.select`
    border: none;
    border-radius: 1vh;
    width: 100%;
    padding: 1.2vh;

    background-color: #FAD41B;
    font: 1em Montserrat;
`;

const Button = styled.button`
    border: none;
    border-radius: 1vh;

    background-color: #000;
    color: #fff;
    font: 1em Montserrat;

    padding: 0;
    width: 25%;
    height: 100%;
    margin-top: 2vh;
    text-align: center; 
    transition: 0.5s;
    transition-property: box-shadow, background-color;

    &:hover {
        box-shadow: 5px 5px 10px rgba(0, 0, 0, .30);
        background-color: rgba(0, 0, 0, 0.719);
        cursor: pointer;
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
    border-radius: 1.5vh;

    padding: 3.5vh;
    width: 55%;
    min-height: 50vh;

    .TituloFiltro{
        text-align: center;
        font-size: 4vh;
    }

    .FiltroBusca{
        display: flex;
        flex-direction: column;
        justify-content: center;

        margin-top: 1vh;
        width: 100%;
        height: 38vh;

    }   .FiltroBusca div{
            display: flex;
            justify-content: space-between;
            margin-bottom: 1.3vh;    
            font-size: 2.5vh;

            height: 17%;
        }

    .ButtonForm {
        justify-content: center !important;
    }






`;

export {BoxFiltro, SelectRow, Select, Button};