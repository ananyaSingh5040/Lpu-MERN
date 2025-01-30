import React from "react";
import { useState } from "react";

function Task() {
    console.log("Task page rendered/ re- rendered.");
    // let user= "Ajay";
    const [user,setUser]= useState('Ajay');
  const handleReactInput = (e) => {
    // console.log(e.target.value);
    setUser(e.target.value);
  };
  return (
    <div className="div">
      <h1 className="task-page">Hello from {user}</h1>
      <input className="user-input" onChange={handleReactInput}></input>
    </div>
  );
}

export default Task;
