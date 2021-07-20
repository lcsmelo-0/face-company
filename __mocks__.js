import configureMockStore from 'redux-mock-store'

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  error: false,
}

export const STORE_MOCK = configureMockStore()({
  users: INITIAL_STATE,
  userDetail: INITIAL_STATE,
  posts: { data: [], postData: {}, newPostId: 0, isFetching: false, error: false },
  isVisible: false,
  loader: { isVisible: true },
})
