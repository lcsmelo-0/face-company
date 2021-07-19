import { PostsTypes } from './types'

const INITIAL_STATE = {
  data: [],
  postData: {},
  isFetching: false,
  error: false,
}

const posts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostsTypes.GET_USER_POSTS:
    case PostsTypes.GET_POST_DETAIL:
    case PostsTypes.DELETE_POST:
      return { ...state, error: false, isFetching: true }

    case PostsTypes.GET_USER_POSTS_SUCCEEDED:
      return {
        data: action.data,
        isFetching: false,
        error: false,
      }

    case PostsTypes.GET_POST_DETAIL_SUCCEEDED:
      return {
        postData: action.data,
        isFetching: false,
        error: false,
      }

    case PostsTypes.DELETE_POST_SUCCEEDED:
      return {
        postData: {},
        isFetching: false,
        error: false,
      }

    case PostsTypes.GET_USER_POSTS_FAILED:
    case PostsTypes.GET_POST_DETAIL_FAILED:
    case PostsTypes.DELETE_POST_FAILED:
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
