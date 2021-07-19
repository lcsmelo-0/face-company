import { combineReducers } from 'redux'
import store from '..'
import users from '../users'

export const rootReducer = combineReducers({
  users,
})

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch
