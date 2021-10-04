import styled from 'styled-components';

// {}

export const Container = styled.div`

    background-color: #8E8E8E;
    min-height: 100vh;


        
`;

        export const FaixaForm = styled.div`
        
            padding: 2em 1em;


                .TituloFx{
                    font-size: 2.4em;
                    color: #FFF;

                    margin: 1em 0 1.5em; 
                }

                .ContainerOptions{
                    display: flex;
                    justify-content: space-between;

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


                .Conteudo{
                    background-color: #FFFFFF20;
                    border-radius: 3px;

                    padding: 1em;
                }


                .TituloForm{
                    color: #FFF;
                    font-size: 1.2em;

                    margin-bottom: 1em;
                }

                label{
                    color: #FAD41B;
                    font-size: .8em;
                    margin-bottom: 4px;
                }

                input {
                        border: none;
                        background-color: #AEAEAE;
                        height: 30px;
                        width: 100%;

                        padding-left: 5px ;
                        color: white;
                }
                

                .Row1,
                .Row2,
                .Row3{
                    display: flex;
                    justify-content: space-between;

                    width: 100%;
                    margin-bottom: 8px;

                    div{
                        display: flex;
                        flex-direction: column;
                    }

                    
                } 

                .Row1, 
                .Row3{

                    div{
                        width: 32.5%;
                    }
                }

                .Row2{

                    div{
                        width: 32.4%;
                    }

                    div:nth-child(3){
                        width: 25%;
                    }

                    div:nth-child(4){
                        width: 6%;
                    }
                }


                .InfoRow2{
                    display: flex;
                    justify-content: space-between;

                    margin-top: 3em;
       

                }          


                .TituloPet,
                .TituloSolicitacoes{
                    color: #FFF;
                    font-size: 1.2em;

                    margin-bottom: .8em;
                }

                /* .InfoPet{
                    width: 50%;
                } */


                .ContPet{
                    display: flex;
                    flex-wrap: wrap;
                }

                .ImgPet{
                    display: flex;
                    align-items: flex-end;

                    width: 10em;
                    margin-right: .6em;

                    img{
                        /* width: 100%; */
                        height: 100%;                       

                    }

                }

                .FormPet{                   
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;                  

                }

                .ButtonPet{
                    width: 100%;
                    margin-top: 5px;

                    button{
                        width: 100%;
                        height: 30px;

                        border: none;
                        border-radius: 7px;

                        background-color: #000;
                        color: #FFF;

                    }
                }



                .FormSolicitacao{

                    div{
                        margin-top: 12px;
                    }
                }


            @media (max-width: 600px ){


                .TituloForm,
                .TituloSolicitacoes,
                .TituloPet{

                    font-size: 1em;
                }

                label{
                    font-size: .6em;
                }

                input{   
                    font-size: .6em;

                }

                .Row2{

                    div:nth-child(3){
                        width: 20%;
                    }

                    div:nth-child(4){
                        width: 11%;
                    }
                }

             


            }

            @media (max-width: 830px ){

                .InfoRow2{
                    flex-direction: column;
                    /* align-items: center; */
                }

                .InfoPet{
                    margin-bottom: 2.5em;
                }

                .ButtonPet{
                    
                    button{
                        font-size: .7em;

                    }
                }

                

            }

            @media (max-width: 421px ){

                .FormPet{
                    width: 100%;

                        div{
                            width: 100%;
                        }           

                }


            }

        `;