import styled  from "styled-components";

// {}

export const Container = styled.div`
    
    color: #FFF;
    background-color: #000;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 10vh;
    height: 5em;    
    padding: 1.5em;

        .line-left{
            display: flex;
            align-items: center;
        }

        .logo img{
            height: 42px;
        }

        .informacoes{
            display: flex;
            flex-direction: row;

            margin-left: 5em; 
        }

        .Cont-inf{
            padding: .5em;

            cursor: pointer;
        }

       .Cad{
        height: 2.3em;
        padding: 3px 10px;
        margin-right: 1em;

        border-radius: 8px;
        border: none;

        background-color: #ffffff;

        cursor: pointer;
       }

       .lo {
        height: 2.3em;
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

        .informacoes span:hover{
            text-decoration: underline;
        }
`;

