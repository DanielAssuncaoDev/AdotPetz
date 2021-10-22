import styled from 'styled-components';


import fundo from '../../../assets/images/fundoSUGE.svg'


export const Container = styled.div`


.conteudopag{
    background-color: #FAF8EB;
}
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
    justify-content: space-evenly;
    flex-wrap: wrap;
    
    //  width: 10em;
}



.nupags{
    display: flex;
    justify-content: center;

    padding: 2em 0px 1.5em 0px;
}

.nu{
   border: 1px solid #00000028;
   font-size: .9em;
   color: #00000050;
   cursor: pointer;
   

   padding: 5px;
   margin-right: 1.5px;
}

.pon{padding:10px 2.5px 0px 2.5px; color:#00000060;}

.nupags button{
  color: #FAD41B;
  border-color: #FAD41B;
  border: 2px solid;

  background-color: #ffff;

  padding: 3px 13px 3px 15px;
  margin-left: 5px;

  cursor: pointer;
}

@media (max-width: 700px){
     .animaisSU{
         text-align:center; 
      }
      }
`;

    export const ContainerBusca = styled.div`

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        //padding-left: 10em;


    
        background-image: url(${fundo});
        background-size: auto 100%;
        background-repeat: no-repeat;
        height: 80vh;

        .space{
            width: 15%;
        }
    `;
