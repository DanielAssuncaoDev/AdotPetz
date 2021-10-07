import {Container,
            Fx1,
                BoxSelecionarEspecie 

    } from './styled'; 

    

import Cabecalho from '../../../components/comun/cabecalhoUSU/index'
import Rodape from '../../../components/comun/rodape/index'

export default function DicasCuidados() {

    return(
        <Container>
            <Cabecalho />

            <Fx1>
                <BoxSelecionarEspecie>
                    <div className="DescBox">
                        Adotei um petzinho. O que devo fazer agora?
                    </div>

                    <div className="Titulobox">
                        COMO CUIDAR DO MEU:
                    </div>

                    <div className="LineBotoes">
                     <button style={{'backgroundColor': 'black', 'color': 'white'}} >  Doguinho  </button>
                     <button style={{'backgroundColor': '#FAD41B' }} > Gatinho</button>
                    </div>
                </BoxSelecionarEspecie>
            </Fx1>

            <Rodape />

        </Container>
    );
}
