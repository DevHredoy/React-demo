import React from "react";
import Card from "./components/Card";
import Data from "./data.json";

//in App.js  file the component is acommodatd and the value of property has been passed, the properties are defined in
// in Card.js file and propermapping has also been defined there
function App() {
  // cards have been created dynamically through for loop

  let items = [];
  items = Data.map((item) => <Card titleText={item.title} desc={item.desc} />);

  return (
    <div>
      <h1 className="headingStyle">Todo App</h1>
      {items}
    </div>
  );
}

export default App;
