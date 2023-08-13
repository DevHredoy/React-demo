import React from "react";
//in App.js  file the component is acommodatd and the value of property has been passed, the properties are defined in
// in Card.js file and propermapping has also been defined there
import Child from "./components/STATELIFTING/Child";
const data = "I am from parent (app)";


const handleChildData = (childData) => {
  console.log("function value " + childData);
  
};

function App() {
  return (
    <div>
      <Child data={data} handleChildData={handleChildData} />
    </div>
  );
}

export default App;
