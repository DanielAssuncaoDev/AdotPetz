import {Container} from './styled'

import Cabecalho from '../../../components/comun/cabecalhoUSU/index'
import FaixaPesquisa from './busca.js'
import PorqueAdotar from '../../../components/comun/PorqueAdotar/index'
import FacaDoacoes from './facadoacoes'
import Rodape from '../../../components/comun/rodape/index'

export default function Home() {

    return(
      <Container>
          <Cabecalho />

            <FaixaPesquisa />
            <PorqueAdotar />
            <FacaDoacoes />

        <Rodape />          

      </Container>  
    );
}