import {Container, Conteudo} from './styled'

import Cabecalho from '../../../components/comun/cabecalhoUSU'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Cookie from 'js-cookie'

import {Link} from 'react-router-dom' 

import Api from '../../../service/api'
const api = new Api()

export default function LoginUsu() {

const [ email, setEmail ] = useState('')
const [ senha, setSenha ] = useState('')

const nav = useHistory()

    const FazerLogin = async() => {
        let user = await api.login( {email, senha} )

        if( email === '' || senha === '' )
            return toast.error('Nenhum campo pode estar vazio')

            if( user.erro !== undefined ) {
                toast.error(user.erro)
            } else {
                Cookie.set('User', JSON.stringify(user))
                nav.push('/home')
            }
    }


return (
    <Container> 
        <Cabecalho />
        <Conteudo>
        <ToastContainer />     
            <div className="title"> Para conseguir ver mais informações do pet, por favor, logue no nosso site! </div>

            <div className="Form">
                <div className="existente"> ENTRAR COM UMA CONTA EXISTENTE </div>

                <div className="inputs"> 

                <div className="box-input"> 
                    <input type="text" placeholder="Email:" 
                            value={ email }
                            onChange={ (e) => setEmail(e.target.value)  }
                    />
                </div>

                <div className="box-input"> 
                    <input type="password" placeholder="Senha:" 
                            value={ senha }
                            onChange={ (e) => setSenha(e.target.value) }
                    />
                </div>

                </div>

                <div className="buton"><button onClick={ () => FazerLogin() } > ENTRAR </button> </div>

                {/* <div className="label">   Entrar como administrador  </div> */}

                <Link to="/admin/login"> Entrar como administrador  </Link>
                

                <div className="cachorro"> <img src="/assets/images/image 1 (1).svg" alt=""/> </div> 
            </div>
        </Conteudo>

    </Container>
);

}