import {ContainerPopUpMenu} from './styled'
import BoxMenu from './BoxMenu';

import Cookie from 'js-cookie'

export default function PopUpMenu(props){


        return(
            <ContainerPopUpMenu>
                <BoxMenu Topicos={props.configPopUp.Topicos}
                                    SubTopicos={props.configPopUp.SubTopicos}
                        />
                {/* {
                    props.type === "ADM"

                    ?
                        <BoxMenu Topicos={[{icon: "/assets/images/account_circle_white_24dp.svg", NomeTopico: "Minha Conta" }]}
                                    SubTopicos={["Pets Cadastrados", "Solicitações de Adoção", "Adicionar Pet"]}
                        />
                     

                }
                 */}
            </ContainerPopUpMenu>
        )
}



