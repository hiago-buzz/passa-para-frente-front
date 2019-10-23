import React from 'react'
import './PerfilDoador.scss'
import Botao from '../Botao/Botao';


const PerfilDoador = () => {

    const [data, setData] = React.useState({})

    const id = localStorage.getItem("id");

    React.useEffect(() => {
        buscaPerfil();
    }, []);

    const buscaPerfil = () => {
        fetch('http://localhost:8000/api/doadores/' + id + '/')
        .then(result => {
            return result.json()
        }).then(data =>{
        setData(data);
        })
    }

    return (
        <div className="PerfilDoador">
            <div className="perfil">
                <h5>perfil</h5>
            </div>
            <section className="infos">
                <div>
                <h6>Nome:</h6>
                <p>{data.nome}</p>
                <h6>Email:</h6>
                <p>{data.email}</p>
                <h6>Idade:</h6>
                <p>{data.idade}</p>
                <h6>Telefone:</h6>
                <p>{data.telefone}</p>
                <h6>Endereço:</h6>
                <p>{data.endereco}</p>
                </div>
                <a href="/cadastraritem"><Botao>Cadastrar Item</Botao></a>
            </section>
        </div>
    )
}

export default PerfilDoador;