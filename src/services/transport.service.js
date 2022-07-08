import { BaseService } from './base.service'
import { ErrorWrapper, ResponseWrapper } from './util'
import storeHelper from '@/store/helper'

export class TransportService extends BaseService {
  static async getListTransportHeader (params) {
    try {
      const response = await this.request({ auth: true }).post(params.endpoint, params.data)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async getListTransport (params) {
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('hnp.luxury.transport.get-list-transport'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async getDetailTransport (params) {
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('hnp.luxury.vehicle.get-vehicle-detail'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async actionTransport (params) {
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('hnp.luxury.transport.crud-transport'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async createTransport (params) {
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('hnp.luxury.transport.create-transport'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      // throw new ErrorWrapper(error, message)
      return error.response.data
    }
  }

  static async getDataTransport (params) {
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('hnp.luxury.transport.get-transport'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      // throw new ErrorWrapper(error, message)
      return error.response.data
    }
  }
}
