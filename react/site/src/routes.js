import {Switch, BrowserRouter, Route} from 'react-router-dom'

import HomeUser from './pages/pagesUSER/user_home/index'

export default function Rotas() {

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={HomeUser} />
            </Switch>
        </BrowserRouter>
    );
}