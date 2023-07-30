import React, { Component } from "react";

export default class STATE extends Component {
  // In this class we are going to use state.
  //state is such a variable which works like props
  //this variables are passed in component as argument(real data) in app.js file
  // props couldn't be altered inside the component(where props are designed and defined)
  // but state can be modified where it is defined
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };



  handleDecrement = () => {
    this.setState({
      count: this.state.count -1,
    });
  };



  render() {
    const { count } = this.state;

    return (
      <div>
        {/* // the below statement is not applicable
//without using state we can't change value
// this.props.count=this.props.count+1
 */}

        <h1>Count:{count}</h1>

        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
     
      </div>
    );
  }
}
