import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { Container } from "./styled";

import LineText from '../../../../components/comun/line/index'

import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Cookie from 'js-cookie'

import Api from '../../../../service/api'
const api = new Api()

export default function BoxPet(props) {

const [vacinas, setVacinas] = useState([])
    const nav = useHistory();

    const Imgs = [
        {
            img: props.pet.IMG_PET1
        },
        {
            img: props.pet.IMG_PET2
        },
        {
            img: props.pet.IMG_PET3
        }
    ]
    
        useEffect( () => {
            const FiltroVacinas = () => {

                let {BT_VACINA_V10, BT_VACINA_V8, BT_VACINA_V5, BT_VACINA_V4, BT_VACINA_V3, BT_VACINA_ANTIRRABICA } = props.pet
        
                let arrayVacinas = [
                    {
                        vacina: "V10",
                        ativo: BT_VACINA_V10
                    },
                    {
                        vacina: "V8",
                        ativo: BT_VACINA_V8
                    },
                    {
                        vacina: "V5",
                        ativo: BT_VACINA_V5
                    },
                    {
                        vacina: "V4",
                        ativo: BT_VACINA_V4
                    },
                    {
                        vacina: "V3",
                        ativo: BT_VACINA_V3
                    },
                    {
                        vacina: "Antirrabica",
                        ativo: BT_VACINA_ANTIRRABICA
                    }
                    
                ]
        
                arrayVacinas = arrayVacinas.filter( (v) => v.ativo === true )
                setVacinas(arrayVacinas)
            }

            FiltroVacinas()
        }, [props] )


        const VerificarPet = async() => {
            if( !Cookie.get('User') ){
                nav.push('/login')

            } else {
                const User = JSON.parse(Cookie.get('User'))

                let PetsSolicitados =
                    await api.listarMinhasAdocoes(User.ID_USER)


                PetsSolicitados = PetsSolicitados.filter( p => p.ID_PET === props.pet.ID_PET )
                // console.log(PetsSolicitados)
                // console.log(props.pet.ID_PET)

                    if( PetsSolicitados.length === 0 ){
                        nav.push({pathname: '/formadocao', state: props.pet })
                    
                    } else{
                        nav.push('/minhaconta')
                    } 

            }
        } 


    return (
        <Container> 
                <div>
                    <Carousel width="400px" infiniteLoop="true" className="carrosel">
                        {Imgs.map((box)=>
                                <div> <img src={box.img} alt="" width="400" height="350"/> </div>
                            )
                        }
                    </Carousel>
                </div>
                <div className="informations-box"> 
                    <div className="infopet">
                        <LineText titulo={props.pet.NM_PET}/>
                        <div className="informations-pet"> 
                            <div className="info"> {props.pet.DS_ESPECIE + ' | '} </div>
                            <div className="info"> {props.pet.DS_SEXO + ' | '} </div>
                            <div className="info"> {props.pet.DS_PORTE + ' | '} </div>
                            <div className="info"> {new Date(props.pet.DT_NASCIMENTO).toDateString("Pt-BR") + ' | '} </div>
                            <div className="info"> {props.pet.DS_PESO  + ' | '} </div>
                            <div className="info"> {props.pet.NM_RACA} </div>
                        </div>
                    </div>
                    <div className="box-saude-pet">
                        <LineText titulo="Saúde"/>
                        {
                            props.pet.BT_CASTRADO === true
                            ? <div className="text-dog-castrated"> Castrado </div>
                            : <div className="text-dog-castrated"> <b>Não</b> Castrado </div>
                        }
                        
                        {
                            vacinas.length === 0

                            ? 
                            <div className="vaccines"> 
                                <div className="title"> O Animal ainda não foi vacinado </div>
                            </div>
                            :    
                            <div className="vaccines"> 
                                <div className="title"> Vacinas: </div>
                                <div className="text-vaccines">  { vacinas.map( (v) => v.vacina + " ")} </div> 
                            </div>
                            
                        }
                        
                    </div>
                    <div className="info-desc-pet">
                        <LineText titulo="Descrição"/>
                        <div className="text-description"> {props.pet.DS_DESC} </div>
                    </div>
                    <div className="Adopt-button"> <button onClick={ () => VerificarPet()  }> QUERO ADOTAR ESSE PET </button></div>
                </div>
            </Container>
    )
}