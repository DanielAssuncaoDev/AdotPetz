import styled from "styled-components";


export const Container = styled.div`
display: flex;
padding: 1vh;
overflow: hidden;

flex-direction: column;
align-items: center;

`
export const Conteudo = styled.div`
display: flex;
flex-direction: column;

align-items: center;
background-color: #FAF8EB;
width: 100vh; 
height: 98vh;


.title {

  margin-bottom: 20px;
  margin-top: 60px;
  width: 85%;

  font: 3vh Montserrat;
  font-weight: 600;
}
.existente {
  color: #fad41b;
  font: 4vh Montserrat;
  font-weight: 700;

  margin-top: 00px;
  margin-bottom: 23px;

}

.inputs {
  width: 65%;
  font: 3.3vh Montserrat;
  font-weight: 600;
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
  width: 83%;
  height: 5vh;
  
}
.buton {
  width: 83%;
  display: flex;
  justify-content: center;

  margin-bottom: 4%;
  margin-top: 2%;
}

.cachorro img {
  width: 100%;
  height: 170%;
}
.cachorro {
  margin-top: 1%;
  /* margin-right: 5em; */
}

`



