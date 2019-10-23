import React from 'react'
import { METHODS } from 'http';

const Item = ({id, nome, descricao}) => {
    
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
                    <h5>{nome}</h5>
                    <p>{descricao}</p>
                    <button onClick={aceitarItem}>minha aceita namoralzinha</button>
                </div>
            
        </div>
    )
}

export default Item;