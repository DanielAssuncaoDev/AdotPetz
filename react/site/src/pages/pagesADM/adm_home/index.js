import {Container} from './styled.js'

import CabecalhoADM from '../../../components/comun/cabecalhoADM/index.js'

import { useHistory } from 'react-router-dom'

import Cookie from 'js-cookie';

    export default function HomeADM(){

        const nav = useHistory();

        const CookieAdm = JSON.parse(Cookie.get('Adm'))
        console.log(CookieAdm)

        return(
            <Container>
                <CabecalhoADM/>
                <div className="container">
                    <div className="box1">
                            <div className="imgadm"> <img src='/assets/images/image50.svg' alt=''/> </div>
                        <div className="box1-pt2">
                            <div className="itens"> Nome do ADM: <label> {CookieAdm.NM_ADM} </label> </div>
                            <div className="itens"> E-mail: <label> {CookieAdm.DS_EMAIL} </label></div>
                            {/* <div className="itens"> Telefone (celular): </div> */}
                            <div className="botao"> <button onClick={ () => {
                                Cookie.remove('Adm') 
                                nav.push('/admin/login')
                                }
                            }> 
                                <img src='/assets/images/image51.svg' alt=''/> Sair </button></div>
                        </div>
                    </div>
                    <div className="box2">
                        <div className= "item1-bx2"> <button> <img onClick={ () => nav.push('/admin/addpet') } src='/assets/images/image42.svg' alt=''/> <img className="icon" src='/assets/images/image43.svg' alt=''/> </button> Adicionar pet </div>
                        <div className= "item2-bbx2"> <button> <img onClick={ () => nav.push('/admin/animaiscadastrados') } src='/assets/images/image54.svg' alt=''/></button> Ver pets cadastrados </div>
                        <div className= "item3-bx2"> <button> <img onClick={ () => nav.push('/admin/solicitacoes') } src='/assets/images/image44.svg' alt=''/> </button> Ver solicitações de <p> adoções </p> </div>
                    </div>
                </div>

           </Container> 
        )
    }
