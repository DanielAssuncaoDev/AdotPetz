import styled from 'styled-components';

import ImgDog from '../../../assets/images/imagemfundo_home.svg';
import ImgDogResposivo from '../../../assets/images/imagemfundo_responsivo-home.jfif';
import ImgDogFzDoacoes from '../../../assets/images/imgemfundo_home-fzdoacoes.svg'
import ImgBox from '../../../assets/images/imgemfundo_filtrobusca.svg'
// {}

export const Container = styled.div`

`;

    export const ContainerBusca = styled.div`

        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        background-image: url(${ImgDog});
        background-attachment: fixed;
        background-color: #8E8E8E;
        background-size:  auto 100%;
        background-repeat: no-repeat;
        min-height: 100vh;

        padding: 3em; 

        .space{
            width: 15%;
        }


        @media (max-width: 1200px){

            &{
                justify-content: center;
            }

            .space{
                display: none;
            }

        }


    
        @media (max-width: 650px){

            &{
                background-image: url(${ImgDogResposivo});
                background-size: cover;
                background-repeat: no-repeat;

                padding: 2vh

            }


        }


    `;




    export const ContainerFacaDoacoes = styled.div`
    
        /* height: 85vh; */
        padding: 10vh 5vh;

        background-image: url(${ImgDogFzDoacoes});
        background-size: cover;
        background-repeat: no-repeat;
        /* background-attachment: fixed; */


            .Titulo{
                font-size: 2.4em;
                margin-bottom: 0.6em;
                font-weight: 700;
            }

            .Text{
                font-size: 1em;
                max-width: 58em;
            }


            @media (max-width: 650px){

                .Text{
                    width: 100%;
                }


            }


    `;


            export const BoxDoar = styled.div`
            
                border-radius: 1em;
                margin-top: 2em;
                /* height: 30vh; */
                padding: 2em;
                width: 36em;
                /* height: 40vh; */

                box-shadow: 0px 1vh 1vh rgba(0, 0, 0, 0.25);                
                background-image: url(${ImgBox}) ;
                background-size: cover;
                background-repeat: no-repeat;


                    .TituloBox{
                        text-align: center;
                        font-weight: 700;
                        font-size: 1.1em;

                    }

                    .ListasBox{
                        display: flex;
                        justify-content: space-evenly;
                        flex-wrap: wrap;

                            div{
                                padding: 0 1em;
                                margin-top: 10px;
                            }

                            /* div:last-child{
                                
                                margin-bottom: 15px;
                            } */


                    }   .ListasBox li{
                            font-size: .6em;
                            font-weight: 300;


                                span {
                                    font-weight: 700;
                                }
                        }

                    ul{
                        padding: 0px;
                        margin-left: .8em;
                    }

                    .TituloLista{
                        font-size: .9em;
                        margin-bottom: .9em;
                        font-weight: 700;
                    }

                    .RodapeBox{
                        margin-top: 16px;
                    }

                    .InfoRodape{
                        text-align: center;
                        margin-top: .8em;

                        font-size: .9em;
                        font-weight: 300;

                            span {
                                font-weight: 700;
                            }

                    }


                    @media (max-width: 650px){

                        &{
                            width: 100%;

                            background-color:#FFF;
                            background-image: none;
                        }


                    }


            `;