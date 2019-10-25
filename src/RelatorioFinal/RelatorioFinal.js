import React from 'react';
import './RelatorioFinal.scss';
import {Link} from 'react-router-dom';
const RelatorioFinal= () =>{
    
    return(
        <div className="relatorio">
            <Link to="/perfilescola"><h4>voltar</h4></Link>
            <h1> PARABÉNS </h1>
            <p> Você escola tal acaba de receber uma doaçao de um doador </p>


        </div>
    )
}

export default RelatorioFinal;