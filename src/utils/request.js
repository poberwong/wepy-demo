import wepy from 'wepy'

export const baseRequest = object => (
  wepy.request(Object.assign({}, object, {
    header: {
      ...object.header,
      'Authorization': 'Bearer ' + wepy.getStorageSync('token')
    }
  })).then(res => {
    if (res.statusCode < 200 || res.statusCode >= 300) {
      wepy.showToast({
        title: res.data.message,
        icon: 'none'
      })
      if (res.statusCode === 401) {
        wepy.$instance.globalData.unauthorization = true
        // redirect to login
        setTimeout(() => {
          wepy.redirectTo({
            url: '/pages/login'
          })
        }, 1000)
      } else {
        return Promise.reject(res.data)
      }
    }
    return Promise.resolve(res.data)
  }).catch(err => Promise.reject(err.data))
)

export const post = obj => {
  return baseRequest({method: 'POST', ...obj})
}

export const get = obj => {
  return baseRequest({method: 'GET', ...obj})
}

export const put = obj => {
  return baseRequest({method: 'PUT', ...obj})
}

export default {
  post, get, put
}
