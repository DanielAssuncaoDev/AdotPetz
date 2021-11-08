import { Container } from './styled';

import Cabecalho from '../../../components/comun/cabecalhoUSU'
import Rodape from '../../../components/comun/rodape'
import PorqueAdotar from '../../../components/comun/PorqueAdotar/index'

import InfoPet from './BoxPet'
import Box from '../../../components/comun/BoxPet/index.js'

import { useState, useEffect } from 'react';

import Api from '../../../service/api.js'
const api = new Api()

export default function InfoPetz(props) {
  const [pets, setPets] = useState([])
  const [filtroPets, setFiltroPets] = useState(props.location.state)


  const [pagsOffSet, setPagsOffSet] = useState(0)
  const [pagsLimit, setPagsLimit] = useState(3)

  useEffect( () => {
    console.log("Caiu Effect")

      const listarPets = async() => {
            let filtro = {
              "sexo": "",
                "porte": "",
                "idade": {
                    "dataStart": "",
                    "dataFinish": null
                },
                "especie": "",
                "raca": ""
            }
            let pets = await api.listarPets(filtro, pagsLimit, pagsOffSet)
            setPets(pets.petsOffSet)
            console.log(pets)
      }

  listarPets()
  }, [filtroPets])

    return (
        <Container>
            <Cabecalho/>
            <InfoPet pet={props.location.state} />
            <div className="others-pets">
                <div className="title-f2"> Outros bichinhos que esperando para fazer parte de uma família </div>
                <div className="other-container"> 
                    {pets.map(item => 
                        <Box Animal={item} />
                    )} 
                   
                </div>
                <div class="refresh"> <button> Carregar mais </button> </div>
            </div>      
            <PorqueAdotar/>
            <Rodape/>
        </Container>
    )
}