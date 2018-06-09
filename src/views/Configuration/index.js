import React from "react";
// import PropTypes from 'prop-types';
import ScopesList from "./ScopesList";

const Configuration = () => (
  <div className='configuration-container'>
    <h3> Select Scopes </h3>
    <ScopesList />
  </div>
)

Configuration.propTypes = {
  // auth: PropTypes.object.isRequired
};

export default Configuration;