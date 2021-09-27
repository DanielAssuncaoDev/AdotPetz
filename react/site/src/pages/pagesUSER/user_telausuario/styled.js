import styled from 'styled-components';


import fundo from '../../../assets/images/fundo_telaUSU.svg';

export const Container = styled.div`
display: flex;
flex-direction: column;



.conteudo{
display: flex;
padding :2em 2em 0em 2em;
}



.conteudo-esq{
   height: 56vh;
}

.conteudoPERFIL{
    background-image: url(${fundo});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;

    padding-top: 18px;
}

.meuperfil{
    font-size: 18px ;
    font-weight: 700;
    
    padding: 0px 0px 15px 15px;
}

.imagemusu img{
padding-left: 5px;
height: 4.5em;
}

.infoUSU{
    padding: 15px 10px 10px 10px;

    font-size: 14px;
    font-weight: 800;
}

.NomeUSU{
font-weight: 700;
padding-top: 4px;
}

.imagemBA img{
    height: 24px;
}

.imagemBA{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    
    padding-top: 4em;
    padding-right: 10px;
}

.rodape{
    color: #ffffff;
    background-color: #000000;

}

.inforoda{
    font-weight: 100;
    font-size: 13.5px;

    padding: 0px 8em 4px 17px;
}

.inforodaa{
    font-weight: 100;
    font-size: 13.5px;

    padding: 15px 8em 4px 17px;
}

.voltaroda{
    display: flex;
    font-size: 13px;

    padding: 16px 0px 8px 12em;
}

.voltar{
    font-weight: 550;
}

.direita{
    background-color: #E5E5E5;

    margin-left: 3em;
    width: 70%;
}

.titulo{
    padding: 2em;

    font-weight: 800;
    font-size: 18px;
}

.meio-di{
    padding-top: 4em;

    text-align: center;
}

.meio-di img{
  height: 9em;
}

.obs{
    font-size: 12px;
    font-weight: 350;

    min-width: 5px;
}

`