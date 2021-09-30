import {Container, Conteudo} from './styled'

export default function LoginUsu() {

return (
    <Container> 
    

<Conteudo>

<div className="title"> Para conseguir ver mais informações do pet, por favor, cadastre-se no nosso site! </div>

<div className="existente"> ENTRAR COM UMA CONTA EXISTENTE </div>

<div className="inputs"> 

<div className="inputa"> 
<input type="text" />
</div>

<div className="inpute"> 
<input type="text" />
</div>

</div>

<div className="buton"><button> ENTRAR </button> </div>

<div className="divisao">
<div className="line"> <img src="../assets/images/Line 1.svg" alt=""/>  </div>
<div className="ou"> <div> OU </div> </div>
<div className="leni"> <img src="../assets/images/Line 1.svg" alt=""/> </div>
   </div>

   <div className="logue"> Logue com suas redes sociais </div>

   <div className="logo"> <img src="../assets/images/Frame 129 (1).svg" alt=""/> </div> 

   <div className="cachorro"> <img src="../assets/images/image 1 (1).svg" alt=""/> </div> 
</Conteudo>

    </Container>
);

}