import React, { Component } from "react"
import BookHeader from "../components/Book/BookHeader/BookHeader"
import Contenido from "../components/Book/Contenido/Contenido"
import NextButton from "../components/Book/NextButton/NextButton"
import ContenidoPrueba from "../data/contenido.json"
import './book.css'

export default class book extends Component {
  state = {
    contador: 0,
    contenido: "",
  }


  nextButton = () => {
    var node = document.createElement("p") // Create a <li> node
    var textnode = document.createTextNode(
      ContenidoPrueba.contenido[this.state.contador].content
    )
    node.appendChild(textnode)
    document.getElementById("book").appendChild(node)
    this.setState({ contador: this.state.contador + 1 })
  }

  render() {
    return (
      <div>
        <div id="book">
          <BookHeader title={ContenidoPrueba.nombre}/>
        </div>
        <div className="nextButton">
        <NextButton nextButton={this.nextButton} />

        </div>
      </div>
    )
  }
}
