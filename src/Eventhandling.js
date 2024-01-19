import React, { useState } from "react";

function Event() {
  const [headingText, setHeading] = useState("hello");
  const [mouse, setmouse] = useState(false);
  function Mouseover() {
    setmouse(true);
  }
  function Mouseout() {
    setmouse(false);
  }
  function hanleClick() {
    setHeading("submitted");
  }
  return (
    <div>
      <h1>{headingText}</h1>
      <input type="text" placeholder="What is your name?" />
      <button
        style={{ backgroundColor: mouse ? "black" : "white" }}
        onMouseOver={Mouseover}
        onMouseOut={Mouseout}
        onClick={hanleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default Event;
