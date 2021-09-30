import {Container, Conteudo} from './styled'

import {Line} from '../../../components/styled/line'

export default function LoginUsu() {

return (
    <Container> 
    

<Conteudo>

<div className="title"> Para conseguir ver mais informações do pet, por favor, logue no nosso site! </div>

<div className="existente"> ENTRAR COM UMA CONTA EXISTENTE </div>

<div className="inputs"> 

<div className="box-input"> 
<input type="text" />
</div>

<div className="box-input"> 
<input type="text" />
</div>

</div>

<div className="buton"><button> ENTRAR </button> </div>

    <div className="divisao">
        <Line>  </Line>
        <div className="ou"> <div> OU </div> </div>
        <Line> </Line>
    </div>

   <div className="logue"> Logue com suas redes sociais </div>

   <div className="logo"> <img src="../assets/images/Frame 129 (1).svg" alt=""/> </div> 

   <div className="cachorro"> <img src="../assets/images/image 1 (1).svg" alt=""/> </div> 
</Conteudo>

    </Container>
);

}