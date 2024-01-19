import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick() {
    setHeading(name);
  }

  return (
    <div>
      <h1>Hello {headingText}</h1>
      <form>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What is your name?"
          value={name}
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App();
