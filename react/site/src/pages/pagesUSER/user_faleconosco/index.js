import {Container} from './styled'

import CabecalhoUSU from '../../../components/comun/cabecalhoUSU';
import Roda from '../../../components/comun/rodape'

export default function FaleConosco(){
    return(
      <Container>
          <CabecalhoUSU />
          <div className='conteudofale'>
                <div className='titulofale'>Fale conosco</div>
                <div className="salvacao">
                    <div class="box">
                        <h1><div className="contat">Contato</div></h1>
                        <div className="texto1">Caso queira tirar alguma dúvida conosco. Primeiramente, certifique se ela já foi respondida no FAQ (Perguntas frequentes).</div>
                        <div className="texto2">Se ainda sim estiver com dúvidas, ou se precisar falar algo, de sugestões ou críticas. Mande um e-mail para:</div>
                        <div  className="e-mail">faleconosco@gmail.com</div>                     
                    </div>
                    <div class="b">
                        <button>QUERO ADOTAR</button>
                    </div>
                </div>  
              </div>
            <Roda/>
        </ Container>
        
      
    )
}