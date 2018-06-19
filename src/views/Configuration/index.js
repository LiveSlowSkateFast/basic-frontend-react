import React from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Code } from 'components'
import ScopesList from "./ScopesList";
import ResponseTypeList from "./ResponseTypeList";
import SendRequestButton from "./SendRequestButton";
import AudienceSelect from "./AudienceSelect";


const Configuration = ({ responseBody }) => (
  <React.Fragment>
    <div className="col-xs-12 wrapper">
      <h3> Configure Your Request </h3>
    </div>
    <div className="col-xs-8 wrapper">
      <h5> Select Audience</h5>
      <AudienceSelect />
      <h5> Select Scopes </h5>
      <ScopesList />
      <h5> Response Types </h5>
      <ResponseTypeList />
    </div>
    <div className="col-xs-4 wrapper">
      <SendRequestButton />
    </div>
    <div className="col-xs-12 wrapper">
      <h3> View Response </h3>
      <Code code={responseBody} />
    </div>
  </React.Fragment>
)

Configuration.propTypes = {
  responseBody: PropTypes.string
};

export default connect((state => ({
  responseBody: state.responseBody,
})))(Configuration)