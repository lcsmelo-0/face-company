import { combineReducers } from 'redux'

import store from '..'
import users from '../users'
import userDetail from '../userDetail'
import posts from '../posts'
import loader from '../loader'

export const rootReducer = combineReducers({
  users,
  userDetail,
  posts,
  loader,
})

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch
