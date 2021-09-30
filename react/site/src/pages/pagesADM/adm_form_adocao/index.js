import {Container,
            FaixaForm

} from './styled'

import CabecalhoADM from '../../../components/comun/cabecalhoADM/index'

export default function FormAdocaoADM(){

    return(
        <Container>
            <CabecalhoADM />

            <FaixaForm>
                <div className="ContainerOptions">   
                    <div className="OptionVoltar">
                        <span>
                            <img src="/assets/images/icon_voltar.svg" alt="" />
                        </span>    
                    </div>                

                    <div className="OptionRecarregar">
                        <span>
                            <img src="/assets/images/icon_refresh.svg" alt="" />
                        </span>    
                    </div>   
                </div>
           
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
                                        <input />
                                    </div>

                                    <div className="dtNascimento">
                                        <label>Nascimento:</label>
                                        <input />
                                    </div>

                                    <div className="RgUser">
                                        <label> RG: </label>
                                        <input />
                                    </div>
                                </div>

                                <div className="Row2">
                                    <div className="TelUser">
                                        <label> Telefone: </label>
                                        <input />
                                    </div>

                                    <div className="CEPUser">
                                        <label>CEP:</label>
                                        <input />
                                    </div>

                                    <div className="EnderecoUser">
                                        <label> Endereço: </label>
                                        <input />
                                    </div>

                                    <div className="NumeroUser">
                                        <label> Número: </label>
                                        <input />
                                    </div>
                                </div>

                                <div className="Row3">
                                    <div className="ComplementoUser">
                                        <label> Complemento: </label>
                                        <input />
                                    </div>

                                    <div className="CidadeUser">
                                        <label> Cidade: </label>
                                        <input />
                                    </div>

                                    <div className="BairroUser">
                                        <label> Bairro: </label>
                                        <input />
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
                                        <img src="/assets/images/imgPet-FormADM.svg" alt="" />
                                    </div>

                                    <div className="FormPet" >
                                        <div className="NomePet">
                                            <label> Nome: </label>
                                            <input />
                                        </div>

                                        <div className="Especie">
                                            <label> Espécie: </label>
                                            <input />
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
                                        <input />
                                    </div>

                                    <div className="DataSolicitacao">
                                        <label>Status da Solicitação</label>
                                        <input />
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