import {ContainerPopUp} from './styled'
import {Link} from 'react-router-dom' 

export default function PopUpMensagemForm(props){


    return(
        <ContainerPopUp>
            
            <div className="BoxMensagem">

                <div className="TituloBox">
                    <span>  ADOÇÃO EM PROCESSO  </span>
                    <img src="/assets/images/core.png" width="100" alt=""/>                </div>

                <p>Muito obrigado por confirmar seu interesse em adotar o(a) {props.NomePet}, o seu pedido de adoção será analizado pela equipe administrativa da ONG SOS PETs. Por favor, aguarde que nossa equipe entre em contato com você para mais detalhes. </p>
                <p> Caso a ONG não entre em contato dentro de 5 dias, mande um e-mail para: <br/> adotpetz@outlook.org.br, ou ligue para (11) 5555-5555, informando seu nome, RG, e CEP. </p>

                <div className="ContainerButtons">
                    <button onClick={() => props.setPopUp(false) } > Cancelar </button>
                    <Link to="/minhaconta">
                        <button onClick={() => props.setPopUp(false) } > Ok </button>
                    </Link>
                </div>

            </div>

        </ContainerPopUp>
    )
}