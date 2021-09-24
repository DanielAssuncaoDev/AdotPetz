import {ContainerBusca} from './styled';

import Filtro from '../../../components/filtroBusca/filtroBusca.js'

export default function Busca() {
    return(
        <ContainerBusca>
            <Filtro />
            <div className="space"></div>
        </ContainerBusca>
    );
}