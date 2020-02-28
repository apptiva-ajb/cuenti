import React, { Component } from 'react'

export default class nextButton extends Component {
    nextButton = () => {
        console.log("ee")
      }
    
    render() {
        return (
            <div>
                <button onClick={this.nextButton}>Next</button>
            </div>
        )
    }
}
