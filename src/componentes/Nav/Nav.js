import React from 'react';
import "./Nav.scss"


const Nav = () => {
    return (
        <div className="Nav">
            <nav>
                <h2>Passa Para Frente</h2>
                <a href="#">Home</a>
                <a href="#">Login</a>
                <a href="#">Cadastro Escola</a>
                <a href="#">Cadastro Doador</a>
            </nav>
        </div>
    )
}

export default Nav;