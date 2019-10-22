import React from 'react';
import Home from './componentes/Home/Home';
import Login from './componentes/Login/Login';
import Escola from './componentes/Cadastro/Escola';
import Doador from './componentes/Cadastro/Doador';

import {BrowserRouter as Router,Route} from 'react-router-dom';


const App = () => {
  return(
    <div>
      <Router>
       <Route exact path="/" component={Home}/>
       <Route path="/login" component={Login}/>
       <Route path="/escola" component={Escola}/>
       <Route path="/doador" component={Doador}/>
      </Router>

    </div>
 );
}
export default App;