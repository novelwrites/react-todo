import React, { useState } from 'react'

const  AddTodo = (props) => {
    const [input, setInput]= useState('')

    const handleChange = event => setInput(event.target.value)
    const handleAdd = () => {
        props.addTodo(input)
        setInput("")
    }
    return (
        <div>
            <input placeholder="Enter your todo" value={input} onChange={e => handleChange(e)} /> 
            <button onClick={handleAdd} >Add Todo</button>
            <button onClick={props.deleteAll} >Clear all</button>
        </div>
    )
}


export default AddTodo; 