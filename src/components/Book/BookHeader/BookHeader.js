import React, { Component } from "react"
import "./bookHeader.css"

export default class BookHeader extends Component {
  render() {
    return (
        <div className="bookHeader">
          <h1>{this.props.title}</h1>
          <h2>Acto / Escena</h2>
        </div>
    )
  }
}
