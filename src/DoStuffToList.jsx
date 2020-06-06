import React, { useState } from "react"; //react is the library
import ViewList from "./ViewList.jsx"; //path to ViewList.jsx file
// import ButtonSelect from "./ButtonSelect.jsx"; //function name must match
import AddTodo from "./AddTodo.jsx";
//In this case the name of the function in the ButtonSelect.jsx file is ButtonSelect

function DoStuffToList() {
  
  const [todos, setTodos] = useState(["walk the dog", "feed the fish"]);

  //placed here so it is used inside the
  //function. useState is a storage container that uses these parameters - the first one
  // is a variable and the second one is a function to change the variable. This is the
  //only way we can change the state which is list. Default value is an empty string - every
  //time " " (list) changes - must use ViewList which is a function and is
  //the 2nd parameter.

  const addTodo = input => {
    setTodos([...todos, input])
    // Child display is being imported from ButtonSelect function
    //in ButtonSelect.jsx This brings buttonpad click child data to DoStuffToList parent
  };
  const deletetodo = index => {
     let filtered = todos.filter((val, ind) => ind!==index); 
     setTodos(filtered); 
  };
  const deleteAll = () => {
    setTodos([])
  };
  const checkoffitem = (checkofftodo) => {
    checkofftodo = 4; //placeholder code
  };
  return (
    <div className="list">
      <AddTodo addTodo={addTodo} deleteAll={deleteAll} /> 

      {/*The className property sets or returns the class name of an element*/}
      <ViewList pizza={todos} deletetodo={deletetodo} />
      {/*{todos} is the useState prop (props.pizza in ViewList.jsx) thats passed to todos*/}
      {/*<ButtonSelect
        addtodo={addtodo}
        deletetodo={deletetodo}
        deletalltodo={deletealltodo}
        checkofftodo={checkofftodo}
      />*/}
    </div>
  );
}
export default DoStuffToList;
