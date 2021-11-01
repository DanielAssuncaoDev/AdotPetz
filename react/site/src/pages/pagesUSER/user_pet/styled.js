import styled from "styled-components";

export const Container = styled.div`
    .carrosel{
        display: flex;
        flex-direction: column;
        align-items: center;  


            .slider li {
                text-align: -webkit-right;
            }

            .control-arrow {
                visibility: hidden;
            }

            .carousel-status, .carousel .thumbs{
                display: none;
            }

            .control-dots .dot {
                background-color: #26251d;
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
            .pets-informations-container{
                flex-direction: column;
                align-items: center;  
            }

            .other-container{
                width: 80%;
            }

            .img-pet img{
                width: 100%;  
            }

            .informations-box{
                width: 100%;
            }

            .carrosel{
                width: 100%;
            }
        }
`