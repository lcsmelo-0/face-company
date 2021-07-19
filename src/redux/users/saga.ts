import * as Effects from 'redux-saga/effects'

import { getAllUsers } from 'app-services'
import { ResponseGenerator } from 'app-models'

import { CallReturnType } from '../_store/rootSaga'
import { listUsersFailed, listUsersSucceeded } from './actions'
import { UsersTypes } from './types'

const call: CallReturnType<typeof getAllUsers> = Effects.call
const put = Effects.put
const takeLatest = Effects.takeLatest

export function* fetchUsers() {
  try {
    const response: ResponseGenerator = yield call(getAllUsers)
    yield put(listUsersSucceeded(response))
  } catch (error) {
    yield put(listUsersFailed(error))
  }
}

export default function* watchFetchUsers() {
  yield takeLatest(UsersTypes.GET_USERS_REQUEST, fetchUsers)
}
