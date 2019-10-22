import React from 'react'
import './Escola.scss'
import { directive } from '@babel/types';
import Nav from '../Nav/Nav';
import Input from '../Input/Input';
import Botao from '../Botao/Botao';

const Escola = () => {
    const nomeRef = React.useRef("");
    const enderecoRef = React.useRef("");
    const estadoRef = React.useRef("");
    const telefoneRef = React.useRef("");
    const emailRef = React.useRef("");
    const senhaRef = React.useRef("");

    const criarEscolas = (event) => {
        event.preventDefault();

        fetch('http://localhost:8000/api/escolas/', {
            method: 'POST',
            body: JSON.stringify({
                nome: nomeRef.current.value,
                endereco: enderecoRef.current.value,
                estado: estadoRef.current.value,
                telefone: telefoneRef.current.value,
                email: emailRef.current.value,
                senha: senhaRef.current.value,
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(value => {
            return value.json()
        }).then(value => {
            if (value.id) {
                alert("escola cadastrada")
                
            } else {
                alert("houve um erro")
            }

            nomeRef.current.value = "";
            enderecoRef.current.value = "";
            estadoRef.current.value = "";
            telefoneRef.current.value = "";
            emailRef.current.value = "";
            senhaRef.current.value = "";

        })
    }
    return (
        <div className="Escola">
            <Nav />
            <section>
                <h1>Cadastre Sua Escola</h1>
                <form onSubmit={criarEscolas}>

                    <input type="text" ref={nomeRef} placeholder={"digite nome da escola"} />
                    <input type="text" ref={enderecoRef} placeholder={"digite seu endereço"} />
                    <label >Estado:</label>
                    <select ref={estadoRef} name="estado" >
                        <option value="estado">---</option>
                        <option value="SP">São Paulo</option>
                    </select>
                    <input type="text" ref={telefoneRef} placeholder={"digite seu telefone"} />
                    <input type="email" ref={emailRef} placeholder={"digite seu email"} />
                    <input type="password" ref={senhaRef} placeholder={"digite sua senha"} />
                    <Botao>Registrar</Botao>
                    
                </form>
            </section>
        </div>
    )

}


export default Escola;