import React, { useState } from "react";

function Usestate() {
  const [name, setName] = useState("lisicatech");

  const changeName = () => {
    let val = name;

    if (val === "lisicatech") {
      setName("ray");
    } else {
      setName("lisicatech");
    }
  };

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>Click me</button>
    </div>
  );
}

export default Usestate;
