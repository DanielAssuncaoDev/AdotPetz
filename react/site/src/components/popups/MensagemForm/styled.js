import styled from 'styled-components';

// {}

export const ContainerPopUp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(2px);

    position: fixed;
    top: 0px;


        .BoxMensagem{
            background-color: rgb(212, 190, 155); 
            border: 1px solid black;

            width: 80%;
            max-width: 650px;
            border-radius: 10px;
            padding: 1em;
        }

        .TituloBox{
            font-size: 1.5em;
            font-weight: 700;

            display: flex;
            justify-content: center;
            align-items: center;
        }

        p {
            text-align: center;
            font-size: .95em;
            font-weight: 500;

            margin-bottom: 8px;
        }

        .ContainerButtons{
            display: flex;
            justify-content: flex-end;

                button{
                    width: 6em;
                    padding: 8px;
                    margin: 5px;

                    border: none;
                    border-radius: 25px;
                    background-color: #000;
                    color: white;
                }
        }



`;