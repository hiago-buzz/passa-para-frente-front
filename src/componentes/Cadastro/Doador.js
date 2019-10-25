import React, { useState } from 'react'
import './Doador.scss'
import Nav from '../Nav/Nav';
import Botao from '../Botao/Botao';

const Doador = ({editando}) => {
    
    const id = localStorage.getItem("id");

    React.useEffect(() => {
        if(editando) {
            buscarDoador();
        }
    }, []);

    const nomeRef = React.useRef("");
    const idadeRef = React.useRef("");
    const enderecoRef = React.useRef("");
    const estadoRef = React.useRef("");
    const telefoneRef = React.useRef("");
    const emailRef = React.useRef("");
    const senhaRef = React.useRef("");

    const criarDoador = (event) => {
        event.preventDefault();

        fetch('http://localhost:8000/api/doadores/' + (editando ? id + "/" : ""), {
        method: (editando ? 'PUT' : 'POST'),
            body: JSON.stringify({
                nome: nomeRef.current.value,
                idade: idadeRef.current.value,
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
                alert((editando ? 'Dados alterados' : 'doador cadastrado'))
                localStorage.setItem("id", value.id)
                window.location = "/perfildoador"

            } else {
                alert("houve um erro")
            }

            nomeRef.current.value = "";
            idadeRef.current.value = "";
            enderecoRef.current.value = "";
            estadoRef.current.value = "";
            telefoneRef.current.value = "";
            emailRef.current.value = "";
            senhaRef.current.value = "";

        })
    }

    const buscarDoador = ()=>{
        fetch('http://localhost:8000/api/doadores/' + id + '/')
        .then(result => {
            return result.json()
        }).then(data =>{
            nomeRef.current.value = data.nome;
            idadeRef.current.value = data.idade;
            enderecoRef.current.value = data.endereco;
            estadoRef.current.value = data.estado;
            telefoneRef.current.value = data.telefone;
            emailRef.current.value = data.email;
            senhaRef.current.value = data.senha;
        })
    }
    
    return (
        <div className="Doador">
            <Nav />
            <section>
                {!editando && <h1>Cadastre-se</h1>}
                {editando && <h1>Editar perfil</h1>}

                <form onSubmit={criarDoador}>
                    <input type="text" ref={nomeRef} placeholder={"digite seu nome"} required />
                    <input type="number" min="18" ref={idadeRef} placeholder={"digite sua idade "}required />
                    <input type="text" ref={enderecoRef} placeholder={"digite seu endereço"} required />
                    <select ref={estadoRef}name="estado" >
                        <option value="estado">---</option>
                        <option value="SP">São Paulo</option>
                    </select>
                    <input type="int" ref={telefoneRef} placeholder={"digite seu telefone"} required />
                    <input type="email" ref={emailRef} placeholder={"digite seu email"} required />
                    <input type="password" ref={senhaRef} placeholder={"digite sua senha"} required />
                    <Botao>Registrar</Botao>
                    

                </form>
            </section>
        </div>
    )

}


export default Doador;