import {Switch, BrowserRouter, Route} from 'react-router-dom'

import HomeUser from './pages/pagesUSER/user_home/index'
import SolicitacaoAdocao from './pages/pagesADM/adm_solicitacoes_adocoes/index'

export default function Rotas() {

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={HomeUser} />
                <Route path="/admin/solicitacoes" exact={true} component={SolicitacaoAdocao} />
            </Switch>
        </BrowserRouter>
    );
}