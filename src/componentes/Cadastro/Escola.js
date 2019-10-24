import React from 'react'
import './Escola.scss'
import Nav from '../Nav/Nav';
import Botao from '../Botao/Botao';

const Escola = ({editando}) => {

    const id = localStorage.getItem("id");

    React.useEffect(() => {
        if(editando) {
            buscarEscola();
        }
    }, []);

    const nomeRef = React.useRef("");
    const enderecoRef = React.useRef("");
    const estadoRef = React.useRef("");
    const telefoneRef = React.useRef("");
    const emailRef = React.useRef("");
    const senhaRef = React.useRef("");

    const criarEscolas = (event) => {
        event.preventDefault();

        fetch('http://localhost:8000/api/escolas/' + (editando ? id + "/" : ""), {
            method: (editando ? 'PUT' : 'POST'),
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
                alert((editando ? 'Dados alterados': 'escola cadastrada'))
                localStorage.setItem("id", value.id)
                window.location = "/perfilescola"
                
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
    const buscarEscola = ()=>{
        fetch('http://localhost:8000/api/escolas/' + id + '/')
        .then(result => {
            return result.json()
        }).then(data =>{
            nomeRef.current.value = data.nome;
            enderecoRef.current.value = data.endereco;
            estadoRef.current.value = data.estado;
            telefoneRef.current.value = data.telefone;
            emailRef.current.value = data.email;
            senhaRef.current.value = data.senha;
        })
    }
    return (
        <div className="Escola">
            <Nav />
            <section>
                
                {!editando && <h1>Cadastre sua escola</h1>}
                {editando && <h1>Editar perfil Escola</h1>}

                <form onSubmit={criarEscolas}>

                    <input type="text" ref={nomeRef} placeholder={"digite nome da escola"} required />
                    <input type="text" ref={enderecoRef} placeholder={"digite seu endereço"} required/>
                    <label >Estado:</label>
                    <select ref={estadoRef} name="estado" >
                        <option value="estado">---</option>
                        <option value="SP">São Paulo</option>
                    </select>
                    <input type="text" ref={telefoneRef} placeholder={"digite seu telefone"} required/>
                    <input type="email" ref={emailRef} placeholder={"digite seu email"} required/>
                    <input type="password" ref={senhaRef} placeholder={"digite sua senha"} required/>
                    <Botao>Registrar</Botao>
                    
                </form>
            </section>
        </div>
    )

}


export default Escola;