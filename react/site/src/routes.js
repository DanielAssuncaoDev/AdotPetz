import {Switch, BrowserRouter, Route} from 'react-router-dom'

import HomeUser from './pages/pagesUSER/user_home/index'
import SugestaoAdocao from './pages/pagesUSER/user_sugestoes/index.js'
// import Cadastrarse from './pages/pagesUSER/user_cadastrar'
// import ComoCuidarCat from './pages/pagesUSER/user_comocuidar_cat'
// import ComoCuidarDog from './pages/pagesUSER/user_comocuidar_dog'
import DicasCuidados from './pages/pagesUSER/user_dicascuidados'
// import FaleConosco from './pages/pagesUSER/user_faleconosco'
// import FAQ from './pages/pagesUSER/user_FAQ'
// import FormAdocao from './pages/pagesUSER/user_form_adocao'
import Login from './pages/pagesUSER/user_login'
// import Pet from './pages/pagesUSER/user_pet'
// import QSN from './pages/pagesUSER/user_QSN'
// import MinhaConta from './pages/pagesUSER/user_telausuario'

import SolicitacaoAdocao from './pages/pagesADM/adm_solicitacoes_adocoes/index'
// import AddPet from './pages/pagesADM/adm_adicionar_pet'
// import AnimaisCadastrados from './pages/pagesADM/adm_animais_cadastrados'
import FormAdocaoADM from './pages/pagesADM/adm_form_adocao'
// import HomeADM from './pages/pagesADM/adm_home'
import LoginADM from './pages/pagesADM/adm_login'






export default function Rotas() {

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={HomeUser} />
                <Route path="/sugestoesadocao" exact={true} component={SugestaoAdocao} />
                {/* <Route path="/cadastrarse" exact={true} component={Cadastrarse} /> */}
                {/* <Route path="/comocuidarcat" exact={true} component={ComoCuidarCat} /> */}
                {/* <Route path="/comocuidardog" exact={true} component={ComoCuidarDog} /> */}
                <Route path="/sugestoesadocao" exact={true} component={SugestaoAdocao} />
                <Route path="/dicascuidados" exact={true} component={DicasCuidados} />
                {/* <Route path="/faleconosco" exact={true} component={FaleConosco} /> */}
                {/* <Route path="/faq" exact={true} component={FAQ} /> */}
                {/* <Route path="/formadocao" exact={true} component={FormAdocao} /> */}
                <Route path="/login" exact={true} component={Login} />
                {/* <Route path="/pet" exact={true} component={Pet} /> */}
                {/* <Route path="/quemsomosnos" exact={true} component={QSN} /> */}
                {/* <Route path="/minhaconta" exact={true} component={MinhaConta} /> */}

                <Route path="/admin/solicitacoes" exact={true} component={SolicitacaoAdocao} />
                {/* <Route path="/admin/addpet" exact={true} component={AddPet} /> */}
                {/* <Route path="/admin/animaiscadastrados" exact={true} component={AnimaisCadastrados} /> */}
                <Route path="/admin/formadocao" exact={true} component={FormAdocaoADM} />
                {/* <Route path="/admin/home" exact={true} component={HomeADM} /> */}
                <Route path="/admin/login" exact={true} component={LoginADM} />
            </Switch>
        </BrowserRouter>
    );
}