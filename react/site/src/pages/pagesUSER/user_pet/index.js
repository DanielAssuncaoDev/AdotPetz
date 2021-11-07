import { Container } from './styled';

import { useState, useEffect } from 'react';

import Cabecalho from '../../../components/comun/cabecalhoUSU'
import Rodape from '../../../components/comun/rodape'
import PorqueAdotar from '../../../components/comun/PorqueAdotar/index'

import InfoPet from './BoxPet'

import Box from './InfoPet'

export default function InfoPetz(props) {
    const [animals, setAniamls] = useState([])

  function listar() {
    const r = [
        {
        id: 10002,
        imagem: "/assets/images/bartolomeu.svg",
        nome: "Bartolomeu",
        localizaçao: "São Paulo - SP",
        sexo: "Macho",
        imagemSex: '/assets/images/sexo-macho.svg'
        },
      {
        id: 10002,
        imagem: "/assets/images/bartolomeu.svg",
        nome: "Bartolomeu",
        localizaçao: "São Paulo - SP",
        sexo: "Macho",
        imagemSex: '/assets/images/sexo-macho.svg'
      },
      {
        id: 10002,
        imagem: "/assets/images/bartolomeu.svg",
        nome: "Bartolomeu",
        localizaçao: "São Paulo - SP",
        sexo: "Macho",
        imagemSex: '/assets/images/sexo-macho.svg'
      },
      {
        id: 10002,
        imagem: "/assets/images/bartolomeu.svg",
        nome: "Bartolomeu",
        localizaçao: "São Paulo - SP",
        sexo: "Macho",
        imagemSex: '/assets/images/sexo-macho.svg'
      },
      {
        id: 10002,
        imagem: "/assets/images/bartolomeu.svg",
        nome: "Bartolomeu",
        localizaçao: "São Paulo - SP",
        sexo: "Macho",
        imagemSex: '/assets/images/sexo-macho.svg'
      }
    ]

    setAniamls(r)
  }
    useEffect( () => {
        listar()
    }, [])

    return (
        <Container>
            <Cabecalho/>
            <InfoPet pet={props.location.state} />
            <div className="others-pets">
                <div className="title-f2"> Outros bichinhos que esperando para fazer parte de uma família </div>
                <div className="other-container"> 
                    {animals.map(item => 
                        <Box info={item} />
                    )} 
                   
                </div>
                <div class="refresh"> <button> Carregar mais </button> </div>
            </div>      
            <PorqueAdotar/>
            <Rodape/>
        </Container>
    )
}