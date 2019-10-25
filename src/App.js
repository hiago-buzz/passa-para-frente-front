import React from 'react';
import Home from './componentes/Home/Home';
import Login from './componentes/Login/Login';
import Escola from './componentes/Cadastro/Escola';
import Doador from './componentes/Cadastro/Doador';
import PerfilEscola from './componentes/PerfilEscola/PerfilEscola';
import PerfilDoador from './componentes/PerfilDoador/PerfilDoador';
import CadastrarItem from './componentes/CadastrarItem/CadastrarItem';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import ListaItens from './componentes/ListaItens/ListaItens';
import Arecados from './componentes/PerfilEscola/ItensArecadados';
import RelatorioFinal from './RelatorioFinal/RelatorioFinal';


const App = () => {
  return(
    <div>
      <Router>
       <Route exact path="/" component={Home}/>
       <Route  path="/escola" component={Escola}/>
       <Route  path="/doador" component={Doador}/>
       <Route  path="/perfilescola" component={PerfilEscola}/>
       <Route  path="/editarescola" component={() => <Escola editando="true"/>}/>      
       <Route  path="/perfildoador" component={PerfilDoador}/>
       <Route  path="/editardoador" component={() => <Doador editando="true"/>}/>
       <Route  path="/cadastraritem" component={CadastrarItem}/>
       <Route  path="/itens" component={ListaItens}/>
       <Route  path="/itensarecadados" component={Arecados}/>
       <Route path="/relatoriofinal" component={RelatorioFinal} />

      </Router> 

    </div>
 );
}
export default App;