import styled from 'styled-components';



export const Container = styled.div`
padding: 1em 2em 0em 2em;
background-color: #000;
color: #ffff;


.conteudo{
    display: flex;
    justify-content: space-between;
    padding: 10px 20em 2em 10px;
}


.EM{
    padding-bottom: 1.2em;
    font-size: .9em;
}

.info{
  font-size: 12px;
  padding:2px;
  font-weight: 300;
}   
 
.conteudoB{
    display: flex;
    justify-content: space-between;
}

.voltar{
    display: flex;

}

.voltar img{
    height: 20px;
}

.informações{
    
}

.info:hover {
  cursor: pointer;

  }

@media (max-width: 1000px){
    .conteudo{
    display: flex;
    flex-direction: column;

    width: 10em;
    padding: 20px 0px 2em 0px;
    }

    .empresa{
        padding-bottom: 25px;
    }

    .EM{
        padding-bottom: 5px;
        width: 16em;
    }

    .info{
        font-size: 13px;
    }
    .comoAJU{
        padding-bottom: 25px;
    }

    .cuideBEM{
        padding-bottom: 25px;
    }
}
`