import styled from 'styled-components';

import ImgFundo from '../../../assets/images/imagemfundo_dicascuidados.svg';
import ImgFundoResponsivo from '../../../assets/images/imagemfundo_responsivo-dicascuidados.jfif';
// {}

export const Container = styled.div`

`;

    export const Fx1 = styled.div`

        display: flex;
        align-items: center;

        min-height: 91vh;

        background-image: url(${ImgFundo});
        background-size: cover;
    

        @media (max-width: 600px){
            background-image: url(${ImgFundoResponsivo});

            padding: 2em;
            justify-content: center;
        }

    `;

        export const BoxSelecionarEspecie = styled.div`

            margin: 0 0 3em 3em; 

            /* width: 33%; */
            padding: 2.8em;

            border-radius: 12px;
            background-color: rgba(142, 142, 142, 0.25);

            transition-duration: .4s;
            transition-property: box-shadow;

            &:hover{
                box-shadow: inset 4px 5px 5px rgba(0, 0, 0, 0.5);
            }
        
                .DescBox{
                    font-weight: 400;
                    font-size: 1.2em;
                }
                .Titulobox{
                    font-weight: 700;
                    font-size: 1.5em;

                    margin: 1.2em 0 2em;
                }


                .LineBotoes{
                   
                   display: flex;
                   justify-content: center;

                        button{ 
                            border: none;
                            border-radius: 6px;
                            
                            height: 35px;
                            width: 45%;
                            margin-right: 8px;

                            font-size: 1em;
                            font-weight: 700;

                            transition-duration: .3s;
                            transition-property: all;

                                &:hover{
                                    box-shadow: 4px 4.5px 4px rgba(0, 0, 0, .5);
                                }

                        }
                }

                @media (max-width: 700px){
                    margin: 0px;
                    background-color: rgba(142, 142, 142, 0.5);
                }

        `;



