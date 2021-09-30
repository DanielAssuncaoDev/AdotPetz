import {Container, Conteudo} from './styled'

import CabecalhoADM from '../../../components/comun/cabecalhoADM/index'

export default function LoginAdm() {


    return (

  <Container> 
  
  <CabecalhoADM/>
  
    <Conteudo>

        <div className="contbox">

          <div className="titulo">ENTRE COMO ADMINISTRADOR</div>

          <div className="box">
            <div className="login">
              Login
            </div>
            <div className="input">
              <input type="text" placeholder="Código de ADM:"/>
            </div>
    
            <div className="input">
              <input type="text" placeholder="Senha:" />
            </div>
    
            <div className="buton">
              <button>Entrar</button>
            </div>
        </div>
      </div> 
      </Conteudo>
            </Container>
            );
        }