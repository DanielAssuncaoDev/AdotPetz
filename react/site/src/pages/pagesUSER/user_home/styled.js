import styled from 'styled-components';

import ImgDog from '../../../assets/images/imagemfundo_home.svg';
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
        height: 100vh;

        .space{
            width: 15%;
        }


        @media (max-width: 950px){

            &{
                justify-content: center;
            }

            .space{
                display: none;
            }

        }


        @media (max-width: 650px){

            &{
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
                font-size: 4.6vh;
                margin-bottom: 3vh;
                font-weight: 700;
            }

            .Text{
                font-size: 2.6vh;
                width: 66%;
            }


    `;


            export const BoxDoar = styled.div`
            
                border-radius: 2vh;
                margin-top: 4vh;
                /* height: 30vh; */
                padding: 5vh;
                width: 50%;
                height: 40vh;

                box-shadow: 0px 1vh 1vh rgba(0, 0, 0, 0.25);                
                background-image: url(${ImgBox}) ;
                background-size: cover;
                background-repeat: no-repeat;


                    .TituloBox{
                        text-align: center;
                        font-weight: 700;
                        font-size: 2.5vh;
                    }

                    .ListasBox{
                        display: flex;
                        justify-content: space-evenly;

                        margin: 3.2vh 0 4vh;

                    }   .ListasBox li{
                            font-size: 1.7vh;
                            font-weight: 300;

                                span {
                                    font-weight: 700;
                                }
                        }

                    ul{
                        padding: 0px;
                        margin-left: 2.3vh;
                    }

                    .TituloLista{
                        font-size: 2.2vh;
                        margin-bottom: 2vh;
                        font-weight: 700;
                    }

                    .InfoRodape{
                        text-align: center;
                        margin-top: 1vh;

                        font-size: 1.8vh;
                        font-weight: 300;

                            span {
                                font-weight: 700;
                            }

                    }



            `;