import { endpoints } from 'app-consts'

import { baseUrl, buildHeaders } from './_base/api.setup'

export const getAllUsers = async () => {
  try {
    const data = await baseUrl.get(endpoints.users, {
      headers: buildHeaders(),
    })
    return Promise.resolve(data.data)
  } catch (err) {
    return Promise.reject(err)
  }
}
