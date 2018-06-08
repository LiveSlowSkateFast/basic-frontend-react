import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Spinner } from "components";


class Profile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null,
    }
  }

  componentWillMount() {
    const { auth } = this.props
    auth.getProfile((err, user) => {
      if (err) {
        console.log(err)
        this.setState({ user: {} })
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
            <code className="hljs actionscript">
              {JSON.stringify(user, null, 2)}
            </code>
          </pre>
        </React.Fragment>
    )
  }
}

Profile.propTypes = {
  auth: PropTypes.object.isRequired
};

export default Profile;