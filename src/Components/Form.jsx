//Q3 Not finished yet, there is an issue , NOTHING is showhn in the console
import React, { Component } from 'react';

 function Form() { 
   function Submit () {  console.log(name)  }
   return (
    <div>
  <form >
      <label>
        Name:
        <input 
          type="text" 
          
        />
      </label>
    <button type="submit" onSubmit={Submit} >Submit</button>
  </form>
  </div>
)
 }
    
export default Form;
