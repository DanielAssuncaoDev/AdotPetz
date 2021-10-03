import {ContainerPopUpMenu} from './styled'


export default function PopUpMenu(props){

        return(
            <ContainerPopUpMenu>
                {
                    props.login === true

                    ?                                            
                        <div className="BoxMenu">
                            <div className="UserOrLog">
                                <div className="MinhaConta">
                                    <img src="/assets/images/account_circle_white_24dp.svg" alt="" />
                                    <span>Minha Conta</span>
                                </div>
                            </div>

                            <div className="space">

                            </div>

                            <div className="Options">
                                <span className="Cont-inf"> Sobre </span>
                                <span className="Cont-inf"> Adotar </span>
                                <span className="Cont-inf"> Doar </span>
                                <span className="Cont-inf"> FAQ </span>
                            </div>
                            
                        </div>

                    : 

                        <div className="BoxMenu">
                            <div className="UserOrLog">
                                <div className="Logar">
                                    <span> Fazer Login </span>
                                </div>

                                <div className="Cadastrarse">
                                    <span> Cadastrar-se </span>
                                </div>
                            </div>

                            <div className="space">

                            </div>

                            <div className="Options">
                                <span className="Cont-inf"> Sobre </span>
                                <span className="Cont-inf"> Adotar </span>
                                <span className="Cont-inf"> Doar </span>
                                <span className="Cont-inf"> FAQ </span>
                            </div>
                            
                        </div>


                }
                
            </ContainerPopUpMenu>
        )
}



