import styled  from "styled-components";



export const Container = styled.div`
    
    color: #FFF;
    background-color: #000;

    display: flex;
    align-items: center;

    height: 10vh;
    padding: 1.5em;


        .logo img{
            height: 42px;
        }

        .informacoes{
            display: flex;
            flex-direction: row;

            padding: 8em;
        }

        .Cont-inf{
            padding: .5em;

            cursor: pointer;
        }

       .botoes{
           padding-left: 30em;
       }

       .Cad{
        padding: 3px 10px;
        margin-right: 1em;

        border-radius: 8px;
        border: none;

        background-color: #ffffff;

        cursor: pointer;
       }

       .lo {
        padding: 3px 10px;
        border-radius: 8px;
        border: none;

        background-color: #FAD41B;

        cursor: pointer;
        }

        .lo:hover{
          transition: 0.65s;
          background-color: #f7e37e;
        }

        .Cad:hover{
          transition: 0.65s;
          background-color: #d9d7ce;
        }
`;

