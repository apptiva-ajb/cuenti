import React, { Component } from 'react'

export default class nextButton extends Component {
    
    render() {
        return (
            <div>
                <button onClick={this.props.nextButton}>Next</button>
            </div>
        )
    }
}
