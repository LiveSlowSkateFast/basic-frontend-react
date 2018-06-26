import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Spinner, Code } from "components"
import { ServerAPI } from 'services'

const api = new ServerAPI()

class TestEndpoint extends Component {

  constructor(props) {
    super(props)
    this.state = {
      response: null,
    }
  }

  componentWillMount() {
    api.test('/resource-servers/5b060364ea5cb320fe27471b/scopes', (err, response) =>
      this.setState({ response: err || response })
    )
  }

  render() {
    const { response } = this.state
    return (
      response === null ? <Spinner size="lg" logo /> :
        <React.Fragment>
          <h3> API Response </h3>
          <pre className="hl">
            <Code code={JSON.stringify(response, null, 2)} />
          </pre>
        </React.Fragment>
    )
  }
}

TestEndpoint.propTypes = {
  auth: PropTypes.object.isRequired
};

export default TestEndpoint