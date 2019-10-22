import React from 'react';
import './Botao.scss'

const Botao= ({onclick, children}) => {

    return(
        
        <button onClick={onclick}>{children}</button>
    );
}

export default Botao;
