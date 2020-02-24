import { AxiosConfig, AxiosResult } from '../types'

export class AxiosError extends Error {
  private code?: string | null
  private config: AxiosConfig
  private request?: any
  private response?: AxiosResult
  private isAxiosError: boolean

  constructor(
    config: AxiosConfig,
    message: string,
    code?: string | null,
    request?: any,
    response?: AxiosResult
  ) {
    super(message)

    this.code = code
    this.config = config
    this.request = request
    this.response = response
    this.isAxiosError = true

    Object.setPrototypeOf(this, AxiosError.prototype)
  }
}

export const createError = (
  config: AxiosConfig,
  message: string,
  code?: string | null,
  request?: any,
  response?: AxiosResult
) => new AxiosError(config, message, code, request, response)
