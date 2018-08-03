import React from "react";
import jwt_decode from "jwt-decode";
import { Code } from "components";


const ViewCode = () => {
  return (
    <React.Fragment>
      <h3> ID Token </h3>
      <Code className="actionscript" code={localStorage.getItem('id_token')} />
      <h3> ID Token Contents</h3>
      <Code code={JSON.stringify(jwt_decode(localStorage.getItem('id_token')), null, 2)} />
      <h3> Access Token </h3>
      <Code className='actionscript' code={localStorage.getItem('access_token')} />
      <h3> Access Token Contents</h3>
      <Code code={JSON.stringify(jwt_decode(localStorage.getItem('access_token')), null, 2)} />
    </React.Fragment>
  )
}

export default ViewCode;