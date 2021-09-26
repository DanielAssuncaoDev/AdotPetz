import {Container,
            FaixaForm

} from './styled'

import CabecalhoADM from '../../../components/cabecalhoADM/index'

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
           
                <div  className="TituloForm">
                    Formulário de Solicitação
                </div>

                <div className="Conteudo">
                    <div className="TituloConteudo"> 

                    </div>

                    <div className="Form">

                        <div className="InfoRow1">
                            <div className="InfoUser">
                                <div className="Row1">
                                    <div className="">
                                        <label>Nome Solicitante:</label>
                                        <input />
                                    </div>

                                    <div className="">
                                        <label>Nascimento:</label>
                                        <input />
                                    </div>

                                    <div className="">
                                        <label> RG: </label>
                                        <input />
                                    </div>
                                </div>

                                <div className="Row2">
                                    <div className="">
                                        <label> Telefone: </label>
                                        <input />
                                    </div>

                                    <div className="">
                                        <label>CEP:</label>
                                        <input />
                                    </div>

                                    <div className="">
                                        <label> Endereço: </label>
                                        <input />
                                    </div>

                                    <div className="">
                                        <label> Número: </label>
                                        <input />
                                    </div>
                                </div>

                                <div className="Row3">
                                    <div className="">
                                        <label> Complemento: </label>
                                        <input />
                                    </div>

                                    <div className="">
                                        <label> Cidade: </label>
                                        <input />
                                    </div>

                                    <div className="">
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
                                        <img src="" alt="" />
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


                            </div>

                        </div>

                    </div>


                </div>
            </FaixaForm>
        </Container>
    );   
}