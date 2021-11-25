import {Container, TabelaUsu} from './styled'
import RegistroNaoEncontrado from '../../../components/comun/RegistroNaoEncontrado/index'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import CabecalhoUSU from '../../../components/comun/cabecalhoUSU';

import Cookie from 'js-cookie';

import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'


import Api from '../../../service/api';
const api = new Api();

export default function TelaUSU(){
 const [animais, setAnimais] = useState([]);

const nav = useHistory()
 
if( Cookie.get('User') === undefined )
       nav.push('/login')   

 async function listar(){
   let id = JSON.parse(Cookie.get('User')).ID_USER;
   let r = await api.listarMinhasAdocoes(id);
   setAnimais(r);
   console.log(r);
 }



 async function remover(id){
  confirmAlert({
    title: 'Cancelar Adoção?',
    message: `Tem certeza que deseja cancela o processo de adoção ${id} ?`,
    buttons: [
        {
            label: 'Sim',
            onClick: async() => {
                let r = await api.removerSoliAdo(id);
                if(r.erro !== undefined)
                  toast.error(` ${r.erro}`);
                else{
                    toast.dark('Adocao cancelada!');
                    listar();
                }  
            }
        },
        {
            label: 'Não',
            onClick: () => toast.dark('Seu processo de adoção, continua em andamento!!')
        }
    ]
});
    
}

 useEffect( () => {
  listar()
 }, [] )

    

const cookieUser = JSON.parse(Cookie.get('User'))

    return(
    <Container>
       <CabecalhoUSU />
       <ToastContainer />
       <div className='conteudo'>
         <div className='esquerda'> 
         <div className='conteudo-esq'>
            {/* <div className='imagemFUN'> <img src='/assets/images/fundotelaUSU.svg' alt='' /> </div> */}
            <div className='conteudoPERFIL'>
              <div className='meuperfil'> Meu Perfil </div>
              <div className='imagemusu'> <img src="/assets/images/image 79.svg" alt="" /> </div>
              <div className='infoUSU'>
                  <div className='NomeUSU'> Bem vindo <label> {`${cookieUser.NM_USER} ${cookieUser.NM_SOBRENOME}`} </label> ! </div>
                  <div className='NomeUSU'> E-mail: <label> {`${cookieUser.DS_EMAIL}`} </label> </div>
                  </div>
              <div className='imagemBA'> 
                <img onClick={ () => {
                          Cookie.remove('User') 
                          nav.push('/')
                        }
                      }
                        src='/assets/images/image 80.svg' alt='' 
                /> 
              </div>     
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
                <div onClick={() => nav.push('/')}  
                      className='voltar'> 
                    Voltar para a página inicial
                </div>
            </div>
          </div>
         </div>


         <div className='direita'>
           <div className='top'>
              <div className="Linha"></div>
              <div className='titulo'> MINHAS ADOÇÕES </div>
            </div>
            <div className='meio-di'> 
            {
              animais.length === 0 
              ? <RegistroNaoEncontrado mensagem={["OPS!! Nenhuma solicitação foi localizada" ]}/>

              : <TabelaUsu>
              
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
                      <tr className="Line" 
                      // onClick={ () => nav.push({
                      //                           pathname: '/pet',
                      //                           state: item.infob_apn_tb_pet
                      //                     }) 
                      //                 } 
                      >
                          <td> <img src={item.infob_apn_tb_pet.IMG_PET1} alt='' style={{width: '90px', height: '70px'}} /> </td> 
                          <td> {item.infob_apn_tb_pet.NM_PET} </td>
                          <td> {item.infob_apn_tb_pet.DS_ESPECIE} </td>
                          <td> {item.infob_apn_tb_pet.DS_SEXO} </td>
                          <td> {item.infob_apn_tb_pet.ID_PET} </td> 
                          <td className='coluna-acao'> <button onClick={() => remover(item.ID_ADOCAO )}> <img src='/assets/images/removerTbUSU.svg' alt='' style={{width: '30px', height: '20px'}} /> Remover</button> </td>
                      </tr>
                  )}
                 </tbody>
             
                </TabelaUsu>
            }
            </div>
         </div>
    </div>
      
    </Container>
    )
}