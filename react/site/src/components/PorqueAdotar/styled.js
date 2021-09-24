import styled from 'styled-components';


export const Container = styled.div`

    height: 60vh;


        .Cont-box{
            display: flex;
            justify-content: space-evenly;
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
    box-shadow: 5px 5px 9px rgba(0, 0, 0, 0.35);

        .TextBox{
            line-height: 22px;
            max-width: 228px;
            text-align: center;
            color: ${ (props) => props.colortext };
            font-weight: 400;

        }

`;