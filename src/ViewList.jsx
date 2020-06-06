import React, { useState } from "react";

function ViewList(props) {
  return (
    <div>{props.pizza.map((todo,i)=>
    <p key={i}>{todo}
    <button onClick={() => props.deletetodo(i)} >Delete</button>
    <button>Completed</button>
    </p>
      )}</div> 
  )

  //The className property sets or returns the class name of an element

  //the only way to receive the value of display is through props.todoitems
  //because has to come from parent (DoStuffToList)
}

export default ViewList;
