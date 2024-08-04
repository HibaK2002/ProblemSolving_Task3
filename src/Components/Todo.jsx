import React from "react";
import { useState } from "react";
import { useRef } from "react";
function Todo () {
    const [Tasks,setTodos] = useState([]); //useSate retuen array with 2 elements , one as a value(here as an Array) and the other as a func 
const inputRef = useRef() //useRef to connect it with the input field

const AddTask = () => { 
    const text = inputRef.current.value; //takes the current wrriten value in textfield
    const newItem = {completed:false,text}
    setTodos([...Tasks,newItem]) //...(Sprit)  to not override any task, to add  as a new task instead
    inputRef.current.value=""; //Just to clear the input for user
}
const MarkTask = (index) => //To excatly select on the task with the correct index
 {  const newTodos = [...Tasks] //craet a copy of the array to make it "Array of an objects"
 newTodos[index].completed= !newTodos[index].completed //The user can undo the mark
 setTodos(newTodos) //Update thee statee
}
const DeleteTask= (index) => {
    const newTodos = [...Tasks]; //craet a copy of the array to make it "Array of an objects"
    newTodos.splice(index, 1) //remove
    setTodos(newTodos)
  }
   return (
    <div>
      <h1>To Do Lists</h1>
      <ul>
        {Tasks.map(({ text, completed }, index) => ( 
        <div> <li
            style={{ textDecoration: completed ? "line-through" : "none" }}
            onClick={() => MarkTask(index)}
          >
            {text}
          </li>
          <span  style={{ color: "red" }} onClick={() => DeleteTask(index)} >X </span>
          

          </div> 
        ))}
      </ul>
      <input ref={inputRef} placeholder="Enter Task" />
      <button onClick={AddTask}>Add</button>
    </div>
  );
}

export default Todo
