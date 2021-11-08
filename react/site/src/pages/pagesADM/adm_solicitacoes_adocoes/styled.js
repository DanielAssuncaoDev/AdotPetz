import styled from 'styled-components';


// {}

// Styled Solicitações de Adoção ADM

export const Container = styled.div`

`;

        export const FaixaCRUD = styled.div`
        
            background-color: #8E8E8E;

            padding: 2em;
            min-height: 100vh;               


                .conteudo {
                    background-color: #AEAEAE;
                    border-radius: 5px;

                    padding: 1.8em 1.3em;
                    height: 80vh;
                    margin-top: 2em;

                    overflow-y: scroll;
                    
                    
                }


                .TituloConteudo{
                    font-size: 1.8em;
                    display: flex;

                    margin: 0 0 1.5em;
                }

                .Line{
                    border:3px solid #FAD41B;
                    border-radius: 5px;
                    margin-right: 12px;

                    background-color: #FAD41B;
                }


                @media (max-width: 800px){
                    padding: 1em 10px;
                
                        .conteudo{
                            padding: 1em .5em;

                            /* overflow: scroll; */
                        }

                        .TituloConteudo{
                            font-size: 1.3em;
                            width: 65%;
                        } 
                        
                }


            .actions button{
                padding: 0em 2em;
                border: none;
                border-radius: 5px;

                margin: 0 1%;       
                height: 70%;
                max-height: 35px;

                background-color: #DDDDDD;
            }

`;
