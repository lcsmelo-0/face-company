import { PostsTypes } from './types'

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  error: false,
}

const posts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostsTypes.GET_USER_POSTS:
      return { ...state, error: false, isFetching: true }

    case PostsTypes.GET_USER_POSTS_SUCCEEDED:
      return {
        data: action.data,
        isFetching: false,
        error: false,
      }

    case PostsTypes.GET_USER_POSTS_FAILED:
      return {
        ...state,
        isFetching: false,
        error: true,
      }

    default:
      return state
  }
}

export default posts
