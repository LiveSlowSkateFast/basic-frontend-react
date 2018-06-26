import React, { Component } from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Code } from 'components'
import ScopesList from "./ScopesList";
import ResponseTypeList from "./ResponseTypeList";
import SendRequestButton from "./SendRequestButton";
import AudienceSelect from "./AudienceSelect";
import { ServerAPI } from 'services'
import Spinner from "../../components/Spinner";

const api = new ServerAPI()

class Configuration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentAudience: props.currentAudience,
      availableResources: [],
      availableScopes: [],
    }
  }

  onAudienceUpdate = audienceId => {
    this.setState({availableScopes: []})
    api.getResourceServerScopes(audienceId, (err, res) =>
      err ? console.log(err) : this.setState({ availableScopes: res }))
  }

  componentWillMount() {
    api.getResourceServers((err, res) =>
      err ? console.log(err) : (
        this.setState({ availableResources: res }),
        api.getResourceServerScopes(this.state.availableResources.find(res =>
          res.audience === this.state.currentAudience).id, (err, res) =>
          err ? console.log(err) : this.setState({ availableScopes: res }))
      ))
  }

  render() {
    const { responseBody } = this.props
    const { availableResources, availableScopes } = this.state
    return availableResources.length === 0 ? <Spinner size='lg' logo /> : (
      <React.Fragment>
        <h3> Configure Your Request </h3>
        <div className="col-xs-12 wrapper">
          <h5>Choose a Resource Server</h5>
        </div>
          <div className="col-xs-8 wrapper">
            <AudienceSelect
              availableResources={availableResources}
              onChange={this.onAudienceUpdate}
            />
          </div>
          <div className="col-xs-4 wrapper">
            <SendRequestButton />
          </div>
        <div className="col-xs-12 wrapper">
          <h5> Select Scopes </h5>
          {availableScopes.length === 0 ? <Spinner logo /> : (
            <ScopesList
              availableScopes={availableScopes}
            />)}
        </div>
        {/* <h5> Response Types </h5>
          <ResponseTypeList /> */}
        <div className="col-xs-12 wrapper">
          <h3> View Response </h3>
          <Code code={responseBody} />
        </div>
      </React.Fragment>
    )
  }
}

Configuration.propTypes = {
  responseBody: PropTypes.string
};

export default connect((state => ({
  responseBody: state.responseBody,
  currentAudience: state.audience
})))(Configuration)