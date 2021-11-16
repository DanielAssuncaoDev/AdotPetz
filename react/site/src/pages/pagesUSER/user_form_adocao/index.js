// import { confirmAlert } from 'react-confirm-alert'; // Import
// import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import Cabecalho from '../../../components/comun/cabecalhoUSU'
import Rodape from '../../../components/comun/rodape'
import { Container } from './styled';

import Mensagem from '../../../components/popups/MensagemForm/index'
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import Cookie from 'js-cookie'

export default function Sujestoes(props ){
    const [popUp, setPopUp] = useState(false)

    const [pet] = useState(props.location.state)
    // console.log(props.location.state)
    const [formUser, setFormUser] = useState({})
    const [nomeCompleto, setNomeCompleto] = useState('')
    const [nascimento, setNascimento] = useState('')
    const [rg, setRg] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cep, setCep] = useState('')
    const [numero, setNumero] = useState('')
    const [cidade, setCidade] = useState('')
    const [endereco, setEndereco] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')

    
const nav = useHistory()

    if(pet === undefined){
        nav.push('/sugestoesadocao')
    }

    if(Cookie.get('User') === undefined ){
        nav.push('/login')
    }

    function ChamarPopUp(){
        let idUser = JSON.parse(Cookie.get('User')).ID_USER
        console.log(idUser)

        let FormUser= {
            idUser,
            nomeCompleto, 
            nascimento,
            rg,
            telefone,
            cep,
            endereco,
            numero, 
            complemento, 
            cidade,
            bairro
        }
        setFormUser(FormUser)
        setPopUp(true)
    }



    return( 
        <Container>
            <Cabecalho/>

            {
                popUp === true

                ?
                    <Mensagem popUp={popUp}
                                setPopUp={setPopUp} 
                                    Form={formUser}
                                    Pet={pet} 

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
                        <div className="Name">
                            <input type="text" placeholder="Nome completo"
                                value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)}
                            /> 
                        </div>
                        <div className="InputsGroup"> 
                            <div className="Nascimento"> 
                                <input type="text" placeholder="Nascimento"
                                    value={nascimento} onChange={(e) => setNascimento(e.target.value)}
                                /> 
                            </div>
                            <div className="rg">
                                <input type="text" placeholder="RG"
                                    value={rg} onChange={(e) => setRg(e.target.value)}
                                />
                            </div>
                            <div className="telefone"> 
                                <input type="text" placeholder="Telefone"
                                    value={telefone} onChange={(e) => setTelefone(e.target.value)}  
                                />
                            </div>
                        </div>
                        <div className="InputsGroup"> 
                            <div className="cep"> 
                                <input type="text" placeholder="CEP"
                                    value={cep} onChange={(e) => setCep(e.target.value)}
                                />
                            </div>
                            <div className="endereco">
                                <input type="text" placeholder="Endereço"
                                    value={endereco} onChange={(e) => setEndereco(e.target.value)}
                                />
                            </div>
                            <div className="numero">
                                <input type="text" placeholder="Número"
                                    value={numero} onChange={(e) => setNumero(e.target.value)}
                                /> 
                            </div>
                        </div>
                        <div className="InputsGroup"> 
                            <div className="complemento">  
                                <input type="text" placeholder="Complemento"
                                    value={complemento} onChange={(e) => setComplemento(e.target.value)}
                                />
                            </div>
                            <div className="cidade"> 
                                <input type="text" placeholder="Cidade"
                                    value={cidade} onChange={(e) => setCidade(e.target.value)}
                                />
                            </div>
                            <div className="bairro"> 
                                <input type="text" placeholder="Bairro"
                                        value={bairro} onChange={(e) => setBairro(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div class="button"> <button onClick={() => ChamarPopUp()}> Prosseguir com o processo de adoção </button> </div>
                </div>
            </div>
        <Rodape/>
        </Container>
    )
}