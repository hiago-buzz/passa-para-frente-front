import React from 'react'
import './PerfilEscola.scss'
import Botao from '../Botao/Botao';

const PerfilEscola = () => {
    return (
        <div className="PerfilEscola">
            <div className="perfil">
                <h5>perfil</h5>
            </div>
            <section className="infos">
                <div>

                <h6>Nome:</h6>
                <p>SESC</p>
                <h6>Email:</h6>
                <p>sesc@sesc.com</p>
                <h6>Telefone:</h6>
                <p>11545302053</p>
                <h6>Endereço:</h6>
                <p>Rua da cacimba</p>
                </div>
                <Botao>Procurar doação</Botao>
            </section>
        </div>
    )
}

export default PerfilEscola;