import axios from 'axios'

const host = 'http://localhost:3001'

export default {
  requestLogin: function ({
    commit
  }, params) {
    return axios.post(host + '/requestLogin', params)
      .then(function (res) {
        return res.data
      })
  }
}
