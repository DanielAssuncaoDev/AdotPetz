import {Container} from './styled'

import CabecalhoADM from '../../../components/cabecalhoADM/index'

export default function SolicitacaoAdocao() {

    return(
        <Container>
            <CabecalhoADM />

            <div className="optionsContainer" >
                <div className="option-voltar">
                    <img src="/assets/images/icon_voltar.svg" alt="" />
                </div>

                <div className="option-recarregar">
                    <img src="/assets/images/icon_refresh.svg" alt="" />
                </div>
            </div>


        </Container>
    );
}