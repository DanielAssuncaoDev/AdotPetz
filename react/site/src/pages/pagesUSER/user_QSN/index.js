import {Container} from './styled'


import CabecalhoADM from '../../../components/comun/cabecalhoADM';
import Roda from '../../../components/comun/rodape'


export default function QuemSomos(){
    return(
        <Container>
          <CabecalhoADM />

          <div className='QuemSomos'>
           <div className='quemsomos'>
               <div className='titulo'> QUEM SOMOS NÓS </div>
               <div className='cont-quem'> Nós da AdotPetz somos uma ONG (Organização Não Governamental), sem fins lucraticos. Fomos constituídos oficialmente em 2019, mas desde de 2015 viemos fazendo trabalhos preventivos que ajudam os animais de ruas sem donos, sem alimentos e sem moradia, com foco em cães e gatos  </div>
                </div>
           <div className='nossamicao'>
               <div className='titulo'>QUAL A NOSSA MISSÃO </div>
               <div className='cont-micao'> Tendo em diante das nossas vistas a dificuldade constante de animais de ruas, temos como missão gerar um impacto maior na sociedade tomando ações preventivas que ajudam os animais que sofrem de abandono e maus tratos nas avenidas/ruas/becos de São Paulo. 
Temos a missão de falar e agir por aqueles que não podem, nossos queridos cães e gatos. Aliás, se podemos fazer algo por eles porque não faríamos não é mesmo? </div>
                </div>
           <div className='valores'>
               <div className='titulo'> QUAIS OS NOSSOS VALORES </div>
               <div className='cont-valo'>Responsabilidade. <br />
                                          Sustentabilidade.<br />
                                          Impacto.<br />
                                          Segurança.<br />
                                          Autenticidade.<br />
                                          Empatia.<br />
                                          Humildade<br />
                                          Confiança </div>
                </div>
          </div>

          <Roda />
        </Container>
    )
}