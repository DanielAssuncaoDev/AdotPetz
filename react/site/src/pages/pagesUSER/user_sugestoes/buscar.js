import {ContainerBusca} from './styled';

import Filtro from '../../../components/filtrobusca/filtroBusca.js'

export default function Busca() {
    return(
        <ContainerBusca>
            <Filtro />
            <div className="space"></div>
        </ContainerBusca>
    );
}