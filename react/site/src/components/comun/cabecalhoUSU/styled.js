import styled  from "styled-components";

// {}

export const Container = styled.div`
    
    color: #FFF;
    background-color: #000;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    min-height: 10vh;
    padding: 5px 2em;

    z-index: 5;

        .line-left{
            display: flex;
            align-items: center;
        }

        .box-logo{
            display: flex;
            align-items: center;
            
            height: 2.6em;

                img {
                        height: 100%;
                        cursor: pointer;
                }
                
        }

        

        .informacoes{
            display: flex;
            flex-direction: row;

            margin-left: 3em; 
            
                span{
                    /* height: 5vh; */
                    padding: 6px;
                    /* border-radius: 33px; */
                    margin-left: 6px;
                    font-size: 1em;

                    display: flex;
                    align-items: center;
                    
                    cursor: pointer;

                    border-left: 2px solid transparent;

                    transition: .3s;
                    transition-property: all;

                        &:hover{
                            border-color: #FFF;
                            /* background-color: #d9d7ce; */
                        }
                    
                }
        }

        /* .Cont-inf{
            padding: 4px;
            font-size: 2.2vh;

            display: flex;
            align-items: center;

            cursor: pointer;
        } */

        .line-right{
            width: 50%;
            display: flex;
            justify-content: flex-end;


                .Box-Buttons {
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                }

                .botoes{
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;

                        button{
                            text-align: center;

                            height: 4.4vh;
                            font-size: 2vh;
                            margin-left: 1.3vh;
                            padding: 0;
                            border-radius: 0.6vh;
                            border: none;
                            cursor: pointer;

                                &:nth-child(1){
                                    width: 17%;
                                    background-color: #FFF;

                                    transition: 0.65s;
                                    transition-property: background-color;

                                        &:hover{
                                            background-color: #d9d7ce;
                                        }
                                }

                                &:nth-child(2){
                                    width: 10%;
                                    background-color: #FAD41B;

                                    transition: 0.65s;
                                    transition-property: background-color;

                                        &:hover{
                                            background-color: #f7e37e;
                                        }

                                }
                        }
                }
        }

        /* @media (min-width: 1001px){

      
            .ButtonMenu{
                display: none;
            }      

        } */


       @media (max-width: 1000px){

            position: sticky;
            top: 0px;

            .Box-Buttons div,
            .Box-Buttons button,
            .informacoes{
                display: none;
            }
    

       }




`;

