import styled from "styled-components";


export const Container = styled.div`
display: flex;
/* padding: 1vh; */
overflow: hidden;

flex-direction: column;
align-items: center;

`
export const Conteudo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

align-items: center;
background-color: #FAF8EB;
width: 100vw; 
height: 100vh;
padding: 2em;



.title {

  /* margin-bottom: 20px; */
  /* margin-top: 60px; */
  position: absolute;
  top: 2em;
  width: 85%;

  font: 1.1em Montserrat;
  font-weight: 600;
  text-align: center;
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

    /* &:hover{
      box-shadow: 0px 0px 18px 8px rgba(0, 0, 0, 0.2);

    } */
}

.existente {
  color: #fad41b;
  font: 4vh Montserrat;
  font-weight: 700;

  margin: 50px;
}

.inputs {
  width: 88%;
  font: 3.3vh Montserrat;
  font-weight: 600;
  margin-top: 45px
}
.box-input input {
  border: none;
  border-radius: 1.5vh;
  background-color: #8e8e8e33;

  width: 100%; 
  height: 100%;
}

.box-input{
  height: 50px;
  margin-bottom: 2vh;
  width: 100%;
}

.buton button {
  border: none;
  border-radius: 12px;
  background-color: #fad41b;

  color: #ffffff;
  width: 88%;
  height: 50px;
  
}
.buton {
  width: 100%;
  display: flex;
  justify-content: center;

  margin-bottom: 4%;
  margin-top: 2%;
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

`



