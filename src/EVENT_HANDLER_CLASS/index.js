import React, { Component } from "react";

export default class EVENT_HANDLER_CLASS extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changedValue: " ",
    };
  }

  handleClick = () => {
    console.log("clicked");
  };

  handleOnChange = (e) => {
    //in setState method we changing value but in a different fashion
    this.setState({
      changedValue: e.target.value,
    });
  
console.log(this.state.changedValue)
}

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleOnChange} />
        <p>{this.state.changedValue}</p>
      </div>
    );
  }
}
