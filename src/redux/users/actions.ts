import { ResponseGenerator } from 'app-models'

import { UsersTypes } from './types'

export const listUsers = () => ({
  type: UsersTypes.GET_USERS_REQUEST,
})

export const listUsersSucceeded = (data: ResponseGenerator) => ({
  type: UsersTypes.GET_USERS_REQUEST_SUCCEEDED,
  data,
})

export const listUsersFailed = (data: string) => ({
  type: UsersTypes.GET_USERS_REQUEST_FAILED,
  error: data,
})
