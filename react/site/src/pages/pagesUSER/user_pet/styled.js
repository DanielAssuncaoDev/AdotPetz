import styled from "styled-components";

export const Container = styled.div`
    .pets-informations-container{
        display: flex;
        flex-direction: row;  
        justify-content: center;

        padding: 2em;
    }

    .img-circle {
        width: 10px;
        height: 10px;
        border-radius: 1em;
        border: 1px solid black;
        margin: .2em;

        cursor: pointer;
    } 

    .img-circle-selecioned {
        width: 10px;
        height: 10px;
        border-radius: 1em;
        border: 1px solid black;
        background: black;
        margin: .2em;

        cursor: pointer;
    }     
    .pets-photo{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .more-images, .vaccines{
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

    .text-dog-castrated, .text-vaccines, .text-description{
        font-weight: lighter;
        font-size: .8em;
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

    .others-pets{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items:center;
            width: 100%;

            background: #FAF8EB;
            padding: 3.5em 2em

        }
        
        .other-container{
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
        }

        .box{
            padding: .8em;
        }

        .title-f2{
            font-size: 1.2em;
            font-weight: bold;
            margin: 0 0 1em;
        }

        .refresh button {
            background: #FAD41B;
            border-radius: 5px;
            border: none;

            margin: 1em 0 0;
            padding: .5em 4em;

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
            padding: 0;
            .pets-informations-container, .other-container{
                flex-direction: column;
                align-items: center;
               
            }
            .img-pet img{
                width: 300px;
                
            }

            .informations-box{
                width: 100%;
            }
        }
`