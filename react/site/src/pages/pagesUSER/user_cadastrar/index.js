import {Container, Conteudo} from './styled'


export default function CadastrarUsu() {

    return (

        <Container> 



    
    <Conteudo> 


    <div className="title"> Para conseguir ver mais informações do pet, por favor, cadastre-se no nosso site! </div>

<div className="cadastrar"> CADASTRE-SE </div>

<div className="inputs"> 

<div className="inpe"> 
<input type="text" placeholder="Email:" />
<input type="text" placeholder="Email:" />
</div>

<div className="box-input"> 
<input type="text" placeholder="Email:" />
</div>

<div className="box-input"> 
<input type="text" placeholder="Email:" />
</div>

</div>



<div className="buton"><button> CADASTRAR</button> </div>

<div className="box">
    
<div className="conta"> Já tem uma conta?  </div>
<div className="login"> Login </div>
    
</div>



   <div className="cachorro"> <img src="../assets/images/image 1 (2).svg" alt=""/> </div> 
</Conteudo>

    </Container>
);

}