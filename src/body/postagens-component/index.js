import React, { Component } from "react";
import { render } from "react-dom";

import Button from "./Button";
import "./styles.css";
import Perfil from "./perfil.png";

export default class Postagens extends Component {
  somar = () => {
    alert("teste");
  };
  render() {
    return (
      <div className="postagens">
        <div className="postagem-perfil-usuario">
          <img src={Perfil}></img>
          <div className="perfil-itens">
            <p className="paragf-nome">Diego Schell Fernandes</p>
            <p className="paragf-tempo">há 3 min</p>
            <Button onClick={this.somar}>teste</Button>
          </div>
        </div>
        <p className="linha">
          ___________________________________________________________________
        </p>
        <div className="postagem-conteudo">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            o f Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethi
          </p>
        </div>
      </div>
    );
  }
}
