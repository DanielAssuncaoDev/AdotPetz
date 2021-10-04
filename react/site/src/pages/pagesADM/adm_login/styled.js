import styled from "styled-components";
import Imgfundo from "../../../assets/images/imagemfundo_home.svg"


export const Container = styled.div`
height: 100vh;
overflow: hidden;

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

/* padding: 4em 2em  2em 2em; */


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
    align-items: center;
    /* padding: 0em 12em 3em 50em; */
  }
  
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
  
    background-color: #fad41b;
    padding: 3em;
    height: 265px;

    width: 600px;
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
  
    /* padding: 0em 2em 0.5em 7em; */
  }
  button {
    border: none;
    border-radius: 7px;
    background-color: #000000;
    color: #ffffff;
    /* padding: 0em 4em 1em 4em; */
  
    width: 40%;
    height: 170%;
  }
  .buton {
    /* padding: 0.5em 6em 6em 4em; */
    display: flex;
    justify-content: center;
  
    margin-top: 1em;
    width: 100%;
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
  
`