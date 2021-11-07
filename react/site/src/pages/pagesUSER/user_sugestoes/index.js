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
const [filtroPets, setFiltroPets] = useState(props.location.state)

const [pagList, setPagList] = useState([])
const [pagsOffSet, setPagsOffSet] = useState(0)
const [pagsLimit, setPagsLimit] = useState(6) 
    function Paginacao(qtd){
        let listPags = []
        let qtdPags = Math.ceil(qtd/pagsLimit)
        console.log(qtdPags)
        
            for( let i = 1; i <= qtdPags; i++ ){
                listPags.push(i)
            }

        setPagList(listPags)
    }


        useEffect( () => {
                const listarPets = async() => {
                    let pets = null
                
                        if(filtroPets !== undefined){
                            pets = await api.listarPets(filtroPets, pagsLimit, pagsOffSet)

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
                            }, pagsLimit, pagsOffSet)
                        }
                    Paginacao(pets.totalPets)
                    setPets(pets.petsOffSet)
                    console.log(pets)
                }

            listarPets()
        }, [filtroPets, pagsOffSet])



    return(
         <Container> 
             <CabecalhoUSU />

             <Fx1  setFiltroPets={setFiltroPets}/>

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
                    {
                        pagList.map((i) =>
                            <div className='nu'
                                onClick={ () => setPagsOffSet( pagsLimit * (i - 1) ) }
                            >
                                {i} 
                            </div>
                        )
                    }
                      
 
                      <button onClick={ () => {
                          setPagsOffSet( pagsOffSet + pagsLimit )
                      } }  
                      > Próximo </button>
                    </div>
                 </div> 
            <Roda />
         </Container>
    );
}