import {Container, Conteudo} from './styled'

import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Cookie from 'js-cookie'

import Api from '../../../service/api'
const api = new Api()

export default function LoginUsu() {

const [ email, setEmail ] = useState('')
const [ senha, setSenha ] = useState('')

const nav = useHistory()

    const FazerLogin = async() => {
        let user = await api.login( {email, senha} )

            if( user.erro !== undefined ) {
                alert(user.erro)
            } else {
                // alert('Usuario Logado')
                Cookie.set('User', JSON.stringify(user))
                nav.push('/home')
            }
    }


return (
    <Container> 
    
        <Conteudo>

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
                    <input type="text" placeholder="Senha:" 
                            value={ senha }
                            onChange={ (e) => setSenha(e.target.value) }
                    />
                </div>

                </div>

                <div className="buton"><button onClick={ () => FazerLogin() } > ENTRAR </button> </div>

                <div className="cachorro"> <img src="/assets/images/image 1 (1).svg" alt=""/> </div> 
            </div>
        </Conteudo>

    </Container>
);

}