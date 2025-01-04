
import React, { useState }from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");
  const handleInputChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
        <div>
        <label htmlFor="nameInput" >
          Enter your name:
        </label>
        <input
          type="text"
          id="nameInput"
          value={name}
          onChange={handleInputChange}
          placeholder="Type your name"
        />
      </div>
      <p >{name ? `Hello ${name}!` : ""}
      </p>
    </div>
  )
}

export default App
