import styled from "styled-components";

export const Container = styled.div`
    .ContainerBody{
        background: #8E8E8E;
        height:100%;
        width: 100%;
        padding: 4em;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    .ButtonsContainer img:hover {
            box-shadow: 5px 5px 10px rgba(0, 0, 0, .30);
            cursor: pointer;
    }

    button img{
        border-radius: 50%;
    }

    .RefreshButton {
        background: black;
        width: 25px; height: 25px;
        align-items: center;
        border-radius: 50%;
        margin: -0.2em 0 0;
    }
    .RefreshButton img{
        margin: .2em 0 0 -0.1em;
    }

    .right-buttons, .ButtonsContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .right-buttons{
        width: 4.7em;
        justify-content: space-between;
    } 

    .ButtonsContainer{
        width: 100%;
        justify-content: space-between;
    }
    .data{
        width: 250px;
    }
    


    .tableAnimals{
        margin: 2em 0;
        background: #AEAEAE;
        box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
        border-radius: 5px;
        padding: 4em;
    }

    .align-items, .edit, .delete, .visu, .selo{
        width: 50px;
    }


    .bar-new-animal{
        border: 2.3px solid #FAD41B;
        border-radius: 1em;
        margin-right: .7em;
        background-color: #FAD41B;
    }

    .text-registered-animal{
        display: flex;
        flex-direction: row;
        font-weight: bolder;
        font-size: 1.4em;
        padding-left: .3em;
    }

    .row-bar {
        display: flex;
        flex-direction: row;
    }


 thead {
    background-color: #FAD41B;   
    height: 10px; 
 }

table {
    margin-top: 2em;
}

 tbody {
     background-color: #F5F5F5;
 }

td {
    text-align: left;
    height:  35px;
    padding: 1em;
    color: #6D6868;
    font-weight: 600;
    font-size: .9em;
}

.linha-alternada {
    background-color: #fff;
}

th {
    height: 30px;
    text-align: left;
    padding: .8em;
    color: #ffff;
    font-weight:800;
    font-size: 1em;
} 
.table-user {
    border-collapse: collapse;
}
.int {
    background-color: #fff;
}

.a {
    width: .1em;
    background: black;
    padding: 1em;
}
  

  .nome{
      width: 200px;
  }

  .especie{
      width: 150px;
  }
  .ra, .especie {
      padding: 0 2em;
  }

  .data, .porte, .sexo, .especie{
      text-align: center;
  }

   .edit button, .delete  button, .visu  button{
       &.hover{
           width: 40px;
            cursor: pointer;
            animation: 3s;
       }
  }

  .sexo{
      padding: 0 2em;
  }
`