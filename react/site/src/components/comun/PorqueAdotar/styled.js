import styled from 'styled-components';

// {}

export const Container = styled.div`

    
    padding: 5.5vh 4.5vh;
    display: flex;
    flex-direction: column;
    align-items: center;


        .Titulo{
            font-size: 2.2em;
            font-weight: 700;
            width: 100%;

            padding-left: 14px;
            margin-bottom: 1.1em;
            border-left: 5px solid #FAD41B;


        }   .Titulo span{
            color: #FAD41B;
            font-weight: 700;
        }




        .Cont-box{
            display: flex;
            justify-content: space-between;

            align-self: center;

            max-width: 1400px;
        }

        @media (max-width: 1000px){

            .Cont-box{
                flex-direction: column;
                align-items: center;

                padding: 2.5vh;
                /* justify-content: space-between; */
            }
   
        }

     

`;




export const BoxPorqueAdotar = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-between; */

    /* min-height: 55vh;  */
    width: 32%;
    padding-bottom: 1em;

    border-radius: 0 0 2em 2em;
    background-color: transparent;
    box-shadow: 1vh 1vh 2vh rgba(0, 0, 0, 0.15);
    transition-property: box-shadow;
    transition: .5s;


    &:hover{
        box-shadow: 1.5vh 1.5vh 3vh rgba(0, 0, 0, 0.35);

    }

        .ImgPet{
            /* border-radius: 20px; */
            /* min-height: 55vh;  */
            width: 100%;

            /* align-self: flex-start; */

                img{
                    width: 100%;
                    /* height: 56vh; */
                }
        }


        .TextBox{
            margin-top: 1em;
            line-height: 1.2em;
            max-width: 70%;
            
            text-align: center;

            font-size: 1.1em;
            color: ${ (props) => props.colortext };
            font-weight: 400;

        }

        @media (max-width: 1000px){

            &{
                width: 22em;

                margin-bottom: 3vh;
            }

        }

        @media (max-width: 480px){

            &{
                width: 90%;
                font-size: .9em;
            }

        }

  `;

     