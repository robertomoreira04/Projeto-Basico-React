import React from "react";
import "./styles.css"


export function Article ({image, title, from, text}) {


        return (
            <article id="article">

                <img className="imagens" src={image} alt={title} />

                <div className="article-infos">

                    <h2>{title}</h2>

                    <h3>{from}</h3>

                    <p>{text}</p>

                </div>
            </article>
        )
    }






