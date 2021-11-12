import styled from "styled-components";


export const Container = styled.div`
display: flex;
/* padding: 1vh; */
/* overflow: hidden; */

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
height: auto;
min-height: 100vh;
padding: 1em;

.EntrarAdm:hover{
  text-decoration: underline;
  /* color: #FAF8EB; */
}


.title {

  /* margin-bottom: 20px; */
  /* margin-top: 60px; */
  position: relative;
  /* top: 2em; */
  margin-bottom: 3em;
  width: 85%;

  font: 1.1em Montserrat;
  font-weight: 600;
  text-align: center;
}

.Form{
  width: 100%;
  max-width: 636px;
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
  font-size: 2.5em ;
  font-weight: 700;

  margin: 40px 0 0 40px;
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
  padding-left: 10px;
  
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
  .label {
  
    
  }
      @media(max-width: 600px){

      /* .cachorro img {
        width: 10vw;
      
        } */
        /* align-items: flex-start; */
        display: block;

        .title{
          font-size: .9em;
          width: auto;
        }

        .existente{
          font-size: 1.5em;
          margin: 1em 0 0 1em;
        }

        .buton{
          margin-bottom: 1em;

         button{
          font-size: .75em;
          height: 40px
        }
        .box-input{
          height: 40px;

          input::placeholder { 
            font-size: .85em;
          }

          input {
            font-size: .55em;      
            margin-bottom: .5em;

          }
        }

      }

    }

`



