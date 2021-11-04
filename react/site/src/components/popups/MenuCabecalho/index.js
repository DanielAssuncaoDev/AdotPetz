import {ContainerPopUpMenu} from './styled'
import BoxMenu from './BoxMenu';

import Cookie from 'js-cookie'

export default function PopUpMenu(props){

        return(
            <ContainerPopUpMenu>
                {
                    props.type === "ADM"

                    ?
                        <BoxMenu Topicos={[{icon: "/assets/images/account_circle_white_24dp.svg", NomeTopico: "Minha Conta" }]}
                                    SubTopicos={["Pets Cadastrados", "Solicitações de Adoção", "Adicionar Pet"]}
                        />
                                            

                    :
                        Cookie.get('User') !== undefined

                        ?        
                            <BoxMenu Topicos={[{icon: "/assets/images/account_circle_white_24dp.svg", NomeTopico: "Minha Conta" }]}
                                        SubTopicos={["Sobre", "Adotar", "Doar", "FAQ"]}
                            />

                                // <div className="BoxMenu">
                                //     <div className="UserOrLog">
                                //         <div className="Logar">
                                //             <span> Fazer Login </span>
                                //         </div>

                                //         <div className="Cadastrarse">
                                //             <span> Cadastrar-se </span>
                                //         </div>
                                //     </div>

                                //     <div className="space">

                                //     </div>

                                //     <div className="Options">
                                //         <span className="Cont-inf"> Sobre </span>
                                //         <span className="Cont-inf"> Adotar </span>
                                //         <span className="Cont-inf"> Doar </span>
                                //         <span className="Cont-inf"> FAQ </span>
                                //     </div>
                                    
                                // </div>

                        :
                            <BoxMenu Topicos={[{icon: "", NomeTopico: "Entrar" }, {icon: "", NomeTopico: "Cadastrar-se" }]}
                                        SubTopicos={["Sobre", "Adotar", "Doar", "FAQ"]}
                            />
                    


                }
                
            </ContainerPopUpMenu>
        )
}



