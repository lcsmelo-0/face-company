import { UserDetailTypes } from './types'

const INITIAL_STATE = {
  data: {},
  isFetching: false,
  error: false,
}

const userDetail = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserDetailTypes.GET_USER_DETAIL_REQUEST:
      return { ...state, error: false, isFetching: true }

    case UserDetailTypes.GET_USER_DETAIL_REQUEST_SUCCEEDED:
      return {
        data: action.data,
        isFetching: false,
        error: false,
      }

    case UserDetailTypes.GET_USER_DETAIL_REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        error: true,
      }

    default:
      return state
  }
}

export default userDetail
