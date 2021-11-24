import {Container} from './styled'

//import Img1 from '../../../../public/assets/images/pet1.png'
import CabecalhoUSU from '../../../components/comun/cabecalhoUSU';
import Box from '../../../components/comun/BoxPet'
import Fx1 from './buscar.js'
import Roda from '../../../components/comun/rodape'
import RegistroNaoEncontrado from '../../../components/comun/RegistroNaoEncontrado/index'

import { useState, useEffect } from 'react'

import Api from '../../../service/api'
const api = new Api()


export default function Sugestoes(props){

const [pets, setPets] = useState([])
const [filtroPets, setFiltroPets] = useState(props.location.state)

const [pagList, setPagList] = useState([])
const [pagsOffSet, setPagsOffSet] = useState(0)
const [pagsLimit] = useState(12) 

    useEffect( () => {
        setPagsOffSet(0)
    }, [filtroPets] )

    
  useEffect( () => {
    const Scroll = () => {
        let ElementoDoar = document.getElementById("ConteudoPets")
        console.log(ElementoDoar)
        ElementoDoar.scrollIntoView({behavior: 'smooth'})

    }
    
    Scroll()
    
  }, [filtroPets] )


        useEffect( () => {
            function Paginacao(qtd){
                let listPags = []
                let qtdPags = Math.ceil(qtd/pagsLimit)
                
                    for( let i = 1; i <= qtdPags; i++ ){
                        listPags.push(i)
                    }
        
                setPagList(listPags)
            }

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
                }

            listarPets()
        }, [filtroPets, pagsOffSet, pagsLimit])



    return(
         <Container> 
             <CabecalhoUSU />

             <Fx1  setFiltroPets={setFiltroPets}/>

             <div id="ConteudoPets" className="conteudopag">
                <div className="animais">
                     <div className= "animais-sugeridos">
                         <div className="animaisSU"> Animais sugeridos</div>
                         <img src="/assets/images/coracaopata.svg" alt="" />
                    </div>
                </div>
                    <div className='box-petz'> 

                        {
                            pets.length !== 0 

                            ?
                                pets.map( (pet) => 
                                    <Box Animal={pet} />
                                )
                            
                            :
                                <RegistroNaoEncontrado mensagem={["OPS!! Nenhum Pet Foi Encontrado", "Tente Buscar Por Outros Filtros" ]}/>

                        }

                        
                    </div>

                    {
                        pagList.length !== 0 

                        ?
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
                                        } 
                                    }  
                                >   
                                Próximo 
                                </button>
                            </div>

                        :
                            ''

                    }
                    
                 </div> 
            <Roda />
         </Container>
    );
}