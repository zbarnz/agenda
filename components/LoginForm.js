import { useState } from "react"
import Button from "./Button"

const LoginForm = () => {


  return (
    <form>
      <div>
        <label>Email:</label>
        <input type="text" placeholder="Email"></input>
      </div>
      <div>
        <label>Password:</label>
        <input type="text" placeholder="Password"></input>
      </div>
      <Button varient="primary" stretch={true} text="login" />
    </form>

    //Dave's Submit button
  );
};

export default LoginForm;
