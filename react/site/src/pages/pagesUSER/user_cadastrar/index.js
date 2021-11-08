import {Container, Conteudo} from './styled'

import Cabecalho from '../../../components/comun/cabecalhoUSU/index'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cookie from 'js-cookie'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Api from '../../../service/api'
const api = new Api()

export default function CadastrarUsu() {

const [nome, setNome] = useState('')
const [sobrenome, setSobrenome] = useState('')
const [email, setEmail] = useState('')
const [senha, setSenha] = useState('')

const nav = useHistory()

    const CadastrarUsuario = async() => {
        
            if(nome === '' || sobrenome === '' || email === '' ||  senha === ''){
                toast.error('Todos os campos devem estar preenchidos!')
                return
            }

            if( !email.includes('@') ){
                toast.error('O email deve ser válido!')
                return
            }

            let numbers = false

            for (let i = 0; i < 10; i++){
                let contem = senha.includes(`${i}`)

                if( contem === true ){

                    let posicao = senha.indexOf(`${i}`) + 1

                    for (let i2 = 0; i2 < 10; i2++){
                        let contem2 = senha.includes(`${i2}`, posicao )

                        if(contem2 === true){
                            numbers = true
                            break
                        }
                    }
                }
            }


            if( senha.length < 6 ){
                toast.error('A senha deve ter mais que seis carecteres')
                return
            }
            if( !numbers ){
                toast.error('a senha deve ser no mínimo 2 números')
                return
            }

        let usu = await api.cadastrarse( {nome, sobrenome, email, senha} )

        if( usu.erro !== undefined ){
            toast.error(usu.erro)
        } else {
            Cookie.set('User', JSON.stringify(usu) )
            nav.push('/home')
        }

    }


    return (

        <Container> 
            <Cabecalho />
            <Conteudo> 
            <ToastContainer />

                <div className="title"> Para conseguir ver mais informações do pet, por favor, cadastre-se no nosso site! </div>

                <div className="Form"> 

                    <div className="cadastrar"> CADASTRE-SE </div>

                    <div className="inputs"> 
                        <div className="inpe"> 
                            <input type="text" placeholder="Nome:" 
                                    value={nome}
                                    onChange={ (e) => setNome(e.target.value) }
                            />
                            <input type="text" placeholder="Sobrenome:" 
                                    value={sobrenome}
                                    onChange={ (e) => setSobrenome(e.target.value) }
                            />
                        </div>

                        <div className="box-input"> 
                            <input type="text" placeholder="Email:"
                                    value={email}
                                    onChange={ (e) => setEmail(e.target.value) }
                            />
                        </div>

                        <div className="box-input"> 
                            <input type="password" placeholder="Senha:" 
                                    value={senha}
                                    onChange={ (e) => setSenha(e.target.value) }
                            />
                        </div>

                    </div>



                    <div className="buton"><button onClick={ () => CadastrarUsuario() } > CADASTRAR</button> </div>

                    <div className="box">
                        <div className="conta"> Já tem uma conta?  </div>
                        <div className="login"> Login </div>
                    </div>

                <div className="cachorro"> <img src="../assets/images/image 1 (2).svg" alt=""/> </div> 

            </div>
        </Conteudo>

    </Container>
);

}