import {Container } from './styled'

import CabecalhoADM from '../../../components/cabecalhoADM';


export default function telaUSU(){
    return(
    <Container>
       <CabecalhoADM />
       <div className='conteudo'>
         <div className='esquerda'> 
         <div className='conteudo-esq'>
            {/* <div className='imagemFUN'> <img src='/assets/images/fundotelaUSU.svg' alt='' /> </div> */}
            <div className='conteudoPERFIL'>
              <div className='meuperfil'> Meu Perfil </div>
              <div className='imagemusu'> <img src="/assets/images/image 79.svg" alt="" /> </div>
              <div className='infoUSU'>
                  <div className='NomeUSU'> Nome Usuario: </div>
                  <div className='NomeUSU'> E-mail: </div>
                  <div className='NomeUSU'> Telefone: </div>
                  </div>
              <div className='imagemBA'> <img src='/assets/images/image 80.svg' alt='' /> </div>     
            </div>
          </div>
          <div className='rodape'> 
            <div className='inforodaa'> Fale conosco </div>
            <div className='inforoda'> FAQ </div>
            <div className='inforoda'> Como cuidar do meu cachorrinho </div>
            <div className='inforoda'> Como cuidar do meu gatinho</div>
            <div className='inforoda'> Quero fazer uma adoção </div>
            <div className='voltaroda'>
                <img src='/assets/images/image 83.svg' alt='' />
                <div className='voltar'> Voltar para a página inicial </div>
                 </div>
          </div>
         </div>


         <div className='direita'>
           <div className='titulo'> MINHAS ADOÇÕES </div>
           <div className='meio-di'> 
            <img src='/assets/images/image 82.svg' alt='' />
            <div className='obs'>OPS! Não tenho nenhuma adoção ainda </div>
           </div>
         </div>
    </div>
      
    </Container>
    )
}