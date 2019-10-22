import React from 'react';
import Home from './componentes/Home/Home';
import Login from './componentes/Login/Login';
import Escola from './componentes/Cadastro/Escola';
import Doador from './componentes/Cadastro/Doador';
import PerfilEscola from './componentes/PerfilEscola/PerfilEscola';


import {BrowserRouter as Router,Route} from 'react-router-dom';


const App = () => {
  return(
    <div>
      <Router>
       <Route exact path="/" component={Home}/>
       <Route exact path="/login" component={Login}/>
       <Route exact path="/escola" component={Escola}/>
       <Route exact path="/doador" component={Doador}/>
       <Route exact path="/perfilescola" component={PerfilEscola}/>

      </Router>

    </div>
 );
}
export default App;