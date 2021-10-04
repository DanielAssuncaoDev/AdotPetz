import styled from 'styled-components';

export const OptionsContainer = styled.div`

    display: flex;

        .option-voltar{
            flex-grow: 1;
        }

        .option-voltar,
        .option-recarregar {

            span {
                display: flex;
                align-items: center;
                justify-content: center;

                height: 2em;
                width: 2em;
                padding: 2px;
                background-color: #000;
                border-radius: 50%;
            }  

        }


        @media (max-width: 800px){

            .option-voltar,
            .option-recarregar {

                span {
                    height: 1.7em;
                    width: 1.7em;
                    padding: 2px;
                
                        img{
                            height: 100%;
                        }
                    }

            }  
                
        }

`;