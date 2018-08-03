import React, { Component } from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Code, TabBox } from 'components'
import ScopesList from "./ScopesList";
import ResponseTypeList from "./ResponseTypeList";
import SendRequestButton from "./SendRequestButton";
import AudienceSelect from "./AudienceSelect";
import { ServerAPI } from 'services'
import Spinner from "../../components/Spinner";
import jwt_decode from "jwt-decode";

const api = new ServerAPI()
const oidc_scopes = [{ value: 'openid' }, { value: 'profile' }, { value: 'email' }, { value: 'address' }, { value: 'phone' },]


class Configuration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentAudience: props.currentAudience,
      availableResources: [],
      availableScopes: [],
    }
  }

  handleScopesResponse = (err, res) => {
    err ? console.log(err) :
      this.setState({
        availableScopes: res ? oidc_scopes.concat(res) : oidc_scopes
      })
  }

  onAudienceUpdate = audienceId => {
    this.setState({ availableScopes: [] })
    api.getResourceServerScopes(audienceId, (err, res) =>
      this.handleScopesResponse(err, res))
  }

  componentWillMount() {
    api.getResourceServers((err, res) =>
      err ? console.log(err) : (
        this.setState({ availableResources: res }),
        api.getResourceServerScopes(this.state.availableResources.find(res =>
          res.audience === this.state.currentAudience).id, (err, res) =>
            this.handleScopesResponse(err, res))
      ))
  }

  createTabs(responseBody) {
    const resObj = JSON.parse(responseBody)
    const tabs = [{ isActive: true, name: "Raw", id: "1", content: <Code code={responseBody} /> }]
    if (resObj.idToken) {
      tabs.push({
        name: "Id Token", id: "2",
        content: <Code code={JSON.stringify(jwt_decode(resObj.idToken), null, 2)} />
      })
    }
    if (resObj.accessToken) {
      tabs.push({
        name: "Access Token", id: "3",
        content: <Code code={JSON.stringify(jwt_decode(resObj.accessToken), null, 2)} />
      })
    }
    return tabs
  }

  render() {
    const { responseBody } = this.props
    // alert(responseBody)
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
        <div className="col-xs-12 wrapper">
          <h5> Response Types </h5>
          <ResponseTypeList />
        </div>
        <div className="col-xs-12 wrapper">
          <h3> View Response </h3>
          <TabBox tabs={this.createTabs(responseBody)} />
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