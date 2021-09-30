import styled from 'styled-components';

// {}

export const Container = styled.div`

    
    padding: 4em 0 2.3em;

        .Titulo{
            font-size: 2em;
            font-weight: 700;

            padding: 0 1.3em;
            margin-bottom: 1em;
        }   .Titulo span{
            color: #FAD41B;
            font-weight: 700;
        }


        .Cont-box{
            display: flex;
            justify-content: space-evenly;
        }


`;




export const BoxPorqueAdotar = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-between; */

    min-height: 55vh; 
    width: 30%;
    padding-bottom: 1.4em;

    border-radius: 0 20px 20px;
    background-color: transparent;
    box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.15);
    transition-property: box-shadow;
    transition: .5s;


    &:hover{
        box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.35);

    }

        .ImgPet{
            /* border-radius: 20px; */
            min-height: 55vh; 
            width: 100%;

                img{
                    width: 100%;
                    height: 100%;
                }
        }


        .TextBox{
            margin-top: 1em;
            line-height: 22px;
            max-width: 258px;
            text-align: center;

            font-size: 1.2em;
            color: ${ (props) => props.colortext };
            font-weight: 400;

        }

  `;

     