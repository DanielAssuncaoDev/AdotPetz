import {Container,
            FaixaForm

} from './styled'

import CabecalhoADM from '../../../components/comun/cabecalhoADM/index'
import Options from '../../../components/comun/OptionsADM/index'
import { useState } from 'react';




export default function FormAdocaoADM(props){
    const [Formadocao, setFormadocao] = useState(props.location.state);
    const [Nomeuser, setNomeuser] = useState(Formadocao.NM_NOME_COMPLETO);
    const [Nascimento, setNascimento] = useState(Formadocao.DT_NASCIMENTO);
    const [Rg, setRg] = useState(Formadocao.DS_RG);
    const [Telefone, setTelefone] = useState(Formadocao.DS_TELEFONE);
    const [Cep, setCep] = useState(Formadocao.DS_CEP);
    const [Endereco, setEndereco] = useState(Formadocao.DS_ENDERECO);
    const [NumeroEN, setNumeroEN] = useState(Formadocao.DS_NUMERO);
    const [Complemento, setComplemento] = useState(Formadocao.DS_COMPLEMENTO);
    const [Cidade, setCidade] = useState(Formadocao.DS_CIDADE);
    const [Bairro, setBairro] = useState(Formadocao.DS_BAIRRO);
    const [DataSoli, setDataSoli] = useState(Formadocao.DT_SOLICITACAO);
    const [Status, setStatus] = useState(Formadocao.BT_ADOCAO_CONCLUIDA);
    const [NomePET, setNomePET] = useState(Formadocao.infob_apn_tb_pet.NM_PET);
    const [Especie, setEspecie] = useState(Formadocao.infob_apn_tb_pet.DS_ESPECIE);
    const [Imagem, setImagem] = useState(Formadocao.infob_apn_tb_pet.IMG_PET1);

    return(
        <Container>
            <CabecalhoADM />

            <FaixaForm>
                <Options />
           
                <div  className="TituloFx">
                    Formulário de Solicitação
                </div>

                <div className="Conteudo">
                
                    <div className="Form">
                        <div className="InfoRow1">
                            <div className="InfoUser">
                                <div className="TituloForm">
                                    INFORMAÇÕES DO USUÁRIO
                                </div>

                                <div className="Row1">
                                    <div className="NomeUse">
                                        <label>Nome Usuário:</label>
                                         <input value={Nomeuser} />
                                    </div>

                                    <div className="dtNascimento">
                                        <label>Nascimento:</label>
                                        <input valeu={Nascimento} />
                                    </div>

                                    <div className="RgUser">
                                        <label> RG: </label>
                                        <input value={Rg}/>
                                    </div>
                                </div>

                                <div className="Row2">
                                    <div className="TelUser">
                                        <label> Telefone: </label>
                                        <input value={Telefone}/>
                                    </div>

                                    <div className="CEPUser">
                                        <label>CEP:</label>
                                        <input value={Cep}/>
                                    </div>

                                    <div className="EnderecoUser">
                                        <label> Endereço: </label>
                                        <input value={Endereco}/>
                                    </div>

                                    <div className="NumeroUser">
                                        <label> N&deg; : </label>
                                        <input value={NumeroEN} />
                                    </div>
                                </div>

                                <div className="Row3">
                                    <div className="ComplementoUser">
                                        <label> Complemento: </label>
                                        <input value={Complemento} />
                                    </div>

                                    <div className="CidadeUser">
                                        <label> Cidade: </label>
                                        <input value={Cidade}/>
                                    </div>

                                    <div className="BairroUser">
                                        <label> Bairro: </label>
                                        <input value={Bairro}/>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="InfoRow2">

                            <div className="InfoPet" >

                                <div className="TituloPet">
                                    INFORMAÇÕES PET
                                </div>

                                <div className="ContPet">
                                    <div className="ImgPet">
                                        <img src={Imagem} alt=""  />
                                    </div>

                                    <div className="FormPet" >
                                        <div className="NomePet">
                                            <label> Nome: </label>
                                            <input value={NomePET}/>
                                        </div>

                                        <div className="Especie">
                                            <label> Espécie: </label>
                                            <input value={Especie}/>
                                        </div>

                                        <div className="ButtonPet">
                                            <button> Ver mais Informações do pet </button>
                                        </div>
                                    </div>
                                </div>


                        
                            </div>

                            <div className="InfoSolicitacoes">
                                <div className="TituloSolicitacoes">
                                    INFORMAÇÕES DA SOLICITAÇÃO
                                </div>

                                <div className="FormSolicitacao">
                                    <div className="DataSolicitacao">
                                        <label>Data da Solicitação</label>
                                        <input valeu={DataSoli} />
                                    </div>

                                    <div className="DataSolicitacao">
                                        <label>Status da Solicitação</label>
                                        <input value={Status} />
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>


                </div>
            </FaixaForm>
        </Container>
    );   
}