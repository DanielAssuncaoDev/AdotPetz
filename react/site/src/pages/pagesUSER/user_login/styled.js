import styled from "styled-components";

export const Line = styled.div`
width: 1vh;
`
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
  /* padding: 0em 5em 0em 5em; */
  margin-bottom: 2vh;
}
.existente {
  color: #fad41b;
  font: 3.3vh Montserrat;
  font-weight: 700;

  margin-top: 4vh;
  margin-bottom: 6vh;

}

.inputs {
  width: 83%;
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
  padding: 0.8em;
  margin: 0.5em;

  width: 83%;
  height: 5vh;
  
}
.buton {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 4vh;
  margin-top: 3vh;
}
.divisao {
   display: flex;
   align-items: center;
}
.ou {
}

.logue {
  color: #fad41b;
  margin-top: 2.3vh;
  
}
.logo img {
  width: 155px;
}
.logo {

}
.cachorro img {
  width: 76vh;
  height: 0vh;
}
.cachorro {

}

`