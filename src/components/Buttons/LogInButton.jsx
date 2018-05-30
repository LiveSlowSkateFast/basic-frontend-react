import React from "react";

const LogInButton = (props) => (
  <a
    href="/"
    className={props.className ? props.className : "btn btn-transparent"}>
    Log In
  </a>
);

export default LogInButton;