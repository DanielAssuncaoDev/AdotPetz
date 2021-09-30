import styled from 'styled-components'

export const Container = styled.div`

.container{
    display: flex;
    flex-direction: column;
    text-align: justify;
    padding: 6vh;
}

.Box-2{
    padding-bottom: 2em;
    padding-top: 2em;
    background-color: rgba(252, 229, 186, 0.37);
}

.Titulo{
    font-size: 3.5vh;
    font-weight: 800;
    text-align: center;
}

.imgcat img{
    padding-top: 2em;
    width: 100%;
    height: 55vh;
}

.recadinho{
    font-weight: 300;
    font-size: 1.8vh;
    line-height: 12px;
    text-align: center;
    padding-bottom: 10px
}

.titulo2{
    font-weight: bold;
    font-size: 4vh;
    line-height: 25px;
    text-align: left;
    margin-top: 1.4em;
    margin-bottom: 1em;
    padding-left: 2em;
  }
  
  .desc{
    font-weight: 400;
    font-size: 2.2vh;
    line-height: 1.3em;
    padding-left: 3em;
    padding-right: 5em;
  }

  p{
    font-weight: 400;
  }
`