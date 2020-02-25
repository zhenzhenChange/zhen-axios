export type Methods =
  | 'get'
  | 'put'
  | 'post'
  | 'head'
  | 'patch'
  | 'delete'
  | 'options'
  | 'GET'
  | 'PUT'
  | 'POST'
  | 'HEAD'
  | 'PATCH'
  | 'DELETE'
  | 'OPTIONS'

export interface Axios {
  request<T = any>(config: AxiosConfig): AxiosPromise<T>
  get<T = any>(url: string, config?: AxiosConfig): AxiosPromise<T>
  head<T = any>(url: string, config?: AxiosConfig): AxiosPromise<T>
  delete<T = any>(url: string, config?: AxiosConfig): AxiosPromise<T>
  options<T = any>(url: string, config?: AxiosConfig): AxiosPromise<T>
  put<T = any>(url: string, data?: any, config?: AxiosConfig): AxiosPromise<T>
  post<T = any>(url: string, data?: any, config?: AxiosConfig): AxiosPromise<T>
  patch<T = any>(url: string, data?: any, config?: AxiosConfig): AxiosPromise<T>
}

export interface AxiosInstance extends Axios {
  <T = any>(config: AxiosConfig): AxiosPromise<T>
  <T = any>(url: string, config?: AxiosConfig): AxiosPromise<T>
}

export interface AxiosConfig {
  url?: string
  data?: any
  params?: any
  method?: Methods
  headers?: any
  timeout?: number
  responseType?: XMLHttpRequestResponseType
}

export interface AxiosResult<T = any> {
  data: T
  status: number
  config: AxiosConfig
  headers: any
  request: any
  statusText: string
}

export interface AxiosError extends Error {
  code?: string | null
  config: AxiosConfig
  request?: any
  response?: AxiosResult
  isAxiosError: boolean
}

export interface AxiosPromise<T = any> extends Promise<AxiosResult<T>> {}
