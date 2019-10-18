import React from 'react';
import logo from './logo.svg';
import './ Placar.scss';

const Placar = ({time}) =>{
    const [votos,setVotos] = useState(0);
 
    const incrementar = () =>{
      setVotos(votos +1);
    }
}

const decrementar = () =>{
  if(votos >0){
    setVotos(votos -1);
  }
}

export default Placarcontainer;
