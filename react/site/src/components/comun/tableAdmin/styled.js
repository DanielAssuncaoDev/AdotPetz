import styled from "styled-components";


const Thead = styled.thead`
    th {
        padding-left: 10px;
        text-align: left;
        background-color: #FAD41B;
        color: white;
    }

    th:nth-child(1) {
        padding-left: 30px;
    }

    tr {
        height: 67px;
        color: #FFFFFF;
    }

`

const Tbody = styled.tbody`
    tr:hover {
        td * {
            visibility: visible;
        }
    }

    tr td:nth-child(1) {
        padding-left: 30px;
    }

    tr td:nth-last-child(1) {
        padding-right: 30px;
    }
`

const Tr = styled.tr`


`

const Td = styled.td`
    padding-left: 10px;
    height: 3.5em;

    width: ${props => props.config && props.config.width ? props.config.width : 'inherit'};

    & :nth-child(1) {
        visibility: ${props => props.config && props.config.visibility ? props.config.visibility : 'visible'};
    }
`

const TableAdm = styled.table`
    width: 100%;

    border-left: 1px solid #E2E2E2;
    border-right: 1px solid #E2E2E2;
    border-bottom: 1px solid #E2E2E2;
    border-collapse: collapse;

    color: #6D6868;

    tr:nth-child(odd){
        background-color: #F5F5F5;
    }

    tr:nth-child(even) {
        background-color: #FFFFFF;
    }
`


export { TableAdm, Thead, Tr, Td, Tbody }