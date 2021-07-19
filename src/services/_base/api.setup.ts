import { Headers } from 'app-models'
import axios from 'axios'

export const buildHeaders = (contentType = 'application/json', accept = 'application/json'): Headers => {
  const headers: Headers = {
    Accept: accept,
  }

  if (contentType && contentType !== '') {
    headers['Content-Type'] = contentType
  }

  return headers
}

export const baseUrl = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/' })
