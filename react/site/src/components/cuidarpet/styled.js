import styled from 'styled-components'

export const Container = styled.div`

.container{
    display: flex;
    flex-direction: column;
    text-align: justify;
    padding: 4em;
}

.Box-2{
    padding-bottom: 2em;
    padding-top: 2em;
    background-color: rgba(252, 229, 186, 0.37);
}

.Titulo{
    font-size: 25px;
    font-weight: 800;
    text-align: center;
}

.imgcat img{
    padding-top: 2em;
    width: 100%;
    height: auto;

}

.recadinho{
    font-weight: 300;
    font-size: 1em;
    line-height: 12px;
    text-align: center;
    padding-bottom: 10px
}

.titulo2{
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    text-align: left;
    margin-top: 2em;
    margin-bottom: 1em;
    padding-left: 2em;
  }
  
  .desc{
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    padding-left: 3em;
    padding-right: 5em;
  }

  p{
    font-weight: 400;
  }
`