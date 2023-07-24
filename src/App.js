import React from "react";
import Card from "./components/Card";


//in App.js  file the component is acommodatd and the value of property has been passed, the properties are defined in 
// in Card.js file and propermapping has also been defined there
function App() {
  return (
    <div>
      <h1 className="headingStyle">Todo App</h1>
      <Card titleText="buy grocery" descText="buy veg, buy cereals" />
      <Card titleText="Call caretaker" descText=" cereals" />
      <Card titleText="grocery" descText="buy veg, buy cereals" />
      
    </div>
  );
}

export default App;
