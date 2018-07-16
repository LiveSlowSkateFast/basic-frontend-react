import React from "react";
import { EmptyState } from '@auth0/styleguide-react-components';

const NoContent = (props) => {
  const { auth } = props
  return (
    <EmptyState
      title="Well, this is pretty boring..."
      description="There isn't a whole lot to do here until you log in."
      iconCode="311">
      <button
        onClick={() => auth.login()}
        className="btn btn-success">
        Log In
      </button>
      <button
        onClick={() => auth.signUp()}
        className="btn btn-transparent">
        Sign Up
      </button>
    </EmptyState>
  )
}

export default NoContent;