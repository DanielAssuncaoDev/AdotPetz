import styled from "styled-components";
import Imgfundo from "../../../assets/images/imagemfundo_home.svg"


export const Container = styled.div`
height: 100%;
/* overflow: hidden; */
background-color: #8e8e8e;
`
export const Conteudo = styled.div`
background-image: url(${Imgfundo});
background-size: auto 100%;
background-repeat: no-repeat;

display: flex;
justify-content: flex-end;

padding: 5em;
height: 90vh;

.titulo {
    width: 500px;
    font: 1em Montserrat;
    text-align: center;

    color: white;
    font-size: 2em;
    font-weight: 700;
  
    margin-bottom: 1em;
  }
  
  .contbox {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    /* align-items: center ; */
    /* width: 100%; */
    /* position: absolute; */

  }
  
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fad41b;

    /* height: 265px; */
   width: 100%;

    border: none;
    border-radius: 9px;
    padding: 3.5em;
   
    


  }
  input {
    border: none;
    border-radius: 7px;
    height: 25px;
    
    width: 100%;
    height: 180%;
    padding-left: 1em;
  }
  button {
    border: none;
    border-radius: 7px;
    background-color: #000000;
    color: #ffffff;
  
  
    width: 40%;
    height: 100%;
  }
  .buton {
    display: flex;
    justify-content: center;
  
    width: 100%;
    height: 2em
  }
  .input {
    display: flex;
    justify-content: center;
    
    width: 100%;
    margin-bottom: 10px;

    padding: 0em 0em 0.9em 0.8em;
  }
  
  .cachorro img {
    width: 500px;
  }
  
  .login {

    font-size: 1.3em;
    font-weight: 300;

    font: 1.8em Montserrat;
    margin-bottom: .5em;
    padding: 0em .5em;

  }
  @media(max-width: 650px){

    padding: 0.5em;

      .contbox {
       width: 100%;
      }
      .titulo {
        width: 100%;
      }
      .box{
        padding: 2em 1em;
      }

  }
`