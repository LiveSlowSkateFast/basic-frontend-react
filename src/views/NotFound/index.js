import React from "react";
import { EmptyState } from '@auth0/styleguide-react-components';
import { history } from "services"

const NotFound = () => (
  <EmptyState
    title="404 Not Found"
    description="Not sure how you got here, but you did.  It's probably best if you retrace your steps..."
    iconCode="370">
    <button
      className="btn btn-success"
      onClick={() => history.goBack()}>
      Back
    </button>
  </EmptyState>
);

export default NotFound;