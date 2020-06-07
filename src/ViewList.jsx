import React, { useState } from "react";

function ViewList(props) {
  return (
    <div>
      {props.pizza.map((todo, i) => (
        <p key={i}>
          {todo}
          <button onClick={() => props.deletetodo(i)}>Delete</button>
          <button>Completed</button>
          <checkbox onClick={() => props.checktodo(i)}>Completed</checkbox>
          <input type="checkbox"/>
        </p>
      ))}</div>
  )

  //The className property sets or returns the class name of an element

  //the only way to receive the value of display is through props.pizza
  //because has to come from parent (DoStuffToList)
}

export default ViewList;
