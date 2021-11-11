import {Container, Conteudo} from './styled'

import CabecalhoADM from '../../../components/comun/cabecalhoADM/index'
import { useState } from 'react';
import Api from '../../../service/api';
import { toast, ToastContainer } from 'react-toastify';
const api = new Api()


export default function LoginAdm() {
   const [codigo, setCodigo] = useState('')
   const [senha, setSenha] = useState('')

  async function Login(){
    let r = await api.loginAdm( codigo, senha )
    console.log(r)
    if(codigo === '' || senha === '')
      return toast.error('Os campos devem ser preenchidos')
      if(r.erro !== undefined){
        toast.error(r.erro)
        return
    } else {
      toast('Login feito com sucesso')
    }
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
              <input type="text" placeholder="Código de ADM:" value={codigo} onChange={e => setCodigo(e.target.value)}/>
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