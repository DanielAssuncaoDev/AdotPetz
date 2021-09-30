import {Container} from './styled'



export default function cabecalhoUSU(){
    return(
             <Container>
                <div className="line-left">
                    <div className="box-logo">
                        <div className="logo">
                            <img src="/assets/images/logo.svg" alt="" />
                        </div>
                    </div>
                  
                    <div className="informacoes">
                        <span className="Cont-inf"> Sobre </span>
                        <span className="Cont-inf"> Adotar </span>
                        <span className="Cont-inf"> Doar </span>
                        <span className="Cont-inf"> FAQ </span>
                    </div>
                </div>

                <div className="line-right">
                    <div className="botoes">
                        <button className="Cad"> Cadastrar-se </button>
                        <button className="lo"> Login </button>
                    </div> 
                </div>
             </Container>
    )
}