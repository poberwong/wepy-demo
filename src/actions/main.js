import config from '../utils/config'
import request from '../utils/request'

export function getProjects() {
  return request.get({url: `${config.backend}/projects`})
}
