import styled from 'styled-components';

// {}

export const Container = styled.div`

    
    padding: 5.5vh 4.5vh;

        .Titulo{
            font-size: 5vh;
            font-weight: 700;

            padding-left: 3vh;
            margin-bottom: 4vh;
            border-left: 1vh solid #FAD41B;


        }   .Titulo span{
            color: #FAD41B;
            font-weight: 700;
        }




        .Cont-box{
            display: flex;
            justify-content: space-between;
        }

        @media (max-width: 750px){

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

    min-height: 55vh; 
    width: 30%;
    padding-bottom: 3vh;

    border-radius: 0 0 3vh 3vh;
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
            line-height: 3.4vh;
            max-width: 70%;
            
            text-align: center;

            font-size: 2.8vh;
            color: ${ (props) => props.colortext };
            font-weight: 400;

        }

        @media (max-width: 750px){

            &{
                width: 75%;

                margin-bottom: 3vh;
            }

        }

        @media (max-width: 480px){

            &{
                width: 100%;
            }

        }

  `;

     