/**
 * HTTP request layer
 * if auth is required return patched axios instance(with access token in headers)
 * else return clear axios instance
 */

import axios from 'axios'
import store from '@/store/index'
import { TOKEN_INSIDE } from '../.env'

import { AuthService } from '@/services/auth.service'

export class Http {
  constructor (status) {
    this.isAuth = status && status.auth ? status.auth : false
    this.instance = axios.create()
    return this.init()
  }

  init () {
    if (this.isAuth) {
      const token = 'Bearer ' + TOKEN_INSIDE
      this.instance.interceptors.request.use(request => {
        if (AuthService.getBearer()) request.headers.Authorization = AuthService.getBearer()
        else request.headers.Authorization = token
        // if access token expired and refreshToken is exist >> go to API and get new access token
        if (AuthService.isAccessTokenExpired() && AuthService.hasRefreshToken()) {
          return AuthService.debounceRefreshTokens()
            .then(response => {
              if (response.data.accessToken) AuthService.setBearer(response.data.accessToken)
              else AuthService.setBearer(token)
              request.headers.authorization = AuthService.getBearer()
              return request
            }).catch(error => Promise.reject(error))
        } else {
          return request
        }
      }, error => {
        return Promise.reject(error)
      })
    }
    this.instance.interceptors.response.use(
      null,
      error => {
        if (
          error.response &&
          error.response.status &&
          [403, 405].includes(error.response.status)
        ) {
          // logout
          store.dispatch('user/clear')
          store.dispatch('auth/logout')
        }
        return Promise.reject(error)
      }
    )
    return this.instance
  }
}
