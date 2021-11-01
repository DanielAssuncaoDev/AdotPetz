import { Container } from './styled';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Cabecalho from '../../../components/comun/cabecalhoUSU'
import Rodape from '../../../components/comun/rodape'
import PorqueAdotar from '../../../components/comun/PorqueAdotar/index'

import InfoPet from './BoxPet'

import Box from './InfoPet'

export default function InfoPetz() {

    const Imgs = [
        {
            img: '/assets/images/photopet.svg'
        },
        {
            img: '/assets/images/photopet.svg'
        },
        {
            img: '/assets/images/photopet.svg'
        }
    ]
    return (
        <Container>
            <Cabecalho/>
            <InfoPet />
            <div className="others-pets">
                <div className="title-f2"> Outros bichinhos que esperando para fazer parte de uma família </div>
                <div className="other-container"> 
                    <div className="box"> <Box imagem="/assets/images/bartolomeu.svg" nome="Bartolomeu" localização="SP - São Paulo" sexo="Macho" imagemSex='/assets/images/sexo-macho.svg' /> </div>
                    <div className="box"> <Box imagem="/assets/images/bartolomeu.svg" nome="Bartolomeu" localização="SP - São Paulo" sexo="Macho" imagemSex='/assets/images/sexo-macho.svg'/> </div>
                    <div className="box"> <Box imagem="/assets/images/bartolomeu.svg" nome="Bartolomeu" localização="SP - São Paulo" sexo="Macho" imagemSex='/assets/images/sexo-macho.svg'/> </div>
                    <div className="box"> <Box imagem="/assets/images/bartolomeu.svg" nome="Bartolomeu" localização="SP - São Paulo" sexo="Macho" imagemSex='/assets/images/sexo-macho.svg'/> </div>
                    <div className="box"> <Box imagem="/assets/images/bartolomeu.svg" nome="Bartolomeu" localização="SP - São Paulo" sexo="Macho" imagemSex='/assets/images/sexo-macho.svg'/> </div>
                </div>
                <div class="refresh"> <button> Carregar mais </button> </div>
            </div>      
            <PorqueAdotar/>
            <Rodape/>
        </Container>
    )}