import {Container} from './styled'


import CabecalhoUSU from '../../../components/comun/cabecalhoUSU';
import Box from '../../../components/comun/BoxPet'
import Fx1 from './buscar.js'
import Roda from '../../../components/comun/rodape'


export default function Sujestoes(){
    return(
         <Container> 
             <CabecalhoUSU />

             <Fx1 />

             <div className="conteudopag">
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
                    <div className='nupags'> 
                      <div className='nu'> 1 </div>
                      <div className='nu'> 2 </div>
                      <div className='nu'> 3 </div>
                      <div className='nu'> 4 </div>
                      <div className='nu'> 5 </div>
                      <div className='pon'> ... </div>
                      <div className='nu'> 12 </div>
                      <button> Próximo </button>
                    </div>
                 </div> 
            <Roda />
         </Container>
    );
}