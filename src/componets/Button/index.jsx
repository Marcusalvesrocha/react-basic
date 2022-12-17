import "./styles.css"

import { Component } from "react";

export class Button extends Component {
  render(){
    const { text, onClick, disebled } = this.props
    return(
      <button
        className="button"
        disabled={disebled}
        onClick={onClick}
      >
        { text }
      </button>
    )
  }
}
