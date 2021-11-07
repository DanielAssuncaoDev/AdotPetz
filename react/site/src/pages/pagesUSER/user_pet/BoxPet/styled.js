import styled from "styled-components";

export const Container = styled.div`
        display: flex;
        flex-direction: row;  
        justify-content: center;

        padding: 2em;
        
    .more-images, .vaccines, .informations-pet{
        display: flex;
        flex-direction: row;
    }

    .informations-box{
        background: #F5F5F5;
        border-radius: 10px;
        width: 600px;
        height: 380px;
        
        margin: 0em 1.5em;
    }
    .infopet, .box-saude-pet, .info-desc-pet {
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .infopet{
        padding: 1.2em; 
    }
    .box-saude-pet{
        background: rgba(0, 0, 0, 0.02);
        padding: 1.2em; 
    }
    .info-desc-pet{
        background: rgba(0, 0, 0, 0.08);
        padding: 1.2em; 
    }
    .informations-pet{
        margin: 0 1em;
        flex-wrap: wrap;
    }
    .info, .text-dog-castrated, .text-vaccines, .text-description{
        font-weight: lighter;
        font-size: .8em;
    }

    .info{
        padding: .2em;
    }
    .title{
        font-size: .8em;
        margin: 0 .3em 0 -.4em;
    }
    .text-dog-castrated, .text-description{
        margin: .5em;
    }
    .text-dog-castrated, .vaccines, .text-description{
        margin-left: 1.8em;
    }

    .vaccines{
        align-items: center;
    }

    .Adopt-button button{
        width: 100%;
        height: 80px;
        background: #FAD41B;

        border-radius: 5px; 
        border: none;

        font-size: 1.2em;
        font-weight: bold;
        color: white;

        cursor: pointer;
        outline: none;

        transition: .5s;

        &:hover{
            box-shadow: 5px 5px 10px rgba(0, 0, 0, .30);
            cursor: pointer;
        }

    }

    @media (max-width: 1024px) {
        flex-direction: column;

        .informations-box {
            width: 100%;
            margin: 0;
        }

        .informations-pet{
            margin: 0 1em;
        }
    }

`;


