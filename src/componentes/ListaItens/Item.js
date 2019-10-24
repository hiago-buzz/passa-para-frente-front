import React from 'react'
import { METHODS } from 'http';

const Item = ({id, nome, descricao,botao}) => {
    
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
                    <button onClick={aceitarItem}>{botao}</button>
                </div>
            
        </div>
    )
}

export default Item;