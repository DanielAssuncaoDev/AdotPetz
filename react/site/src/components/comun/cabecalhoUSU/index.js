
import {Container} from './styled'
import {Button} from '../cabecalhoADM/styled'
import Menu from '../Menu/index'


import Cookie from 'js-cookie';
import { useHistory } from 'react-router-dom'

export default function CabecalhoUSU(){

    console.log(
        Cookie.get('User') !== undefined
        ?  JSON.parse(Cookie.get('User')) 
        : 'Usuario não logado!'
    )
    const nav = useHistory()


    return(
             <Container>
                <div className="line-left">

                    <div className="box-logo">
                        <img onClick={ () => nav.push('/') }  src="/assets/images/logo.svg" alt="" />
                    </div>

                    <div className="informacoes"> 
                        <span className="Cont-inf" onClick={ () => nav.push('/quemsomosnos') } > Sobre </span>
                        <span className="Cont-inf"  onClick={ () => nav.push('/sugestoesadocao') }> Adotar </span>
                        <span className="Cont-inf"  onClick={ () => nav.push({
                            pathname: '/',
                            state: 'ScrollComponentFazerDoação'
                        
                        }) }> Doar </span>
                        <span className="Cont-inf"  onClick={ () => nav.push('/FAQ') }> FAQ </span>
                    </div>
                </div>

                <div className="line-right">
                    <span className="Box-Buttons">
                        { 
                        
                            Cookie.get('User') === undefined 
                            
                            ?                            
                                <div className="botoes">
                                    <button className="Cad" onClick={ () => nav.push('/cadastrarse') } > Cadastrar-se </button>
                                    <button className="lo"onClick={ () => nav.push('/login') } > Login </button>
                                </div> 
                            
                            : 

                                <Button onClick={ () => nav.push('/minhaconta') }>
                                   
                                    <div className="icon-meuperfil">
                                        <img src="/assets/images/account_circle_white_24dp.svg" alt="" />
                                    </div>

                                    <span className="title-meuperfil">
                                        Meu Perfil
                                    </span>
                                </Button>

                        }
                    </span> 

                    {
                        Cookie.get('User') === undefined 

                        ? 
                            <Menu hidden="1001px"
                                    configMenu={{
                                        Topicos: [
                                            {
                                                icon: "", 
                                                NomeTopico: "Entrar",
                                                pathname: 'login'
                                            },
                                            {
                                                icon: "",
                                                NomeTopico: "Cadastrar-se",
                                                pathname: 'cadastrarse'
                                            }
                                        ],
                                        SubTopicos: [
                                            {
                                                NomeSub: "Sobre",
                                                pathname: 'quemsomosnos' 
                                            },
                                            {
                                                NomeSub: "Adotar",
                                                pathname: 'sugestoesadocao' 
                                            },
                                            {
                                                NomeSub: "Doar",
                                                pathname: '' 
                                            },
                                            {
                                                NomeSub: "FAQ",
                                                pathname: 'faq' 
                                            }
                                        ]
                                    }}
                            />

                        : 
                        <Menu hidden="1001px"
                        configMenu={{
                            Topicos: [
                                {
                                    icon: "/assets/images/account_circle_white_24dp.svg",
                                    NomeTopico: "Minha Conta",
                                    pathname: 'minhaconta'
                                }
                            ],
                            SubTopicos: [
                                {
                                    NomeSub: "Sobre",
                                    pathname: 'quemsomosnos' 
                                },
                                {
                                    NomeSub: "Adotar",
                                    pathname: 'sugestoesadocao' 
                                },
                                {
                                    NomeSub: "Doar",
                                    pathname: '' 
                                },
                                {
                                    NomeSub: "FAQ",
                                    pathname: 'faq' 
                                }
                            ]
                        }}
                />
                    }
                   
                    

                    

                </div>
             </Container>
    )
}