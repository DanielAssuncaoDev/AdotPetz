import {Container} from './styled'

import Cabecalho from '../../../components/cabecalhoUSU/index'
import FaixaPesquisa from './busca.js'
import PorqueAdotar from '../../../components/PorqueAdotar/index'
import FacaDoacoes from './facadoacoes'
import Rodape from '../../../components/rodape/index'

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