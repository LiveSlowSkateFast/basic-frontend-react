import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import HeaderAvatarMenu from "./HeaderAvatarMenu";

class HeaderAvatar extends Component {
  constructor() {
    super()
    this.state = {
      anchorEl: null
    }
  }

  handleClick = (e) => {
    this.setState({
      anchorEl: e.currentTarget
    })
  }

  handleClose = () => {
    this.setState({
      anchorEl: null
    })
  }

  render() {
    const { props } = this
    const { anchorEl } = this.state
    return (

      <React.Fragment>
        <span
          className="btn-dro"
          aria-owns={anchorEl ? 'avatar-menu' : null}
          onClick={this.handleClick}>
          <img
            className="img-circle btn-transparent"
            src={jwt_decode(localStorage.getItem('id_token'))['picture']}
            width='32'
            alt='avitar' />
          <i className="icon-budicon-460"></i>
        </span>
        <HeaderAvatarMenu {...props} anchorEl={anchorEl} handleClose={this.handleClose} />
      </React.Fragment>
    )
  }
}

export default HeaderAvatar



