import styled from 'styled-components';

// {}

export const Container = styled.div`

    background-color: #8E8E8E;
    height: 100vh;


        
`;

        export const FaixaForm = styled.div`
        
            padding: 2em;

                label{
                    color: #FAD41B;
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

                .Row1,
                .Row2,
                .Row3{
                    display: flex;

                    div{
                        display: flex;
                        flex-direction: column;
                    }
                } 
        `;