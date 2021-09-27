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
    height: 4em;    
    padding: 1.5em;

        .line-left{
            display: flex;
            align-items: center;
        }

        .logo img{
            height: 30px;
            cursor: pointer;
        }

        .informacoes{
            display: flex;
            flex-direction: row;

            margin-left: 5em; 
        }

        .Cont-inf{
            padding: .5em;
            font-size: .7em;

            cursor: pointer;
        }

       .Cad{
        height: 2.3em;
        padding: 3px 10px;
        margin-right: 1em;
        font-size: .7em;

        border-radius: 5px;
        border: none;

        background-color: #ffffff;

        cursor: pointer;
       }

       .lo {
        height: 2.3em;
        padding: 3px 10px;
        border-radius: 5px;
        border: none;
        font-size: .7em;

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

