import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//Importação das paginas
import Header from './Componentes/Header';
import Lista from './Componentes/Pages/Tabela';
import Menu from './Componentes/Pages/Menu';
import Upload from './Componentes/Pages/Upload';
import Erro from './Componentes/Pages/Erro';

const Routes = () => {
    return(
        <BrowserRouter>
        <Header />
            <Switch>
                <Route exact path="/" component={Lista}/>
                <Route exact path="/Menu" component={Menu} />
                <Route exact path="/Menu/Upload" component={Upload} />
                <Route path="*" component={Erro} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;