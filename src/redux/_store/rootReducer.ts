import { combineReducers } from 'redux'
import store from '..'
import users from '../users'
import userDetail from '../userDetail'

export const rootReducer = combineReducers({
  users,
  userDetail,
})

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch
