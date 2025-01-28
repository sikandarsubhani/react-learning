import React from "react";
import Input from "./Input";

function Login() {
  return (
    <form action="" className="form">
      <Input type="text" placeholder="Username"></Input>
      <Input type="Password" placeholder="Password"></Input>
      <button type="submit">Login</button>
    </form>
  );
}
export default Login;
