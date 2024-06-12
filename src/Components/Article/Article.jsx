import React from "react";
import "./styles.css"


export class Article extends React.Component {
    render() {
        return (
            <article id="article">

                <img className="imagens" src={this.props.imagem} alt={this.props.title} />

                <div className="article-infos">

                    <h2>{this.props.title}</h2>

                    <h3>{this.props.from}</h3>

                    <p>{this.props.texto}</p>

                </div>
            </article>
        )
    }
}





