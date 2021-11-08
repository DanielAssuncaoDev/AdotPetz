import {Container} from './styled'

//import Img1 from '../../../../public/assets/images/pet1.png'
import CabecalhoUSU from '../../../components/comun/cabecalhoUSU';
import Box from '../../../components/comun/BoxPet'
import Fx1 from './buscar.js'
import Roda from '../../../components/comun/rodape'

import { useState, useEffect } from 'react'

import Api from '../../../service/api'
const api = new Api()


export default function Sugestoes(props){

const [pets, setPets] = useState([])

    const listarPets = async() => {
        let pets = await api.listarPets(props.location.state)
        setPets(pets)
        console.log(pets)
    }
        useEffect( () => {
            listarPets()
        }, [])

    return(
         <Container> 
             <CabecalhoUSU />

             <Fx1 />

             <div className="conteudopag">
                 <div className="animais">
                     <div className=
                     "animais-sugeridos">
                         <div className="animaisSU"> Animais sugeridos</div>
                         <img src="/assets/images/coracaopata.svg" alt="" />
                          </div>
                      </div>
                    <div className='box-petz'> 
                        {
                            pets.map( (pet) => 
                                <Box Animal={pet} />
                            )
                        }
                        {/* <Box imagem='/assets/images/pet5.svg' nome='Bob' localização='São Paulo - SP' sexo='Macho' imagemSex='/assets/images/sexo-macho.svg' />
                        <Box imagem='/assets/images/pet4.svg' nome='Billy' localização='São Paulo - SP' sexo='Macho' imagemSex='/assets/images/sexo-macho.svg' />
                        <Box imagem='/assets/images/pet3.svg' nome='Max' localização='São Paulo - SP' sexo='Macho' imagemSex='/assets/images/sexo-macho.svg' />
                        <Box imagem='/assets/images/pet2.svg' nome='Jujuba' localização='São Paulo - SP' sexo='Fêmea' imagemSex='/assets/images/sexo-femea.svg'/>
                        <Box imagem='/assets/images/pet1.svg' nome='Ammy' localização='São Paulo - SP' sexo='Fêmea' imagemSex='/assets/images/sexo-femea.svg'/>
                        <Box imagem='/assets/images/pet3.svg' nome='Max' localização='São Paulo - SP' sexo='Macho' imagemSex='/assets/images/sexo-macho.svg' />
                        <Box imagem='/assets/images/pet2.svg' nome='Jujuba' localização='São Paulo - SP' sexo='Fêmea' imagemSex='/assets/images/sexo-femea.svg'/>
                        <Box imagem='/assets/images/pet1.svg' nome='Ammy' localização='São Paulo - SP' sexo='Fêmea' imagemSex='/assets/images/sexo-femea.svg'/> */}
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