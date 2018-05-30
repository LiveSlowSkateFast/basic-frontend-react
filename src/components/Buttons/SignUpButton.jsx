import React from "react";

const SignUpButton = (props) => (
  <button
    className={props.className ? props.className : "btn btn-success"}>
    Sign Up
  </button>
);

export default SignUpButton;