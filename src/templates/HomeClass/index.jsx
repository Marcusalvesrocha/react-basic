import { Component } from "react";
import "./styles.css";

export class HomeClass extends Component {
  state = {
    counter: 0
  }

  handleClick = () => {
    this.setState(
      (prevState, prevProps) => {
        console.log('PREVPROPS', prevProps.numberIncrement)
        return {counter: prevState.counter + prevProps.numberIncrement}
      },
      () => console.log('POST', this.state.counter)
    )
  }

  render() {
    return(
      <div className="container">
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
