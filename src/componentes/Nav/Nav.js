import React from 'react';
import {Link} from 'react-router-dom';
import "./Nav.scss"


const Nav = () => {
    return (
        <div className="Nav">
            <nav>
                <h2>Passa Para Frente</h2>
                <a href="/">Home</a>
                <a href="/login">Login</a>
                <a href="/escola">Cadastro Escola</a>
                <a href="/doador">Cadastro Doador</a>
            </nav>
        </div>
    )
}

export default Nav;