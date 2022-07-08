import { BaseService } from './base.service'
import { ErrorWrapper, ResponseWrapper } from './util'
import storeHelper from '@/store/helper'

export class ConfigService extends BaseService {
  static async getCityList (params = {}) {
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('hnp.luxury.config.city-list'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async getPriceYearRange (params = {}) {
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('hnp.luxury.config.get-data'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }
}
