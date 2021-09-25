import {Container} from './styled'



export default function rodape(){
    return(
       <Container>
        <div className="conteudo">
            <div className="empresa">
                <div className="EM"> <b> Empresa</b>  </div>
                <div className="info"> Sobre nós </div>
                <div className="info"> FAQ </div>
                <div className="info"> Falar conosco </div>
            </div>

            <div className="comoAJU">
                <div className="EM"> <b> Como Ajudar?</b>  </div>
                <div className="info"> Sobre nós </div>
                <div className="info"> Faça uma doação </div>
            </div>

            <div className="cuideBEM">
                <div className="EM"> <b> Cuide bem do seu amiguinho</b>  </div>
                <div className="info"> Dicas e cuidados </div>
                <div className="info"> como muidar do seu cachorro </div>
                <div className="info"> como muidar do seu gatinho </div>
            </div>
        </div>
        <div className="conteudoB">
             <div className="voltar">
                 <div className="info"> Voltar ao topo </div>
                 <img src="/assets/images/seta.png" alt="" />
                 </div>

            <div className='informações'> 
                <div className="info"> AdotPetz@gmail.com </div>
                <div className="info"> Av.Paulista 1500 - SP - São Paulo</div>
                <div className="info"> (11) 910568886 </div>
            </div>

        </div>
       </Container>
    )
}