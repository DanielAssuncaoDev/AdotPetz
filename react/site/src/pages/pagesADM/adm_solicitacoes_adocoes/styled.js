import styled from 'styled-components';


// {}

// Styled Solicitações de Adoção ADM

export const Container = styled.div`

`;

        export const FaixaCRUD = styled.div`
        
            background-color: #8E8E8E;

            padding: 2em;
            min-height: 100vh;


                .optionsContainer{
                    display: flex;

                }

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
                        background-color: #000;
                        border-radius: 50%;
                    }  

                }


                .FiltrosdePesquisa{
                    display: flex;
                    align-items: center;

                    margin-right: 12px;
                }


                .FiltrarPor {

                    label{
                        margin-right: 6px;
                    }

                    select{
                        background-color: #AEAEAE;

                        border: none;
                        border-radius: 4px;
                        color: #00000046;
                        fill: #00000046;

                        width: 180px;
                        height: 30px;
                    }

                }


                .conteudo {
                    background-color: #AEAEAE;
                    border-radius: 5px;

                    /* overflow: scroll; */

                    padding: 1.8em 1.3em;
                    min-height: 80vh;
                    margin-top: 2em;
                }


                .TituloConteudo{
                    font-size: 1.8em;
                    display: flex;
                }

                .Line{
                    border:3px solid #FAD41B;
                    border-radius: 5px;
                    margin-right: 12px;

                    background-color: #FAD41B;
                }



        `;

            export const TabelaSolicitacoes = styled.table`
            
                margin-top: 2.5em;
                width: 100%;

                text-align: center;
                /* border: 1px solid black; */
                border-collapse: collapse;

            
                    thead{
                        height: 4em;
                        color: white;

                            tr{
                                background-color: #FAD41B;

                                    th:nth-child(6){
                                        background-color: #000;
                                        width: 20%;
                                    }

                            }
                    }

                     tbody{
                        height: 4em;

                            tr{
                                background-color: #f9f9f9;

                                &:nth-child(odd) {

                                    background-color: #f5f5f5;
                                }

                            }




                             td:nth-child(6){
                                display: flex;
                                align-items: center;
                                justify-content: space-between;

                                height: 4em;
                                padding: 5px;
                            } 

                            button{
                                padding: 0;
                                display: flex;
                                align-items: center;
                                border: none;
                                

                                background-color: transparent;

                                &:nth-child(3){
                                    background-color: #00000010;
                                    border-radius: 6px;
                                    display: flex;
                                    justify-content: center;

                                    height:30px;
                                    width: 68%;
                                }
                            }

                    } 

            `;