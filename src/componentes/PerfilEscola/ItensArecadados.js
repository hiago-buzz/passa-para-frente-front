import React from 'react';
import {Link} from 'react-router-dom';
import Item from '../ListaItens/Item';
const Arecados = () =>{
    const [data, setData] = React.useState([])
    
    const id = localStorage.getItem("id");

    React.useEffect(() => {
        Itens();
    }, []);

    const Itens = () => {
        fetch ('http://localhost:8000/api/escolas/'+ id +'/aceitados/')
        .then(result => {
            return result.json()
        }).then(data =>{
            setData(data);
            console.log(data)
        })
    }

    const Cancelar =() =>{
        fetch('http://localhost:8000/api/escolas/'+ id +'/cancelar/', {
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
            // window.location = window.location;
                
        })
        
    }

return(
    <div className="Arecadados">
        <Link to="/perfilescola"><h5>voltar</h5></Link>
        <section className="item">
            <h1>Aceitados por mim</h1>
            <div className="item">
                {data.map((item =>{
                    return <Item id={item.id} nome={item.nome} descricao={item.descricao} botao={"Cancelar doacao"}click={Cancelar}/>

                }))}

            </div>
        </section>
    </div>
)
}

export default Arecados;