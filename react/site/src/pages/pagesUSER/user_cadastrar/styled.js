import styled from "styled-components";


export const Container = styled.div`

display: flex;
overflow: hidden;
background-color: #FAF8EB;
flex-direction: column;
align-items: center;
min-height: 100vh;
height: auto;

`
export const Conteudo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

align-items: center;

/* width: 100vw;  */
/* min-height: 100vh; */
height: auto;
/* padding: 2em; */

.title {
  /* position: absolute; */
  top: 2em;
  width: 85%;
  position: relative;
  font: 1.1em Montserrat;
  font-weight: 600;
  text-align: center;
  margin-bottom: 4em;
}
.cadastrar {
  color: #fad41b;
  font: 4vh Montserrat;
  font-weight: 700;

  margin: 50px;
}
.inputs {
  width: 85%;
}
.inpe input {
  border: none;
  border-radius: 1.5vh;
  background-color: #8e8e8e33;

  width: 49%;
  height: 3.1em;
  margin-bottom: 2vh;
  justify-content: space-between;
  padding-left: 10px;
}
.inpe {
  display: flex;
  justify-content: space-between;
}

.box-input input {
  border: none;
  border-radius: 1.5vh;
  background-color: #8e8e8e33;

  width: 100%;
  height: 100%;
  padding-left: 10px;
}

.box-input{
  height: 2.5em;
  margin-bottom: 2vh;
  width: 100%;
}


.buton button {
  border: none;
  border-radius: 12px;
  background-color: #fad41b;

  color: #ffffff;
  width: 100%;
  height: 3em;
}
.buton {
  width: 84%;
  height: vh;
}

.login {
  color: #FAD41B;
  margin-right: 1vh;
}
.divisao {
 
}

.conta {
  padding: 1em 0em 0em 29.5em;
}
.login {
  padding: 0em 0em 1em 36.5em;

}


.cachorro img {
  width: 100%;
  height: auto;
}
.cachorro {
  margin-top: 3em;
  width: 100%;
  position: relative;

  left: -0.5%;
  bottom: -4px;
  width: 100.9%;
}

.Form{
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 5px;
  box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.2);
  transition-property: all;
  transition-duration: .4s;

    &:hover{
      box-shadow: 0px 0px 18px 8px rgba(0, 0, 0, 0.2);

    }
}

.login:hover {
  cursor: pointer;

  }

  @media(max-width: 600px){
    padding:2em;
    width: 100%;
    .title, .inpe input, .Form { 
      width: 100%;
    }

    .inpe{
      flex-direction: column;
    }
  
    .box{
      text-align: center;
    }
    .conta{
      padding: 1em 0em .5em;
    }
    .login{
      padding: 0em;
    }
  }
`



