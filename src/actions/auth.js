import config from '../utils/config'
import request from '../utils/request'
import wepy from 'wepy'

export function login (data) {
  return request.post({
    data,
    url: `${config.backend}/auth`
  }).then(res => {
    if (res.token) {
      wepy.setStorageSync('token', res.token)
    }
  })
}

export function getUserInfo() {
  return request.get({url: `${config.backend}/users`})
}
