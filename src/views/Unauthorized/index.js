import React from "react";
import { EmptyState } from '@auth0/styleguide-react-components';
import { history } from 'services';

const Unauthorized = (props) => {
  const { auth } = props
  return (
    <EmptyState
      title="You're not suppose to be here!"
      description="You're going to want to either sign in or back away."
      iconCode="311">
      <button
        onClick={() => history.goBack()}
        className="btn btn-transparent">
        Back
      </button>
      <button
        onClick={() => auth.login()}
        className="btn btn-success">
        Log In
      </button>
    </EmptyState>
  )
}

export default Unauthorized;