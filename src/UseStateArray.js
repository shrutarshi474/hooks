import React, { useState } from "react";

const UseStateObject = () => {
  const [myObject, setMyobject] = useState({
    myName: "Ray",
    myage: 21,
    degree: "bba",
    rollno: 55,
  });

  const changeobject = () => {
    setMyobject({ ...myObject, myName: "lisicatech" });
  };

  return (
    <div>
      <h1>
        Name: {myObject.myName} & Age: {myObject.myage} & Degree:
        {myObject.degree}
      </h1>
      <button onClick={changeobject}>Update</button>
    </div>
  );
};

export default UseStateObject;
