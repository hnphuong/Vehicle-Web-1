import { BaseService } from './base.service'
import { ErrorWrapper, ResponseWrapper } from './util'
import { GET_ENDPOINT_URL, TOKEN_INSIDE } from '../.env'
import axios from 'axios'

export class EndpointService extends BaseService {
  static async getConfig () {
    try {
      // const response = await this.request({ auth: true }).post(GET_ENDPOINT_URL)
      const response = await axios.post(GET_ENDPOINT_URL, {}, {
        headers: {
          Authorization: 'Bearer ' + TOKEN_INSIDE
        }
      })
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }
}
