import styled from 'styled-components' 

// {}

export const ContainerPopUpMenu = styled.div`


    .BoxMenu{
        margin-top: 1em;
        
        min-height: 90vh;
        width: 200px;
        /* padding: 5px; */
    
        background-color: rgb(24, 24, 24);
        box-shadow: -5px 0px 4px rgba(0, 0, 0, .5);

        position: sticky;
        top: 0px;
        margin-right: -2em;

    }

    .UserOrLog{

        div{
            display: flex;
            align-items: center;

            width: 100%;
            padding: 1.2em;

            &:hover{
                background-color: #FFFFFF10;
            }   
        }

        
    }

    .MinhaConta img{
        margin-right: 4px;
    }
    


    .space{
        height: 2.5em;
        background-color: #FAD41B;
    }

    .Options{

        display: flex;
        flex-direction: column;

        span{
            display: flex;
            align-items: center;

            width: 100%;
            padding: .9em;

            &:hover{
                background-color: #FFFFFF10;
            }
        }
    }
`;