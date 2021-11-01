import {Container, TabelaUsu} from './styled'

import CabecalhoUSU from '../../../components/comun/cabecalhoUSU';

import Api from '../../../service/api';
import { useState } from 'react';
const api = new Api();

export default function TelaUSU(){
 const [animais, setAnimais] = useState([]);




    return(
    <Container>
       <CabecalhoUSU />
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
           <div className='top'>
              <div className="Linha"></div>
              <div className='titulo'> MINHAS ADOÇÕES </div>
            </div>
           <TabelaUsu>
              <div className='meio-di'> 
                  <thead>
                    <tr>
                      <th className='img'> </th>
                      <th className='nome-tb'> Nome</th>
                      <th className='espe-tb'> Espécie </th>
                      <th className='sexo-tb'> Sexo </th>
                      <th className='ra-tb'> RA </th>
                      <th className='coluna-acao'> </th>
                    </tr>
                  </thead>
                 
                 <tbody>

                  {animais.map ((item) =>
                        <tr>
                          <td> <img src='/assets/images/pet1.svg' alt='' style={{width: '90px', height: '70px'}} /> </td>
                          <td> {item.NM_PET} </td>
                          <td> {item.DS_ESPECIE} </td>
                          <td> {item.DS_SEXO} </td>
                          <td> {item.ID_ADOCAO} </td>
                          <td className='coluna-acao'> <button> <img src='/assets/images/removerTbUSU.svg' alt='' style={{width: '30px', height: '20px'}} /> Remover</button> </td>
                        </tr>
                  )}
                 </tbody>
              </div>
           </TabelaUsu>
         </div>
    </div>
      
    </Container>
    )
}