// import { confirmAlert } from 'react-confirm-alert'; // Import
// import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import Cabecalho from '../../../components/comun/cabecalhoUSU'
import Rodape from '../../../components/comun/rodape'
import { Container } from './styled';

import Mensagem from '../../../components/popups/MensagemForm/index'
import { useState } from 'react';

export default function Sujestoes(){

    // function Prosseguir() {
    //     confirmAlert({
    //         title: 'Adoção em processo',
    //         message: `Muito obrigada por confirmar seu interesse em adotar o petzinho, o seu pedido de adoção será analisado pela equipe administrativa da ONG Adot Petz. Por favor, aguarde nossa equipe entrar em contato com você para mais detalhes.`,
    //         buttons: [
    //             {
    //                 label: 'Sim',
    //             },
    //             {
    //                 label: 'Não'
    //             }
    //         ]
    //     });
    // }

    const [popUp, setPopUp] = useState(false)

    

    return( 
        <Container>
            <Cabecalho/>

            {
                popUp === true

                ?
                    <Mensagem popUp={popUp}
                                setPopUp={setPopUp} 
                                    NomePet="Panda" 
                    />

                : 
                    ''
            }

            
            <div className="ContainerBody">
                <div className="ContainerForm"> 
                    <div className="text-thanking-user">
                        <div className="text1"> Obrigada por se interessar em adotar a panda!! Ela adorou a notícia de que tem alguém interessado em adotá-la </div>
                        <div className="obs-for-user"> Para prosseguir com a adoção, é necessário que você preencha todas as lacunas a seguir com suas informações pessoais, certifique se todas informações estão corretas e avance com o processo </div>
                        <div className="img"> <img src="/assets/images/core.png" width="100" alt=""/> </div>
                    </div>
                    <div className="ContainerInputs"> 
                        <div className="Name"> <input type="text" placeholder="Nome completo"/> </div>
                        <div className="InputsGroup"> 
                            <div className="Nascimento"> <input type="text" placeholder="Nascimento"/> </div>
                            <div className="rg"> <input type="text" placeholder="RG"/> </div>
                            <div className="telefone"> <input type="number" placeholder="Telefone"/> </div>
                        </div>
                        <div className="InputsGroup"> 
                            <div className="cep"> <input type="text" placeholder="CEP"/> </div>
                            <div className="endereco"> <input type="text" placeholder="Endereço"/> </div>
                            <div className="numero"> <input type="text" placeholder="Número"/> </div>
                        </div>
                        <div className="InputsGroup"> 
                            <div className="complemento">  <input type="text" placeholder="Complemento"/> </div>
                            <div className="cidade"> <input type="text" placeholder="Cidade"/> </div>
                            <div className="bairro"> <input type="text" placeholder="Bairro"/> </div>
                        </div>
                    </div>
                    <div class="button"> <button onClick={() => setPopUp(true)}> Prosseguir com o processo de adoção </button> </div>
                </div>
            </div>
        <Rodape/>
        </Container>
    )
}