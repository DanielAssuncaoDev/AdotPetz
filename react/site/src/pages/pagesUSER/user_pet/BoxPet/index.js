import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { Container } from "./styled";

import LineText from '../../../../components/comun/line/index'

export default function BoxPet(props) {

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
                <div>
                    <Carousel width="400px" infiniteLoop="true" className="carrosel">
                        {Imgs.map((box)=>
                                <div> <img src={box.img} alt="" width="400"/> </div>
                            )
                        }
                    </Carousel>
                </div>
                <div className="informations-box"> 
                    <div className="infopet">
                        <LineText titulo="Panda"/>
                        <div className="informations-pet"> 
                            <div className="info"> {props.especie + ' | '} </div>
                            <div className="info"> {props.sexo + ' | '} </div>
                            <div className="info"> {props.porte + ' | '} </div>
                            <div className="info"> {props.age + ' | '} </div>
                            <div className="info"> {props.kg + ' | '} </div>
                            <div className="info"> {props.raca} </div>
                        </div>
                    </div>
                    <div className="box-saude-pet">
                        <LineText titulo="Saúde"/>
                        <div className="text-dog-castrated"> Castrado </div>
                        <div className="vaccines"> 
                            <div className="title"> Vacinas: </div>
                            <div className="text-vaccines"> V8, V10, Antirrabica </div>
                        </div>
                    </div>
                    <div className="info-desc-pet">
                        <LineText titulo="Descrição"/>
                        <div className="text-description"> {props.Description} </div>
                    </div>
                    <div className="Adopt-button"> <button> QUERO ADOTAR ESSE PET </button></div>
                </div>
            </Container>
    )
}