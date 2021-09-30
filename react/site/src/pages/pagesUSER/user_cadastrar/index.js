import {Container, Conteudo} from './styled'

export default function CadastrarUsu() {

    return (

        <Container> 



    
    <Conteudo> 


    <div className="title"> Para conseguir ver mais informações do pet, por favor, cadastre-se no nosso site! </div>

<div className="cadastrar"> CADASTRE-SE </div>

<div class="inp">
          <div class="nome">
            <input type="text" />
          </div>

          <div class="sobrenome">
            <input type="text" />
          </div>

          <div class="email">
            <input type="Nome" />
          </div>

          <div class="senha">
            <input type="text" />
          </div>
        </div>



<div className="buton"><button> CADASTRAR</button> </div>

<div className="box">
    
<div className="conta"> Já tem uma conta?  </div>
<div className="login"> Login </div>
    
</div>

<div className="divisao">
<div className="line"> <img src="../assets/images/Line 1.svg" alt=""/>  </div>
<div className="ou"> <div> OU </div> </div>
<div className="leni"> <img src="../assets/images/Line 1.svg" alt=""/> </div>
   </div>

   <div className="logue"> Cadastre-se com suas redes sociais </div>

   <div className="logo"> <img src="../assets/images/Frame 129 (1).svg" alt=""/> </div> 

   <div className="cachorro"> <img src="../assets/images/image 1 (2).svg" alt=""/> </div> 
</Conteudo>

    </Container>
);

}