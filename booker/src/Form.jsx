import React from 'react';
import { useState } from 'react';   

function Form() {
    const [input, setInput] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!input) return; 
        console.log(input);
        setInput("");
      
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add a book</legend>
          <input
            type="text"
            name="book"
            placeholder="Add a book"
            autoComplete="off"
          />
          <button type="submit">Add book</button>
        </fieldset>
      </form>
    );
  }
  
  export default Form;