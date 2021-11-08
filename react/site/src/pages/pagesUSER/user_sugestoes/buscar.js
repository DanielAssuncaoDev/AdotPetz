import {ContainerBusca} from './styled';

import Filtro from '../../../components/comun/filtroBusca/filtroBusca.js'

export default function Busca(props) {

    return(
        <ContainerBusca>
            <Filtro setFiltroPets={props.setFiltroPets}/>
        </ContainerBusca>
    );
}