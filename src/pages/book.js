import React, { Component } from "react"
import BookHeader from "../components/Book/BookHeader/BookHeader"
import Contenido from "../components/Book/Contenido/Contenido"
import ContenidoPrueba from "../data/contenido.json"
import Background from "../data/images/chiquito.jpg"
import "./book.css"

export default class book extends Component {
  state = {
    line: 0,
  }

  componentDidUpdate() {
      var objDiv = document.getElementsByClassName("contentContainer")[0];
      objDiv.scrollTop = objDiv.scrollHeight;
  }

  content = () => {
    let table = []
    for (let i = 0; i < this.state.line; i++) {
      table.push(<Contenido payload={ContenidoPrueba.scene[0].contenido[i]} />)
    }
    return table
  }

  addLine = () => {
    this.setState({ line: this.state.line + 1 })
  }

  render() {
    var sectionStyle = {
      background: "wheat",
      width: "100%",
      height: "100vh",
      // backgroundImage: "url(" + "https://s.libertaddigital.com/2017/11/11/1920/1080/fit/chiquito-calzada-chistes.jpg" + ")",
      backgroundImage: "url(" + ContenidoPrueba.scene[0].background + ")",
      // background: "url('../data/images/chiquito.jpg')"
    }

    return (
      <div style={sectionStyle}>
        <div>
          <BookHeader title={ContenidoPrueba.nombre} />
        </div>
        <div className="contentContainer" id="MyDivElement">
          {this.content()}
        </div>
        <div className="nextButtonContainer">
          <button onClick={this.addLine}>Click</button>
        </div>
      </div>
    )
  }
}
