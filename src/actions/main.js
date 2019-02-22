import config from '../utils/config'
import request from '../utils/request'

export function getProjects () {
  return request.get({ url: `${config.backend}/projects` })
}

export function loadReportList (queryObj = {}) {
  const baseQuery = { offset: 0, limit: 10 }
  const query = {...baseQuery, ...queryObj}
  let str = Object.keys(query).map(key => key + '=' + query[key]).join('&')
  return request.get({ url: config.backend + '/reports?' + str })
}
