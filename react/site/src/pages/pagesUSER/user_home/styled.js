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
        background-color: #8E8E8E;
        background-size:  auto 100%;
        background-repeat: no-repeat;
        height: 100vh;

        .space{
            width: 15%;
        }
    `;



    export const ContainerFacaDoacoes = styled.div`
    
        height: 85vh;
        padding: 6em 3em;

        background-image: url(${ImgDogFzDoacoes});
        background-size: 100% auto;
        background-repeat: no-repeat;
        /* background-attachment: fixed; */


            .Titulo{
                font-size: 2.5em;
                font-weight: 700;
            }

            .Text{
                width: 800px;
            }


    `;


            export const BoxDoar = styled.div`
            
                border-radius: 20px;
                margin-top: 2em;
                /* height: 30vh; */
                padding: 2em;
                width: 50%;

                background-image: url(${ImgBox}) ;
                background-size: cover;
                background-repeat: no-repeat;


                    .TituloBox{
                        text-align: center;
                        font-weight: 700;
                        font-size: 0.9em;
                    }

                    .ListasBox{
                        display: flex;

                    }
            `;