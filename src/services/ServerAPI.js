import axios from 'axios'

export default class ServerAPI {

  constructor() {
    this.accessToken = () => localStorage.getItem('access_token')
    this.domain = 'http://localhost:3333'
  }

  getProfile(cb) {
    axios.get(this.domain + '/profile', {
      headers: { 'Authorization': 'Bearer ' + this.accessToken() },
    }).then(res => cb(null, res.data)).catch(err => cb(err))
  }

  getResourceServers(cb) {
    axios.get(this.domain + '/resource-servers', {
      headers: { 'Authorization': 'Bearer ' + this.accessToken() },
    }).then(res => cb(null, res.data)).catch(err => cb(err))
  }

  getResourceServerScopes(rescourceServerId, cb) {
    axios.get(this.domain + '/resource-servers/' + rescourceServerId + '/scopes', {
      headers: { 'Authorization': 'Bearer ' + this.accessToken() },
    }).then(res => cb(null, res.data)).catch(err => cb(err))
  }

  healthCheck(cb) {
    axios.get(this.domain + '/')
    .then(res => cb(null, res.data)).catch(err => cb(err))
  }

  test(endpoint, cb) {
    axios.get(this.domain + endpoint, {
      headers: { 'Authorization': 'Bearer ' + this.accessToken() },
    }).then(res => cb(null, res.data)).catch(err => cb(err))
  }


}