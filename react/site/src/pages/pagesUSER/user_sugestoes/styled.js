import styled from 'styled-components';


import fundo from '../../../assets/images/fundoSUGE.svg'


export const Container = styled.div`

.animais-sugeridos{
  padding: 1em 0em 2em 4em;
  display: flex ;
}

.animaisSU{
  padding-top: 1.2em;

  font-size: 1.4em;
  font-weight: 800;
}

.animais-sugeridos img{
    height: 5em;
}

.box-petz{
    display: flex;
    flex-direction: column;

    
}

.box-cima{
    display: flex;
    justify-content: space-evenly;

    padding: 10px 0px 0px 0px;
}

.box-meio{
    display: flex;
    justify-content: space-evenly;
    padding: 1.5em 0px 0px 0px;
}

.box-baixo{
    display: flex;
    justify-content: space-evenly;
    padding: 1.5em 0px 0px 0px;
}
`;

    export const ContainerBusca = styled.div`

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        padding-left: 10em;


    
        background-image: url(${fundo});
        background-size: auto 100%;
        background-repeat: no-repeat;
        height: 80vh;

        .space{
            width: 15%;
        }
    `;
