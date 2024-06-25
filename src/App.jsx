import React from "react";

import { Article } from "./Components/Article/Article";

import { Navbar } from "./Components/Navbar/Navbar";

import "./styles/App.css";

import Img1 from "./images/img1.png"
import Img2 from "./images/img2.png"
import Img3 from "./images/img3.png"

// Componente em classe é uma classe que herda a classe Component do React.

// Componente funcional é uma função que retorna HTML

export class App extends React.Component {
  render() {
    return (
    <>

    <Navbar />

    <section id="articles">

      <Article title='Código Limpo' from='Roberto' text='Testando componentes funcionais' image={Img1}/>

      <Article title='Codando' from='Desenvolvedor' text='Em React' image={Img2}/>

      <Article title='Codar é massa!' from='Frontend' text='Sensacional!' image={Img3}/>

    </section>

    </>
    );
  };
};









