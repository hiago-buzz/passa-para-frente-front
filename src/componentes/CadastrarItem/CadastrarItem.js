import React from 'react'
import { Link } from 'react-router-dom'
import "./CadastrarItem.scss"
import Botao from '../Botao/Botao';

const CadastrarItem = () => {
    return (
        <div className="CadastrarItem">
            <Link to="/"><h5>voltar</h5></Link> 
         <section className="tela">
         <h1>Cadastrar Item</h1>
            <form action="#">
                <input type="text" placeholder="Nome item"/>
                <textarea name="descrição" id="" cols="30" rows="10" placeholder="Descrição do produto"></textarea>
                <Botao>Cadastrar</Botao>
            </form>
         </section>
        </div>
    )
}

export default CadastrarItem;