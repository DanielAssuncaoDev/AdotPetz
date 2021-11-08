import {Container} from './styled'

import { useHistory } from 'react-router-dom'

export default function Rodape(){
const nav = useHistory()
    
    return(
       <Container>
        <div className="conteudo">
            <div className="empresa">
                <div className="EM"> <b> Empresa</b>  </div>
               
                <div onClick={() => nav.push('/quemsomosnos')} 
                        className="info"> 
                    Sobre nós
                </div>
                
                <div onClick={() => nav.push('/faq')} 
                        className="info"> 
                    FAQ 
                </div>
                <div onClick={() => nav.push('/faleconosco')} 
                        className="info">
                    Falar conosco 
                </div>
            </div>

            <div className="comoAJU">
                <div className="EM"> <b> Como Ajudar?</b>  </div>
                <div onClick={() => nav.push('/sugestoesadocao')}  
                        className="info">
                    Adotar um Pet
                </div>
                <div onClick={() => nav.push('/home')} 
                        className="info">
                    Faça uma doação 
                </div>
            </div>

            <div className="cuideBEM">
                <div className="EM"> <b> Cuide bem do seu amiguinho</b>  </div>
            
                <div onClick={() => nav.push('/dicascuidados')} 
                        className="info">
                    Dicas e cuidados
                </div>

                <div onClick={() => nav.push('/comocuidardog')} 
                        className="info"> 
                    como cuidar do seu cachorro
                </div>

                <div onClick={() => nav.push('/comocuidarcat')} 
                        className="info"> 
                    como cuidar do seu gatinho 
                </div>

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