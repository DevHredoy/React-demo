import React from "react";
import Card from "./components/Card";
import Data from "./data.json";

//in App.js  file the component is acommodatd and the value of property has been passed, the properties are defined in
// in Card.js file and propermapping has also been defined there
function App() {
  // cards have been created dynamically through for loop

  return (
    <div>
      <h1 className="headingStyle">Todo App</h1>
       {/* indexes will show that which index each of the element holds map
    function can take this second parameter */}
      {Data.map((item, index) => (
        <Card key={index} titleText={item.title} descText={item.desc}  />
      ))}
    </div>
  );
}

export default App;
