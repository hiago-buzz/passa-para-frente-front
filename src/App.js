import React from 'react';
import Home from './componentes/Home/Home';
import {BrowserRouter as Router,Route} from 'react-router-dom';


const App = () => {
  return(
    <div>
      {/* <Home /> */}
      <Router>
       <Home />
       <Route exact path="/" component={Home}/>
      </Router>

    </div>
 );
}
export default App;