import React from "react";
import Login from "./Login";

let isLoggedin = true;
let hour = new Date().getHours();

function App() {
  return (
    <div className="container">
      {isLoggedin ? <h1>Hello</h1> : <Login />}
      {hour > 12 && <h1>Current hour is {hour}</h1>}
    </div>
  );
}

export default App;
