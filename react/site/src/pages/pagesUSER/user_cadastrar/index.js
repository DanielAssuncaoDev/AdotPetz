import {Container, Conteudo} from './styled'

import {Line} from '../../../components/styled/line'

export default function CadastrarUsu() {

    return (

        <Container> 



    
    <Conteudo> 


    <div className="title"> Para conseguir ver mais informações do pet, por favor, cadastre-se no nosso site! </div>

<div className="cadastrar"> CADASTRE-SE </div>

<div className="inputs"> 

<div className="inpe"> 
<input type="text" />
<input type="text" />
</div>

<div className="box-input"> 
<input type="text" />
</div>

<div className="box-input"> 
<input type="text" />
</div>

</div>



<div className="buton"><button> CADASTRAR</button> </div>

<div className="box">
    
<div className="conta"> Já tem uma conta?  </div>
<div className="login"> Login </div>
    
</div>

<div className="divisao">
        <Line>  </Line>
        <div className="ou"> <div> OU </div> </div>
        <Line> </Line>
    </div>

   <div className="logue"> Cadastre-se com suas redes sociais </div>

   <div className="logo"> <img src="../assets/images/Frame 129 (1).svg" alt=""/> </div> 

   <div className="cachorro"> <img src="../assets/images/image 1 (2).svg" alt=""/> </div> 
</Conteudo>

    </Container>
);

}