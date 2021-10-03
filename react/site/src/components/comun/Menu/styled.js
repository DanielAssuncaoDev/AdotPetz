import styled from 'styled-components'

// {}

export const ContainerMenu = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    height: 24px;

    @media (min-width: ${ (props) => props.hidden} ){
        display: none;
    }

`;