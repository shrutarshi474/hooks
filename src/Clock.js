import React, { useState } from "react";

function Clock() {
  const today = new Date().toLocaleTimeString();

  const [sec, setSec] = useState(today);

  function Newtime() {
    let time = new Date().toLocaleTimeString();
    setSec(time);
  }
  setInterval(Newtime, 1000);

  return (
    <>
      <h1>{sec}</h1>
    </>
  );
}

export default Clock;
