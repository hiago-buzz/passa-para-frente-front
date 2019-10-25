import React from 'react';
import './ListaItens.scss';
import {Link} from 'react-router-dom';
import Item from './Item';

const ListaItens = () => {
    const [data, setData] = React.useState([])

    const id = localStorage.getItem("id");

    React.useEffect(() => {
        Itens();
    }, []);

    const Itens = () => {
        fetch ('http://localhost:8000/api/doacoes/disponiveis/')
        .then(result => {
            return result.json()
        }).then(data =>{
            setData(data);
            console.log(data)
        })
    }
    const aceitarItem = () => {
        let IdEscola = localStorage.getItem("id")
        fetch('http://localhost:8000/api/escolas/'+IdEscola +'/aceitar/',{
            method:"POST",
            body: JSON.stringify({
                doacao: id
            }),
            headers: {
                'Content-type': 'application/json'

            }
    }).then((response) => {
        return response.json();
    }).then(() =>{
        window.location = window.location;
        
    })
        
    }
  return(
    <div className="Lista">
        <Link to="/perfilescola"><h5>voltar</h5></Link> 
        <section className="itens">
        <h1>Objetos Disponiveis</h1>
        <div className="Itens">
            {data.map((item) => {
                return <Item id={item.id} click={aceitarItem} nome={item.nome} descricao={item.descricao}botao={"Aceitar Doação"}/>
            })

            }
            
        </div>
        </section>
    </div>
    )
}
export default ListaItens;