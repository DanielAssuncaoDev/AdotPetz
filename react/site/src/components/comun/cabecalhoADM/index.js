import {Container,
            Button
        } from './styled'
        

import Menu from '../Menu/index'


import { useHistory } from 'react-router-dom'

export default function CabecalhoADM(){

const nav = useHistory()

    return(
        <Container>            

            <div className="box-logo">
                <div className="logo">
                    <img onClick={() => nav.push('/admin/home')} 
                           src="/assets/images/logo.svg" alt=""
                    />
                </div>
            </div>

            <div className="box-option">

                <Button onClick={() => nav.push('/admin/home')} >
                    <div className="icon-meuperfil">
                        <img src="/assets/images/account_circle_white_24dp.svg" alt="" />
                    </div>

                    <span className="title-meuperfil">
                        Meu Perfil
                    </span>
                </Button>
                {/* <Menu type="ADM" hidden="700px" /> */}

                <Menu hidden="700px"
                        configMenu={{
                            Topicos:  [
                                {
                                    icon: "/assets/images/account_circle_white_24dp.svg",
                                    NomeTopico: "Minha Conta",
                                    pathname: 'admin/home'
                                }
                            ],
                            SubTopicos: [
                                {
                                    NomeSub: "Pets Cadastrados",
                                    pathname: 'admin/animaiscadastrados' 
                                },
                                {
                                    NomeSub: "Solicitações de Adoção",
                                    pathname: 'admin/solicitacoes' 
                                },
                                {
                                    NomeSub: "Adicionar Pet",
                                    pathname: 'admin/addpet' 
                                }
                            ]
                        }}
                />

            </div>
        </Container>
    );
}