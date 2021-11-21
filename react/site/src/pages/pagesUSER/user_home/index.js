import {Container} from './styled'

import Cabecalho from '../../../components/comun/cabecalhoUSU/index'
import FaixaPesquisa from './busca.js'
import PorqueAdotar from '../../../components/comun/PorqueAdotar/index'
import FacaDoacoes from './facadoacoes'
import Rodape from '../../../components/comun/rodape/index'

import { useEffect } from 'react'

export default function Home(props) {

  useEffect( () => {
    if( props.location.state === 'ScrollComponentFazerDoação'){
      let ElementoDoar = document.getElementById("facaDoacoes")
      ElementoDoar.scrollIntoView({behavior: 'smooth'})
    }

  }, [props] )


    return(
      <Container>
          <Cabecalho />

            <FaixaPesquisa />
            <PorqueAdotar />
            <div id="facaDoacoes">
              <FacaDoacoes />
            </div>

        <Rodape />          

      </Container>  
    );
}