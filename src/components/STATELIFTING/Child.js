import React from "react";

const Child = (props) => {
 const data ="I am from child component";
  props.handleChildData(data);
  return (
    <div>
      <p>I am child component</p>

      <p>{props.data}</p>
      <p>{props.test}</p>
      <p>{props.childData}</p>

    </div>
  );
};

export default Child;
