import { UserResponse } from 'app-models'
import { UserDetailTypes } from './types'

export const getUserDetail = (id: string | string[]) => ({
  type: UserDetailTypes.GET_USER_DETAIL_REQUEST,
  id,
})

export const getUserDetailSucceeded = (data: UserResponse) => ({
  type: UserDetailTypes.GET_USER_DETAIL_REQUEST_SUCCEEDED,
  data,
})

export const getUserDetailFailed = (data: string) => ({
  type: UserDetailTypes.GET_USER_DETAIL_REQUEST_FAILED,
  error: data,
})
