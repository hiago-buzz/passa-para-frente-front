import React from 'react';
import {Link} from 'react-router-dom';
import './ItemDoador.scss';
import Item from '../ListaItens/Item';


const ItemDoador = () =>{
    const [data, setData] = React.useState([])

    const id = localStorage.getItem("id");

    React.useEffect(() => {
        Itens();
    }, []);

    const Itens = () => {
        fetch ('http://localhost:8000/api/doadores/'+ id +'/itensCadastrados/')
        .then(result => {
            return result.json()
        }).then(data =>{
            setData(data);
            console.log(data)
        })
    }
    return(
        <div className="Item">
        <Link to="/"><h5>voltar</h5></Link>
        <Link to="/"><h5>editar</h5></Link>
        <h5 >deletar</h5> 
        <section className="itens">
        <div className="Itens">
        <h1>Meus Itens</h1>
            {data.map((item) => {
                return <Item id={item.id} nome={item.nome} descricao={item.descricao} />

            })

            }
            
        </div>
        </section>
    </div>
    )
}
export default ItemDoador;