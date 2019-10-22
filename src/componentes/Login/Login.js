import React from 'react'
import '../Login/Login.scss'
import Nav from '../Nav/Nav';
import Input from '../Input/Input';
import Botao from '../Botao/Botao';


const Login = () => {
    return (
        <div className="Login">
            <Nav /> 
            <section>
             <h1>Login</h1>
             <form action="#">
                 <Input label="E-mail:" tipo="email" placeholder="Digite seu email" />
                 <Input label="Senha:" tipo="password" placeholder="Digite sua senha" />
                 <div className="checkbox">
                 <Input tipo="checkbox"/>
                 <Input tipo="checkbox"/>
                 </div>
                 <Botao>Login</Botao>
             </form>
            </section>    
        </div>
    )
}

export default Login;


