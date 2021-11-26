import {Container,
            FaixaForm

} from './styled'

import CabecalhoADM from '../../../components/comun/cabecalhoADM/index'
import Options from '../../../components/comun/OptionsADM/index'
import { useState } from 'react';
import {useHistory} from 'react-router-dom'



export default function FormAdocaoADM(props){
    const [Formadocao] = useState(props.location.state);
    const [Nomeuser] = useState(Formadocao.NM_NOME_COMPLETO);
    const [Nascimento] = useState(Formadocao.DT_NASCIMENTO);
    const [Rg] = useState(Formadocao.DS_RG);
    const [Telefone] = useState(Formadocao.DS_TELEFONE);
    const [Cep] = useState(Formadocao.DS_CEP);
    const [Endereco] = useState(Formadocao.DS_ENDERECO);
    const [NumeroEN] = useState(Formadocao.DS_NUMERO);
    const [Complemento] = useState(Formadocao.DS_COMPLEMENTO);
    const [Cidade] = useState(Formadocao.DS_CIDADE);
    const [Bairro] = useState(Formadocao.DS_BAIRRO);
    const [DataSoli] = useState(Formadocao.DT_SOLICITACAO);
    const [Status] = useState(Formadocao.BT_ADOCAO_CONCLUIDA);
    const [NomePET] = useState(Formadocao.infob_apn_tb_pet.NM_PET);
    const [Especie] = useState(Formadocao.infob_apn_tb_pet.DS_ESPECIE);
    const [Imagem] = useState(Formadocao.infob_apn_tb_pet.IMG_PET1);

const nav = useHistory()

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
                                         <input readonly value={Nomeuser} />
                                    </div>

                                    <div className="dtNascimento">
                                        <label>Nascimento:</label>
                                        <input readonly value={Nascimento} />
                                    </div>

                                    <div className="RgUser">
                                        <label> RG: </label>
                                        <input readonly value={Rg}/>
                                    </div>
                                </div>

                                <div className="Row2">
                                    <div className="TelUser">
                                        <label> Telefone: </label>
                                        <input readonly  value={Telefone}/>
                                    </div>

                                    <div className="CEPUser">
                                        <label>CEP:</label>
                                        <input readonly value={Cep}/>
                                    </div>

                                    <div className="EnderecoUser">
                                        <label> Endereço: </label>
                                        <input readonly value={Endereco}/>
                                    </div>

                                    <div className="NumeroUser">
                                        <label> N&deg; : </label>
                                        <input readonly value={NumeroEN} />
                                    </div>
                                </div>

                                <div className="Row3">
                                    <div className="ComplementoUser">
                                        <label> Complemento: </label>
                                        <input readonly value={Complemento} />
                                    </div>

                                    <div className="CidadeUser">
                                        <label> Cidade: </label>
                                        <input readonly value={Cidade}/>
                                    </div>

                                    <div className="BairroUser">
                                        <label> Bairro: </label>
                                        <input readonly value={Bairro}/>
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
                                        <img src={Imagem} alt="" style={{width: '10em', height: '10em'}}  />

                                    </div>

                                    <div className="FormPet" >
                                        <div className="NomePet">
                                            <label> Nome: </label>
                                            <input readonly value={NomePET}/>
                                        </div>

                                        <div className="Especie">
                                            <label> Espécie: </label>
                                            <input readonly value={Especie}/>
                                        </div>

                                        <div className="ButtonPet">
                                            <button
                                                onClick={() => nav.push({pathname: '/pet', state: Formadocao.infob_apn_tb_pet })}
                                            > Ver mais Informações do pet </button>
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
                                        <input value={new Date(DataSoli).toLocaleDateString('pt-BR')} />
                                    </div>

                                    <div className="DataSolicitacao">
                                        <label>Status da Solicitação</label>
                                        <input value={Status === false ? 'Em Análise' : 'Adoção Finalizada' } />
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