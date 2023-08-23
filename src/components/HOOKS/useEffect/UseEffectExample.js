import React, { useState,useEffect} from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);






// useEffect:there will be
// // a function named use effect ,
//  we have to pass another anonymous function in the parameter.
//every time the page is renedered use effect will be called .
// this method is already defined in react. we just need to pass argument



useEffect(()=>
{
console.log("useEffect");

});




const handleOnClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
        {console.log("rendering")}
      <h1>Count: {count}</h1>
      <button onClick={handleOnClick}>+</button>
    </div>
  );
};

export default UseEffectExample;
