import React from "react"




const todoTitle = "Call Family";
const todoDesc =
  "the first day was not quite freightning, but the problem started to arise from the coming days";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

//a component is created underneath so that
//we dont have to write boiler plate code
function Card(props) {
  //through desctructuring we can do this
  const { titleText, descText } = props;
  return (
    <div className="card">
      <h3 className="cardTitle">{titleText}</h3>
      <p className="cardDesc">{descText}</p>

      <p className="cardFooter">
        {dateName + "/" + monthName + "/" + currentYear}
      </p>
    </div>
  );
}
export default Card;
