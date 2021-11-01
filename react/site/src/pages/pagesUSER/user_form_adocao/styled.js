import styled from "styled-components";

export const Container = styled.div`
        .ContainerBody{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 2em;
        }

        .ContainerForm{
            background: #FAF8EB;
            width: 100%;
            padding: 5em;

            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .text-thanking-user{
            font-weight: 600;
            font-size: 1.2em;
        }

        .obs-for-user{
            font-weight: 100;
            font-size: .7em;
            width: 100%;
            padding: 3em 20em 1em;
        }

        .ContainerInputs{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 900px;
        }

        .InputsGroup{
            display: flex;
            flex-direction: row;
        }

        input {
            background: rgba(0, 0, 0, 0.13);

            border: none;
            margin: .4em;
            padding: 1em;

            font-size: .7em;
            font-weight: 100;
            outline: none;
        }

        .Name input {
            width: 800px;
        }
        .Nascimento input{
            width:182px;
        }
        .rg input, .telefone input {
            width: 300px;
        }
        
        .cep input{
            width: 232px;
        }

        .endereco input{
            width: 395px;
        }
        .complemento input, .cidade input{
            width: 200px;
        }
        .bairro input{
            width:385px;
        }

        .button button{
            font-weight: 600;
            background: #FAD41B;
            border-radius: 5px;
            margin: 2em 0 0;
            padding: 1.2em 2.5em;


            border: none;
            cursor: pointer;
            outline: none;

            transition: 2s;

            &:hover{
                box-shadow: 5px 5px 10px rgba(0, 0, 0, .30);
                cursor: pointer;
            }
        }


        @media (max-width: 1024px) {
            .ContainerForm {
                padding: 2em;
            }
            
            .InputsGroup{
                flex-direction: column;
            }

            input, .Name input,   .Nascimento input, .complemento input, .cidade input, .bairro input, .rg input, .telefone input, .cep input, .endereco input {
                width: 100%;
            }

            .obs-for-user {
                padding: 2em;
            }
        }
    
`