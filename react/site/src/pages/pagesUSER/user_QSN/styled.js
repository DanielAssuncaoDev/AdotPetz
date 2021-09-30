import styled from 'styled-components';

import fundo from '../../../assets/images/fundoquemsomos.svg'

export const Container = styled.div`

.QuemSomos{
    background-image: url(${fundo});
    background-repeat: no-repeat;
    background-size: cover; 
    

    display: flex;
   flex-direction: column;
   text-align: center;
   justify-content: center;

   padding: 3em 2em 2em 2em;
   height: 90vh;
}

.quemsomos{
  padding: 1em;
  width: 48em;
  align-self:center;

  
  padding: 2em 0px 2em 0em;
  
}

.titulo{
font-size: 1.1em;
font-weight: 900;
}

.cont-quem{
padding-top: 20px;
font-weight: 500;

}

.nossamicao{
  padding: 1em;
  width: 48em;
  align-self:center;
  
  padding: 2em 0px 2em 0em;
}

.cont-micao{
padding-top: 20px;
font-weight: 500;
}

.valores{
  padding: 1em;
  width: 48em;
  align-self:center;

  
  padding: 2em 0px 1.5em 0em;
}

.cont-valo{
padding-top: 20px;
font-weight: 500;
}
`