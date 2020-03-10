import React, { Component } from 'react'

export default class Contenido extends Component {
    render() {
        const divStyle = {
            color: this.props.payload.color
          };
        return (
            <div style={divStyle}>
                <p><span>{this.props.payload.personaje}: </span>{this.props.payload.content}</p>
            </div>
        )
    }
}
