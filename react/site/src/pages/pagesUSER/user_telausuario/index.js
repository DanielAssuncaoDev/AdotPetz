import {Container, TabelaUsu} from './styled'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import CabecalhoUSU from '../../../components/comun/cabecalhoUSU';

import Cookie from 'js-cookie';

import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

import Api from '../../../service/api';
import { useState, useEffect } from 'react';
const api = new Api();

export default function TelaUSU(){
 const [animais, setAnimais] = useState([]);

 
 async function listar(){
   let id = JSON.parse(Cookie.get('User')).ID_USER;
   let r = await api.listarMinhasAdocoes(id);
   setAnimais(r);
   console.log(r);
 }

 async function remover(id){
  confirmAlert({
    title: 'Cancela Adoção',
    message: `Tem certeza que deseja cancela o processo de adoção ${id} ?`,
    buttons: [
        {
            label: 'Sim',
            onClick: async() => {
                let r = await api.removerSoliAdo(id);
                if(r.erro !== undefined)
                  tooast.error(` ${r.erro}`);
                else{
                    toast.dark('Adocao cancelada!');
                    listar();
                }  
            }
        },
        {
            label: 'Não',
            onClick: () => toast.dark('Caonfgod')
        }
    ]
});
    
}

 useEffect( () => {
  listar()
 }, [] )


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
                          <td> <img src={item.infob_apn_tb_pet.IMG_PET1} alt='' style={{width: '90px', height: '70px'}} /> </td>
                          <td> {item.infob_apn_tb_pet.NM_PET} </td>
                          <td> {item.infob_apn_tb_pet.DS_ESPECIE} </td>
                          <td> {item.infob_apn_tb_pet.DS_SEXO} </td>
                          <td> {item.infob_apn_tb_pet.ID_PET} </td>
                          <td className='coluna-acao'> <button onClick={() => remover(item.ID_ADOCAO )}> <img src='/assets/images/removerTbUSU.svg' alt='' style={{width: '30px', height: '20px'}} /> Remover</button> </td>
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