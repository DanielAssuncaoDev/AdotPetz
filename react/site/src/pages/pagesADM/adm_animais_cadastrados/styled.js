import styled from "styled-components";

export const Container = styled.div`
    .ContainerBody{
        background: #8E8E8E;
        height: auto;
        min-height: 100vh;
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
        display: flex;
        flex-direction: column;
        background: #AEAEAE;
        box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
        border-radius: 5px;

        padding: 1.5em;
        margin-top: 2em;
        overflow-y: scroll;
        height: 90%;
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


table {
    margin-top: 2em;
}


.actions{
    padding: 0em 1em;
}
   .edit button, .delete  button, .visu  button{
       &.hover{
           width: 40px;
            cursor: pointer;
            animation: 3s;
       }
  }

  .actions > button {
        visibility: hidden;
    }

    .actions {
        width: .1em;
    }

    tr:hover {
        .actions > button {
            visibility: visible;
        } 
    }
  @media (max-width: 1024px) {
    .ContainerBody{
        padding: 2em 1em;
    }
  }
`