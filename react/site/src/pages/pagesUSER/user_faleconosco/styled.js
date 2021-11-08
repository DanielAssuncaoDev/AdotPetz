import styled from 'styled-components';




export const Container = styled.div`


   .conteudofale{
    background: #FCE5BA;
    //text-align: left;
    padding: 2em;
    //height: 60vh;
   }

   .titulofale{
       font-size: 2.2em;
       font-weight: 800;

       padding: 10px 0px 1em 0px;
   }
    .box{
    background: #FFFFFF;
    padding: 2em 4em 4em 4em;
     width: 60%;
}


.salvacao{
    display: flex;
    padding: 0em 0em 2em 0.5em;
}

.e-mail{
    margin-top: 1em;
    color: #fad41b;
    font-weight: 700;
}

.texto2{
    margin-top: 1em;
}

.b{
    align-self: flex-end;
    //font-size: 14px 40px; 
    
    font-size: 20px;
    font-weight: 900;

    padding-left: 2em;
}
.b button { 
    border-radius: 30px;
    border:none;

    padding: 1em 2em 1em 2em;


    background-color: #939598;
    color: #ffffff;    
}

.b:hover button{
    //background-color: #aeb1b5;
    box-shadow: 8px 8px 12px 0px #bababa;
    transition: 1s;

    cursor: pointer;
}

@media (max-width: 1000px) {
    .conteiner{
      height: 0em;
      width: 0em;
    }
  }
`