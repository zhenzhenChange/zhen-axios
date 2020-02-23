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

export interface AxiosConfig {
  url: string
  data?: any
  params?: any
  method?: Methods
}
