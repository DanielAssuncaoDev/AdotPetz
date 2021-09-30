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
  /* padding: 0em 5em 0em 5em; */
  margin-bottom: 2vh;
}
.existente {
  color: #fad41b;
  /* width: 870px; */
  font: 3.3vh Montserrat;

  /* font-size: 2em; */
  font-weight: 700;

  margin-bottom: 5vh;
  /* padding: 1.5em 0em .7em 4em; */
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
  margin-bottom: 1.2vh;

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
  
}
.buton {
  width: 100%;
  display: flex;

  justify-content: center;
}
.divisao {
   /* padding: 3em 0em 1em 12.5em; */
   display: flex;
   align-items: center;
}
.line img {
  width: 190px;
  
  /* float: left;
  padding: 0.3em 0.2em 0.5em 0em; */

} 
.ou {
  float: left;
  /* padding: 0em 0.5em 0em 0.5em; */
}
.leni img {
  width: 190px;
  
  /* float: left; */
  /* padding: 0.3em 0.2em 0.5em 0em; */
}
.logue {

  color: #fad41b;
  
}
.logo img {
  width: 135px;
}
.logo {
  /* padding: 0em 0em 0em 21.7em; */
}
.cachorro img {
  width: 650px;
}
.cachorro {
  /* padding: 0em 8em 0em 7em; */
}

`