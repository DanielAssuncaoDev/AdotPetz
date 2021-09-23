import {Container} from './styled'



export default function cabecalhoUSU(){
    return(
             <Container>
                <div className="box-logo">
                    <div className="logo">
                        <img src="/assets/images/logo.svg" alt="" />
                    </div>
                </div>
                  
                  <div className="informacoes">
                      <div className="Cont-inf"> Sobre </div>
                      <div className="Cont-inf"> Adotar </div>
                      <div className="Cont-inf"> Doar </div>
                      <div className="Cont-inf"> FAQ </div>
                  </div>


                <div className="botoes">
                    <button className="Cad"> Cadastrar-se </button>
                    <button className="lo"> Login </button>
                    </div> 



             </Container>
    )
}