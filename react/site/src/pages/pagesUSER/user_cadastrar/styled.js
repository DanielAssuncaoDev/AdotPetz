import styled from "styled-components";


export const Container = styled.div`
display: flex;
padding: 1vh;
overflow: hidden;

flex-direction: column;
align-items: center;
background-color: #FAF8EB;


`
export const Conteudo = styled.div`
display: flex;
flex-direction: column;
align-items: center;

.title {
  
}
.cadastrar {
  color: #fad41b;
  font-size: 2em;
  font-weight: 720;

  margin-bottom: 4vh;
  margin-top: 4vh;
}
.inputs {
  width: 85%;
}
.inpe input {
  border: none;
  border-radius: 1.5vh;
  background-color: #8e8e8e33;

  width: 49%;
  height: 4.8vh;
  margin-bottom: 2vh;
  justify-content: space-between;
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
}

.box-input{
  height: 4.8vh;
  margin-bottom: 2vh;
  width: 100%;
}


.buton button {
  border: none;
  border-radius: 12px;
  background-color: #fad41b;

  color: #ffffff;
  width: 100%;
  height: 4.5vh;
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
  width: 650px;
}
.cachorro {
}

`