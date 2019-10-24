import React from 'react'
import { Link } from 'react-router-dom'
import './PerfilEscola.scss'
import Botao from '../Botao/Botao';

const PerfilEscola = () => {
    const [data, setData] = React.useState({})

    const id = localStorage.getItem("id");

    if(!id) {
        window.location = "/escola";
    }

    React.useEffect(() => {
        buscaPerfil();
    }, []);

    const buscaPerfil = () => {
        fetch('http://localhost:8000/api/escolas/' + id + '/')
        .then(result => {
            return result.json()
        }).then(data =>{
        setData(data);
        })
    }
    const deletarEscola = () =>{
        if(window.confirm('deseja deletar seu perfil?')) {
            fetch('http://localhost:8000/api/escolas/' + id + '/' ,{
                method:"DELETE",
            }).then(() =>{
                localStorage.removeItem("id");
                window.location = 'http://localhost:3000/';
            })
        }
    }
    return (
        <div className="PerfilEscola">
            <div className="perfil">
                <Link to="/editarescola"><h5>editar</h5></Link> 
                <h5 onClick={deletarEscola}>Deletar</h5>
               <Link to="/"><h5>voltar</h5></Link> 
            </div>
            <section className="infos">
                <div>

                <h6>Nome:</h6>
                <p>{data.nome}</p>
                <h6>Email:</h6>
                <p>{data.email}</p>
                <h6>Telefone:</h6>
                <p>{data.telefone}</p>
                <h6>Endereço:</h6>
                <p>{data.endereco}</p>
                {/* <h6>Estado:</h6>
                <p>{data.estado}</p> */}
                </div>
               <Link to="/itens"><Botao>Procurar doaçoes</Botao></Link>
            </section>
        </div>
    )
}

export default PerfilEscola;