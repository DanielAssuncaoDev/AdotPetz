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
                        padding: 2px;
                        background-color: #000;
                        border-radius: 50%;
                    }  

                }


               


                .conteudo {
                    background-color: #AEAEAE;
                    border-radius: 5px;

                    /* overflow: scroll; */

                    padding: 1.8em 1.3em;
                    height: 80vh;
                    margin-top: 2em;

                    /* width: 100% */

                    overflow: scroll;
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


                @media (max-width: 800px){
                    padding: 1em 10px;
                
                        .conteudo{
                            padding: 1em .5em;
                        }

                        .TituloConteudo{
                            font-size: 1.3em;
                            width: 65%;
                        }

                        .option-voltar,
                        .option-recarregar {

                            span {
                                height: 1.5em;
                                width: 1.5em;
                                padding: 2px;
                            
                                    img{
                                        height: 100%;
                                    }
                                }

                        }  
                        
            }


`;

            export const TabelaSolicitacoes = styled.table`
            
                margin-top: 2.5em;
                width: 100%;
                min-width: 520px;

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
                                        width: 24%;
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
                                justify-content: center;

                                height: 4em;
                                padding: 5px;

                                    /* button{
                                        margin: 0 6px;
                                    } */
                            } 

                            button{
                                padding: 0;
                                display: flex;
                                align-items: center;
                                border: none;   

                                margin: 0 1%;       
                                height: 70%;
                                max-height: 35px;

                                background-color: transparent;

                                    img{
                                        width: 100%;
                                        height: 100%;
                                    }


                                &:nth-child(3){
                                    background-color: #00000010;
                                    border-radius: 6px;
                                    display: flex;
                                    justify-content: center;

                                    padding: 2px;

                                    height: 80%;
                                    max-height:30px;
                                    width: 68%;
                                    max-width: 163px;
                                }
                            }

                    } 

                
                @media (max-width: 1000px){

                    font-size: 12px;

                        button{
                            font-size: 11px;
                            /* margin: 0 2.5px; */
                        }
                }

                @media (max-width: 800px){

                    font-size: 10px;

                        button{
                            font-size: 9px;
                        }
                }

            `;