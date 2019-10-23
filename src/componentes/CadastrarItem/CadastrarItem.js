import React from 'react'
import { Link } from 'react-router-dom'
import "./CadastrarItem.scss"
import Botao from '../Botao/Botao';

const CadastrarItem = () => {
    const nomeRef = React.useRef("");
    const descricaoRef = React.useRef("");

    const cadastrar = (event) => {
        event.preventDefault();

        fetch('http://localhost:8000/api/doacoes/', {
            method: 'POST',
            body: JSON.stringify({
                nome: nomeRef.current.value,
                descricao: descricaoRef.current.value,
                doador: localStorage.getItem("id")
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(value => {
            return value.json()
        }).then(value => {
            if (value.id) {
                alert("item cadastrada")
                                
            } else {
                alert("houve um erro")
            }

            nomeRef.current.value = "";
            descricaoRef.current.value = "";

        })
    }
    return (
        <div className="CadastrarItem">
            <Link to="/perfildoador"><h5>voltar</h5></Link> 
         <section className="tela">
         <h1>Cadastrar Item</h1>
            <form onSubmit={cadastrar}>
                <input type="text"ref={nomeRef} placeholder="Nome item"/>
                <textarea name="descrição" id="" cols="30" rows="10" ref={descricaoRef} placeholder="Descrição do produto"></textarea>
                <input type="Submit" value="cadastrar"/>
            </form>
         </section>
        </div>
    )
}

export default CadastrarItem;