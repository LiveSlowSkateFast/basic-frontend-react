import React from "react";
import { Auth } from "services";

const auth = new Auth();

const LogInButton = (props) => (
// eslint-disable-next-line
  <a
    href="#"
    onClick={() => auth.login()}
    className={props.className ? props.className : "btn btn-transparent"}>
    Log In
  </a>
);

export default LogInButton;