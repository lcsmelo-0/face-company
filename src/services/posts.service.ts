import { endpoints } from 'app-consts'
import { baseUrl, buildHeaders } from './_base/api.setup'

export const getUserPostsRequest = async (id: string | string[]) => {
  try {
    const data = await baseUrl.get(`${endpoints.users}/${id}/${endpoints.posts}`, {
      headers: buildHeaders(),
    })
    return Promise.resolve(data.data)
  } catch (error) {
    return Promise.reject(error)
  }
}
