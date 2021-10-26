
import {useState} from 'react';


import {Container} from './styled'
import {Button} from '../cabecalhoADM/styled'
import {Link} from 'react-router-dom' 
import Menu from '../Menu/index'

// {}

export default function CabecalhoUSU(){

    const [login] = useState(true);

    return(
             <Container>
                <div className="line-left">

                    <div className="box-logo">
                        <img src="/assets/images/logo.svg" alt="" />
                    </div>

                    <div className="informacoes"> 
                        <span className="Cont-inf"> Sobre  </span>
                        <span className="Cont-inf"> Adotar </span>
                        <span className="Cont-inf"> Doar </span>
                        <span className="Cont-inf"> FAQ </span>
                    </div>
                </div>

                <div className="line-right">
                    <span className="Box-Buttons">
                        { 
                        
                            login === false 
                            
                            ?                            
                                <div className="botoes">
                                    <button className="Cad"> Cadastrar-se </button>
                                    <button className="lo"> Login </button>
                                </div> 
                            
                            : 

                                <Button>
                                   
                                    <div className="icon-meuperfil">
                                        <img src="/assets/images/account_circle_white_24dp.svg" alt="" />
                                    </div>

                                    <span className="title-meuperfil">
                                        Meu Perfil
                                    </span>
                                </Button>

                        }
                    </span> 

                    
                    <Menu type="User" hidden="1001px" login={login} />
                    

                    

                </div>
             </Container>
    )
}