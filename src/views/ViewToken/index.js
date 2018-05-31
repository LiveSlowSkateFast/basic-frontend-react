import React from "react";
import jwt_decode from "jwt-decode";


const ViewCode = () => {
    return (
        <div className="tab-pane" id="sample-javascript">
            <pre className="hl">
                <code className="hljs actionscript">
                {JSON.stringify(jwt_decode(localStorage.getItem('id_token')))}
                </code>
            </pre>
        </div>
    )
}

export default ViewCode;