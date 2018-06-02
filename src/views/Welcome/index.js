import React from "react";
import { EmptyState } from '@auth0/styleguide-react-components';
import jwt_decode from "jwt-decode";

const Welcome = (props) => {
  const name = jwt_decode(localStorage.getItem('id_token'))['name'] ? (
    jwt_decode(localStorage.getItem('id_token'))['name'] ) : "?"
  return (
    <EmptyState
      title={"Welcome " + name}
      description="Now that you are logged in, look to the sidebar for things to do."
      iconCode="317">
    </EmptyState>
  )
}

export default Welcome;