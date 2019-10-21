import React from 'react'
import './Escola.scss'
import { directive } from '@babel/types';
import Nav from '../Nav/Nav';
import Input from '../Input/Input';
import Botao from '../Botao/Botao';

const Escola = () => {
    return (
        <div className="Escola">
            <Nav />
            <section>
                <h1>Cadastre Sua Escola</h1>
                <form action="#">
                <Input label="Nome:" tipo="text" placeholder="Digite o nome da escola" />
                <Input label="Endereço:" tipo="text" placeholder="Digite seu endereço" />
                <Input label="Telefone:" tipo="email" placeholder="Digite seu telefone" />
                <Input label="E-mail:" tipo="email" placeholder="Digite seu email" />
                 <Input label="Senha:" tipo="password" placeholder="Digite sua senha" />
                 <Botao>Registrar</Botao>
                </form>
            </section>
        </div>
    )
    
}


export default Escola;