import React from "react";
import ReactDOM from "react-dom/client";
import Usestate from "./Usestate";
import UseStateObject from "./UseStateArray";
import Clock from "./Clock";
import Event from "./Eventhandling";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Hello World</h1>
    <UseStateObject></UseStateObject>
    <Usestate></Usestate>
    <Clock></Clock>
    <Event></Event>
  </React.StrictMode>
);
