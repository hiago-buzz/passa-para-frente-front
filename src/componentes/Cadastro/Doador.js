import React from 'react'
import './Doador.scss'
import { directive } from '@babel/types';
import Nav from '../Nav/Nav';
import Input from '../Input/Input';
import Botao from '../Botao/Botao';

const Doador = () => {
    return (
        <div className="Doador">
            <Nav />
            <section>
                <h1>Cadastre-se</h1>
                <form action="#">
                <Input label="Nome:" tipo="text" placeholder="Digite o nome da Doador" />
                <Input label="Idade:" tipo="Integer" placeholder="Digite o nome da Doador" />
                <Input label="Endereço:" tipo="text" placeholder="Digite seu endereço" />
                <label>Estado:</label>
                <select name="estado" >
                    <option value="estado">---</option>
                    <option value="SP">São Paulo</option>
                </select>
                <Input label="Telefone:" tipo="email" placeholder="Digite seu telefone" />
                <Input label="E-mail:" tipo="email" placeholder="Digite seu email" />
                 <Input label="Senha:" tipo="password" placeholder="Digite sua senha" />
                 <Botao>Registrar</Botao>
                </form>
            </section>
        </div>
    )
    
}


export default Doador;