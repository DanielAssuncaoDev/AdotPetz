import {ContainerFacaDoacoes,
            BoxDoar

    } from './styled' 

// {}

export default function FacaDoacoes(){

    return(
        <ContainerFacaDoacoes>
            <div className="Container-Text">
                <div className="Titulo">

                </div>
                <div className="Text">

                </div>
            </div>

            <BoxDoar>
                <div className="TituloBox">

                </div>

                <div className="ListasBox">
                    <div className="ListaPix">
                        <ul>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <div className="ListaDeposito">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>

                <div className="RodapeBox">
                    <div className="TituloRodape">

                    </div>

                    <div className="InfoRodape">

                    </div>
                </div>

            </BoxDoar>
        </ContainerFacaDoacoes>
    );
}