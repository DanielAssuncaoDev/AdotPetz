import styled from 'styled-components'

export const ContainerFiltros = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    margin-top: 12px;



        .FiltrarPor, 
        .RegistroPFiltrar {
            width: min-content; 
        
            label{
                margin-right: 6px;
                margin-bottom: 5px;
            }

            select,
            input{
                background-color: #AEAEAE;

                border: none;
                border-radius: 4px;
                font-weight: 500;
                color: #00000046;
                fill: #00000046;
                font-size: .8em;
                
                margin-top: 3px;
                width: 200px;
                height: 30px;
            }

            input{
                
            }

            @media (max-width: 800px){
  
                        .optionsContainer span{
                            height: 1.4em;
                            width: 1.4em;
                        }

                        .FiltrarPor {
                            display: flex;
                            flex-direction: column;


                            label{
                                font-size: 12px;
                            }

                            select{
                                background-color: #AEAEAE;

                                border: none;
                                border-radius: 4px;
                                color: #00000046;
                                fill: #00000046;

                                width: 160px;
                                height: 25px;
                            }

                        }


                        
                }

        }

`;


