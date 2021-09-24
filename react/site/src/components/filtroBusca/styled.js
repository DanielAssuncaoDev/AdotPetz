import styled from 'styled-components';
import BackGroundFiltro from '../../assets/images/imgemfundo_filtrobusca.svg'


const SelectRow = styled.select`
    border: none;
    border-radius: 5px;
    width: 49%;
    padding: 8px;

    background-color: #FAD41B;
    font: 1em Montserrat;
`;

const Select = styled.select`
    border: none;
    border-radius: 5px;
    width: 100%;
    padding: 8px;

    background-color: #FAD41B;
    font: 1em Montserrat;
`;

const Button = styled.button`
    border: none;
    border-radius: 5px;

    background-color: #000;
    color: #fff;
    font: 1em Montserrat;

    padding: 10px;
    width: 25%;
    margin-top: 10px;
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

    box-shadow: 3px 3px 15px rgba(0, 0, 0, .36);
    transition: 0.7s;
    transition-property: box-shadow;

    &:hover{
        
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
    }

    background-image: url(${BackGroundFiltro});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #fff;
    border-radius: 10px;

    padding: 2em;
    width: 55%;
    height: auto;

    .TituloFiltro{
        text-align: center;
        font-size: 1.8em;
    }

    .FiltroBusca{
        margin-top: 2em;
        width: 100%;
    }.FiltroBusca div{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .ButtonForm {
        justify-content: center !important;
    }






`;

export {BoxFiltro, SelectRow, Select, Button};