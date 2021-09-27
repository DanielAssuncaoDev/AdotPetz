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
                         <div className="animaisSU"> Animais sugeridos</div>
                         <img src="/assets/images/coracaopata.svg" alt="" />
                          </div>
                      </div>
                    <div className='box-petz'> 
                        <div className='box-cima'>
                            <Box />
                            <Box />
                            <Box />
                             </div>
                        <div className='box-meio'> 
                            <Box />
                            <Box />
                            <Box />
                        </div>
                        <div className='box-baixo'>
                            <Box />
                            <Box />
                            <Box />
                        </div>
                    </div>
                 </div> 
            <Roda />
         </Container>
    );
}