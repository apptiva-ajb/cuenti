import React, { Component } from "react"
import BookHeader from "../components/Book/BookHeader/BookHeader"
import Contenido from "../components/Book/Contenido/Contenido"
import NextButton from "../components/Book/NextButton/NextButton"
import ContenidoPrueba from "../data/contenido.json"

export default class book extends Component {
  state = {
    contador: 0,
    contenido: "",
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevState.contador !== this.state.contador) {
    console.log(this.state.contador)
    console.log(ContenidoPrueba.contenido[this.state.contador])
    // }
  }
  componentDidMount() {
    // if (prevState.contador !== this.state.contador) {
    console.log(this.state.contador)
    console.log(ContenidoPrueba.contenido[this.state.contador].content)
    // }
    var node = document.createElement("LI") // Create a <li> node
    var textnode = document.createTextNode(ContenidoPrueba.contenido[this.state.contador].content) // Create a text node
    node.appendChild(textnode) // Append the text to <li>
    document.getElementById("book").appendChild(node)
  }

  append() {
    var node = document.createElement("LI") // Create a <li> node
    var textnode = document.createTextNode(ContenidoPrueba.contenido[this.state.contador].content) // Create a text node
    node.appendChild(textnode) // Append the text to <li>
    document.getElementById("book").appendChild(node)

  }

  render() {
    return (
      <div id="book">
        <BookHeader />
        <Contenido
          payload={ContenidoPrueba.contenido[this.state.contador].content}
        />
        <Contenido payload={"Más bla"} />
        <NextButton onClick={this.append} />
      </div>
    )
  }
}
