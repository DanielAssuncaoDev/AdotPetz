import styled  from "styled-components";

// {}

export const Container = styled.div`
    
    color: #FFF;
    background-color: #000;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 10vh;
    padding: 0 4vh;

        .line-left{
            display: flex;
            align-items: center;
        }

        .box-logo{
            display: flex;
            align-items: center;
            
            height: 6vh;

                img {
                        height: 100%;
                        cursor: pointer;
                }
                
        }

        

        .informacoes{
            display: flex;
            flex-direction: row;

            margin-left: 7vh; 

                span{
                    height: 5vh;

                    
                }
        }

        .Cont-inf{
            padding: .5em;
            font-size: 2.2vh;

            cursor: pointer;
        }

        .line-right{
            width: 50%;
            display: flex;
            justify-content: flex-end;

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
       

`;

