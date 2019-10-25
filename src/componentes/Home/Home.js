import React from 'react';
import Nav from '../Nav/Nav';
import './Home.scss';



const Home = () => {
  return(
    <div className= "Home">
      <Nav />
      <header>
         <h1>O PROJETO</h1>
          <p>Passa para frente foi idealizado por nós para que escolas em zonas de risco recebam doaçoes através dos nossos colaboradores cadastrados.
O projeto foi inspirado em uma pesquisa realizada no primeiro semestre de 2019, onde foi constatado que 70% das escolas do estado de São Paulo, localizadas em zonas de periféricas, sofrem com a defasagem de algum tipo de material basíco para um bom funcionamento.
Nosso projeto já beneficiou cerca de 5 mil escolas e queremos beneficiar cada vez mais, buscando uma rede de ensino cada vez melhor e mais qualificada para as nossas crianças e adolecentes!

Junte-se a nós para um futuro melhor!</p>
      </header>
    </div>

 );
}
export default Home;      