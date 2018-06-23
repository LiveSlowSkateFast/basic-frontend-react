import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Spinner, Code } from "components";
import { ServerAPI } from 'services'

const api = new ServerAPI()

class Profile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null,
    }
  }

  componentWillMount() {
    api.getProfile((err, user) => {
      if (err) {
        console.log(err)
        this.setState({ user: { error: err } })
      } else {
        this.setState({ user: user })
      }
    })
  }

  render() {
    const { user } = this.state
    return (
      user === null ? <Spinner size="lg" logo /> :
        <React.Fragment>
          <h3> User Profile </h3>
          <pre className="hl">
            <Code code={JSON.stringify(user, null, 2)} />
          </pre>
        </React.Fragment>
    )
  }
}

Profile.propTypes = {
  auth: PropTypes.object.isRequired
};

export default Profile;