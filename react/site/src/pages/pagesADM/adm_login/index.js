import {Container, Conteudo} from './styled'
import CabecalhoADM from '../../../components/comun/cabecalhoADM/index'

import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useHistory } from 'react-router-dom'
import Cookie from 'js-cookie'

import Api from '../../../service/api';
const api = new Api()


export default function LoginAdm() {
   const [email, setEmail] = useState('')
   const [senha, setSenha] = useState('')

const nav = useHistory()

if(Cookie.get('Adm') !== undefined){
  nav.push('/admin/home')
}

  async function Login(){
    let r = await api.loginAdm( email, senha )
    console.log(r)
    if(email === '' || senha === '')
      return toast.error('Os campos devem ser preenchidos')
      if(r.erro !== undefined){
        toast.error(r.erro)
        return
    } else 
      Cookie.set('Adm', JSON.stringify(r))
      nav.push('/admin/home')
    }
  

    return (

  <Container>
    <ToastContainer/> 
  
  <CabecalhoADM/>
  
    <Conteudo>

        <div className="contbox">

          <div className="titulo">ENTRE COMO ADMINISTRADOR</div>

          <div className="box">
            <div className="login">
              Login
            </div>
            <div className="input">
              <input type="text" placeholder="Email de ADM:" value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
    
            <div className="input">
              <input type="password" placeholder="Senha:" value={senha} onChange={e => setSenha(e.target.value)} />
            </div>
    
            <div className="buton">
              <button onClick={() => Login()}>Entrar</button>
            </div>
        </div>
      </div> 
      </Conteudo>
            </Container>
            );
        }