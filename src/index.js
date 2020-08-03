import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import CadastraVideo from './components/Pages/cadastro/Video';
import CadastraCategoria from './components/Pages/cadastro/Categoria';
import Help from './components/Pages/Help'
import Pagina404 from './components/Pages/404-error';

ReactDOM.render(
  <BrowserRouter>
    <Switch>

      <Route path="/cadastro/video" component={CadastraVideo} />
      <Route path="/cadastro/categoria" component={CadastraCategoria} />
      <Route path="/help" component={Help} exact />
      <Route path="/" component={Home} exact />
      

      <Route component={Pagina404} />

    </Switch>

  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
