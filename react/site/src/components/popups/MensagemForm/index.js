import {ContainerPopUp} from './styled'
import { useHistory } from 'react-router-dom' 

import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

import Api from '../../../service/api.js'
const api = new Api()

export default function PopUpMensagemForm(props){

const [formUser] = useState(props.Form)
const [Pet] = useState(props.Pet)

const nav = useHistory()

    const SolicitarAdocao = async () => {
        let idPet = Pet.ID_PET

        let adocao = await api.adotarPet(idPet, formUser )

            if(adocao.erro !== undefined){
                toast.error(adocao.erro)
                props.setPopUp(false)
                
            } else {
                nav.push('/minhaconta')
            }

    }

    return(
        <ContainerPopUp>
            <div>
                <ToastContainer />
            </div>
            <div className="BoxMensagem">

                <div className="TituloBox">
                    <span>  ADOÇÃO EM PROCESSO  </span>
                    <img src="/assets/images/core.png" width="100" alt=""/>                </div>

                <p>Muito obrigado por confirmar seu interesse em adotar o(a) <b>{Pet.NM_PET}</b>, o seu pedido de adoção será analizado pela equipe administrativa da ONG SOS PETs. Por favor, aguarde que nossa equipe entre em contato com você para mais detalhes. </p>
                <p> Caso a ONG não entre em contato dentro de 5 dias, mande um e-mail para: <br/> adotpetz@outlook.org.br, ou ligue para (11) 5555-5555, informando seu nome, RG, e CEP. </p>

                <div className="ContainerButtons">
                    <button onClick={() => props.setPopUp(false) } > Cancelar </button>
                    <button onClick={() => SolicitarAdocao() } > Ok </button>
                </div>

            </div>

        </ContainerPopUp>
    )
}