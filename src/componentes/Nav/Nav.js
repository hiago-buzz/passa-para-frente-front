import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.scss"


const Nav = () => {
    return (
        <div className="Nav">
            <nav>
                <h2>Passa Para Frente</h2>
                <Link to="/">Home</Link>
                {/* <Link to="/login">Login</Link> */}
                <Link to="/escola">Cadastro Escola</Link>
                <Link to="/doador">Cadastro Doador</Link>
            </nav>
        </div>
    )
}

export default Nav;