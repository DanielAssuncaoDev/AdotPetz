import { Container } from './styled';

import Cabecalho from '../../../components/comun/cabecalhoUSU'
import Rodape from '../../../components/comun/rodape'
import PorqueAdotar from '../../../components/comun/PorqueAdotar/index'
import Line from '../.././../components/comun/line'
import Information from '../../../components/outros/informacoesdopet'
import Box from './BoxPet'

export default function InfoPetz() {
    return (
        <Container>
            <Cabecalho/>
            <div className="pets-informations-container"> 
                <div className="pets-photo"> 
                    <div className="img-pet"> <img src="/assets/images/photopet.svg" alt="" width="400"/> </div>
                    <div className="more-images"> 
                        <div class="img-circle-selecioned"> </div>
                        <div class="img-circle"> </div>
                        <div class="img-circle"> </div>
                    </div>
                </div>
                <div className="informations-box"> 
                    <div className="infopet">
                        <Line titulo="Panda"/>
                        <Information especie="cachorro" sexo="Macho" porte="Porte Médio" idade="7 meses" peso="5kg" raca="SRD"/>
                    </div>
                    <div className="box-saude-pet">
                        <Line titulo="Saúde"/>
                        <div className="text-dog-castrated"> Castrado </div>
                        <div className="vaccines"> 
                            <div className="title"> Vacinas: </div>
                            <div className="text-vaccines"> V8, V10, Antirrabica </div>
                        </div>
                    </div>
                    <div className="info-desc-pet">
                        <Line titulo="Descrição"/>
                        <div className="text-description"> Cachorrinho lindo uiui </div>
                    </div>
                    <div className="Adopt-button"> <button> QUERO ADOTAR ESSE PET </button></div>
                </div>
            </div>
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