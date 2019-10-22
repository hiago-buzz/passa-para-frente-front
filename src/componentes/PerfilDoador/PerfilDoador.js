import React from 'react'
import './PerfilDoador.scss'
import Botao from '../Botao/Botao';

const PerfilDoador = () => {
    return (
        <div className="PerfilDoador">
            <div className="perfil">
                <h5>perfil</h5>
            </div>
            <section className="infos">
                <div>

                <h6>Nome:</h6>
                <p>Joãozinho</p>
                <h6>Email:</h6>
                <p>joao@sesc.com</p>
                <h6>Idade:</h6>
                <p>23</p>
                <h6>Telefone:</h6>
                <p>11545302053</p>
                <h6>Endereço:</h6>
                <p>Rua da cacimba</p>
                </div>
                <a href="/cadastraritem"><Botao>Cadastrar Item</Botao></a>
            </section>
        </div>
    )
}

export default PerfilDoador;