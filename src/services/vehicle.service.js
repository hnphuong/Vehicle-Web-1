import { BaseService } from './base.service'
import { ErrorWrapper, ResponseWrapper } from './util'
import storeHelper from '@/store/helper'

export class VehicleService extends BaseService {
  static async createVehicle (params) {
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('hnp.luxury.vehicle.create-vehicle'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async getVehicleList (params) {
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('hnp.luxury.vehicle.get-vehicle-list'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }
}
