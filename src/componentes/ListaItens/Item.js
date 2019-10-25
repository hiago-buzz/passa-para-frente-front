import React from 'react'
import {Link} from 'react-router-dom';
import { METHODS } from 'http';

const Item = ({id, nome, descricao,botao,caminho,click}) => {
    
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
    
        return (
        <div className="Itens">
                 <div>
                    <h6>Nome:</h6>
                    <p>{nome}</p>
                    <h6>Descrição:</h6>
                    <p>{descricao}</p>
                    <Link to={caminho}>
                    <button onClick={click}>{botao}</button>
                    </Link>
                </div>
            
        </div>
    )
}

export default Item;