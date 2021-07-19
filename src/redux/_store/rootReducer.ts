import { combineReducers } from 'redux'

import store from '..'
import users from '../users'
import userDetail from '../userDetail'
import posts from '../posts'

export const rootReducer = combineReducers({
  users,
  userDetail,
  posts,
})

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch
