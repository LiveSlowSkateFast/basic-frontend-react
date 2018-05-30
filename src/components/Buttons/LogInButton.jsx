import React from "react";
import Auth from "services/Auth";

const auth = new Auth();

const LogInButton = (props) => (
  <button
    onClick={() => auth.login()}
    className={props.className ? props.className : "btn btn-transparent"}>
    Log In
  </button>
);

export default LogInButton;