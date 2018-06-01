import React from "react";
import jwt_decode from "jwt-decode";


const ViewCode = () => {
  return (
    <React.Fragment>
    <h3> Access Token </h3>
    <pre className="hl">
      <code className="hljs actionscript">
        {localStorage.getItem('access_token')}
      </code>
    </pre>
      <h3> ID Token </h3>
      <pre className="hl">
        <code className="hljs actionscript">
          {localStorage.getItem('id_token')}
        </code>
      </pre>
      <h3> ID Token Contents</h3>
      <pre className="hl">
        <code className="hljs actionscript">
          {JSON.stringify(jwt_decode(localStorage.getItem('id_token')), null, 2)}
        </code>
      </pre>
    </React.Fragment>
  )
}

export default ViewCode;