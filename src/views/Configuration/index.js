import React from "react";
// import PropTypes from 'prop-types';
import ScopesList from "./ScopesList";
import ResponseTypeList from "./ResponseTypeList";

const Configuration = () => (
  <div className='configuration-container'>
    <h3> Select Scopes </h3>
    <ScopesList />
    <h3> Response Types </h3>
    <ResponseTypeList />
  </div>
)

Configuration.propTypes = {
  // auth: PropTypes.object.isRequired
};

export default Configuration;