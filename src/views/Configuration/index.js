import React from "react";
// import PropTypes from 'prop-types';
import ScopesList from "./ScopesList";

const styles = {
  configurationContainer: {
    minHeight: 400
  }
}

const Configuration = () => (
  <div className='configuration-container' style={styles.configurationContainer}>
    <h3> Select Scopes </h3>
    <ScopesList />
  </div>
)

Configuration.propTypes = {
  // auth: PropTypes.object.isRequired
};

export default Configuration;