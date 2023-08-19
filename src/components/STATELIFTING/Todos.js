import React from "react";

const Todos = (props) => {
  console.log(props.todos);
  return (
    <div>
      {props.todos.map((todo) => (
        <p>Todo todo={todo}</p>
      ))}
    </div>
  );
};

export default Todos;
