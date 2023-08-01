import React, { Component } from "react";

export default class EVENT_BINDING_CLASS extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }


    

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>

        {/* // THE purpose of binding is in some syntaxs are not understood by 
        the older version of ecma   */}
        <button onClick={this.handleClick.bind(this)}>increase</button>
      </div>
    );
  }
}
