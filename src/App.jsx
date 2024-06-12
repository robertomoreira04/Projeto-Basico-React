import React from "react";

import { Article } from "./Components/Article/Article";

import { Navbar } from "./Components/Navbar/Navbar";

import "./styles/App.css";

import Img1 from "./images/img1.png"
import Img2 from "./images/img2.png"
import Img3 from "./images/img3.png"


export class App extends React.Component {
  render() {
    return (
    <>

    <Navbar />

    <section id="articles">

      <Article title='Código Limpo' from='Roberto' texto='Testando props' imagem={Img1}/>

      <Article title='Codando' from='Desenvolvedor' texto='Em React' imagem={Img2}/>

      <Article title='Codigando' from='Frontend' texto='Sensacional!' imagem={Img3}/>
    </section>

    </>
    );
  };
};









