import styled from 'styled-components';

// {}

export const Container = styled.div`

    
    padding-top: 4em;

        .Titulo{
            font-size: 2em;
            font-weight: 700;

            padding: 0 1.3em;
            margin-bottom: 1em;
        }   .Titulo span{
            color: #FAD41B;
        }


        .Cont-box{
            display: flex;
            justify-content: space-evenly;

            position: relative;
            top: 2em;
        }


`;




export const BoxPorqueAdotar = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;


    width: 30%;
    padding: 4em 3em 0;

    border-radius: 8px;
    background: ${ (props) => props.color };
    box-shadow: 6px 6px 9px rgba(0, 0, 0, 0.1);
    transition-property: box-shadow;
    transition: 1s;


    &:hover{
        box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.35);

    }
  


        .TextBox{
            margin-top: ${ (props) => props.margin};
            line-height: 22px;
            max-width: 258px;
            text-align: center;

            font-size: 1.2em;
            color: ${ (props) => props.colortext };
            font-weight: 400;

        }

        .imgPet-box{
            width: 150px;
            position: relative;

            top: 4.1em;
            right: 6em;

        }   .imgPet-box img{
            width: 100%;
        } 


`;