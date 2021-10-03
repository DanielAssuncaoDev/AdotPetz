import styled from 'styled-components'

// {}

export const ButtonMenu = styled.div`

    display: flex;

    @media (min-width: ${ (props) => props.hidden} ){
        display: none;
    }

`;