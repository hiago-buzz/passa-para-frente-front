import React from 'react';
import Home from './componentes/Home/Home';
import Login from './componentes/Login/Login';
import {BrowserRouter as Router,Route} from 'react-router-dom';


const App = () => {
  return(
    <div>
      <Router>
       <Route exact path="/" component={Home}/>
       <Route path="/login" component={Login}/>
      </Router>

    </div>
 );
}
export default App;