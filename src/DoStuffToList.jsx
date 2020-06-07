import React, { useState } from "react"; 
import ViewList from "./ViewList"; 
import AddTodo from "./AddTodo.jsx";
//The name of the function in AddTodo.jsx is AddTodo

function DoStuffToList() {
  
  const [todos, setTodos] = useState(["walk the dog", "feed the fish"]);
  
  //Code placed here so it is used inside the
  //function. useState is a storage container that uses these parameters - the first one
  // todos is a variable and second one setTodos is a function to change the variable. This is the
  //only way we can change the state which is "list". Default value in this case is
  //"walk the dog", "feed the fish" for testing purposes - usually would be [] (empty array).
  // Every time " " (list) changes - must use setTodos which is a function and is
  //the 2nd parameter.

  const addTodo = input => {
    setTodos([...todos, input])//...todos
    // Child is being imported from AddTodo function
    //in AddTodo.jsx This brings input child data to DoStuffToList parent
  };
  const deletetodo = index => {
     let filtered = todos.filter((val, ind) => ind!==index); 
     setTodos(filtered); 
  };
  const deleteAll = () => {
    setTodos([])
  };
  
  return (
    <div className="list">
      <AddTodo addTodo={addTodo} deleteAll={deleteAll} /> 

      {/*The className property sets or returns the class name of an element*/}
      <ViewList pizza={todos} deletetodo={deletetodo} />
      {/*{todos} is the useState prop (props.pizza in ViewList.jsx) thats passed to todos*/}
      
    </div>
  )
 }  
export default DoStuffToList;
