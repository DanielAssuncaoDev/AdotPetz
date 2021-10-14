import {Container, Conteudo} from './styled'


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

    
   <div className="cachorro"> <img src="../assets/images/image 1 (1).svg" alt=""/> </div> 
</Conteudo>

    </Container>
);

}