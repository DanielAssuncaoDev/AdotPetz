import {Container} from './styled'


import CabecalhoUSU from '../../../components/cabecalhoUSU';
import Box from '../../../components/BoxPet'
import Fx1 from './buscar.js'
import Roda from '../../../components/rodape'


export default function Sujestoes(){
    return(
         <Container> 
             <CabecalhoUSU />

             <Fx1 />

             <div className="conteudo">
                 <div className="animais">
                     <div className="animais-sugeridos">
                         <div className="animaisSU"> Aniais sugeridos</div>
                         <img src="/assets/images/animaisSU.png" alt="" />
                          </div>
                      </div>
                 
                 
                 
                 </div> 
             
      <Box />

            <Roda />
         </Container>
    );
}