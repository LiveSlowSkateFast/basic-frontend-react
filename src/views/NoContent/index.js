import React from "react";
import { EmptyState } from '@auth0/styleguide-react-components';
import { Link } from "react-router-dom";

const NoContent = (props) => {
  const { auth } = props
  return (
    <EmptyState
      title="Well, this is pretty boring..."
      description="There isn't a whole lot to do here until you log in."
      iconCode="311">
      <Link
        to="/"
        onClick={() => auth.login()}
        className={props.className ? props.className : "btn btn-success"}>
        Log In
      </Link>
    </EmptyState>
  )
}

export default NoContent;