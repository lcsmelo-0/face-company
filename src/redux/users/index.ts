import { UsersTypes } from './types'

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  error: false,
}

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersTypes.GET_USERS_REQUEST:
      return { ...state, error: false, isFetching: true }

    case UsersTypes.GET_USERS_REQUEST_SUCCEEDED:
      return {
        data: action.data,
        isFetching: false,
        error: false,
      }

    case UsersTypes.GET_USERS_REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        error: true,
      }

    default:
      return state
  }
}

export default users
