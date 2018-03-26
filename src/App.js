import React, { Component } from 'react';
import { Switch} from 'react-router-dom';

// import './App.css';
import './HTMLgetProgramadora/css/agency.css';

import Home from "./components/pages/Home";
// import Vagas from "./components/vagas_1tela";

// IMPORT PAGES
import Usuaria from './components/pages/usuaria/index';
import Vagas from "./components/vagas";
import Vagas_educacao from "./components/vagas_educacao";
import Cursos from "./components/cursos";

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {

    const logo = require('./HTMLgetProgramadora/img/logos/logo1.png');
    
    return (
      <Switch>
            <Router>
              <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/vagas" component={Vagas}/>
                <Route exact path="/vagas_educacao" component={Vagas_educacao}/>
                <Route exact path="/cursos" component={Cursos}/>
              </div>
            </Router>
            <Route path="/usuaria/index" component={Usuaria}/>
      </Switch>
      
    );
  }
}

export default App;
