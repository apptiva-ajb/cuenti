import React, { Component } from 'react'

export default class Contenido extends Component {
    render() {
        return (
            <div>
                <p>{this.props.payload}</p>
            </div>
        )
    }
}
