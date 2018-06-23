import axios from 'axios'

export default class ServerAPI {

  constructor() {
    this.accessToken = () => localStorage.getItem('access_token')
    this.domain = 'http://localhost:3333'
  }

  getProfile(cb) {
    axios.get(this.domain + '/profile', {
      headers: { 'Authorization': 'Bearer ' + this.accessToken() },
      json: true
    }).then(res => cb(null, res.data)).catch(err => cb(err))
  }

  healthCheck(cb) {
    axios.get(this.domain + '/')
    .then(res => cb(null, res.data)).catch(err => cb(err))
  }

}