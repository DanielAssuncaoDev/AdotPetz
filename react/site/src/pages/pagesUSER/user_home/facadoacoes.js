import {ContainerFacaDoacoes,
            BoxDoar

    } from './styled' 

// {}

export default function FacaDoacoes(){

    return(
        <ContainerFacaDoacoes>
            <div className="Container-Text">
                <div className="Titulo">
                    FAÇA UMA DOAÇÃO
                </div>
                <div className="Text">
                    Conseguimos fazer muito mais por esses cães e gatos com a sua ajuda! Adotou e quer ajudar de outra maneira também? doe! Não pode adotar no momento mas quer ajudar os animais indefesos? doe também! Tudo fica mais fácil com a sua ajuda.
                </div>
            </div>

            <BoxDoar>
                <div className="TituloBox">
                    Doações via PIX ou transferências
                </div>

                <div className="ListasBox">

                    <div className="ListaPix">
                        <div className="TituloLista">
                            Pix
                        </div>

                        <ul>
                            <li> <span> Chave: </span>  523.698.458-x</li>
                            <li>  <span> Chave secundária: </span> <br /> doaacaodepets@outlook.com </li>
                        </ul>
                    </div>

                    <div className="ListaDeposito">
                        <div className="TituloLista">
                            Depósitos
                        </div>

                        <ul>
                            <li> <span> NuBank </span> </li>
                            <li> <span> Agência: </span> 1111-1 </li>
                            <li> <span> Conta-corrente: </span> 11111-1 </li>
                            <li> <span> CNPJ: </span> 12.345.698/1477-x </li>
                        </ul>
                    </div>
                </div>

                <div className="RodapeBox">
                    <div className="TituloBox">
                        Doações de ração e acessórios
                    </div>

                    <div className="InfoRodape">
                        <span> Caixa postal: </span> 12356-000
                    </div>
                </div>

            </BoxDoar>
        </ContainerFacaDoacoes>
    );
}