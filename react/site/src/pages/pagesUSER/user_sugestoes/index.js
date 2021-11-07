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

const [filtroPets] = useState(props.location.state)


    
        useEffect( () => {
const listarPets = async() => {
        let pets = null
        
            if(filtroPets !== undefined){
                pets = await api.listarPets(filtroPets)

            } else{
                pets = await api.listarPets({
                    "sexo": "",
                    "porte": "",
                    "idade": {
                      "dataStart": "",
                      "dataFinish": null
                    },
                    "especie": "",
                    "raca": ""
                  })
            }
        setPets(pets)
        // console.log(pets)
    }

            listarPets()
        }, [filtroPets])

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
                        {
                            pets.map( (pet) => 
                                <Box Animal={pet} />
                            )
                        }
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