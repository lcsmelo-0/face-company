import * as Effects from 'redux-saga/effects'

import { getUserDetailRequest } from 'app-services'
import { UserResponse } from 'app-models'

import { CallReturnType } from '../_store/rootSaga'
import { getUserDetailFailed, getUserDetailSucceeded } from './actions'
import { UserDetailTypes } from './types'

const call: CallReturnType<typeof getUserDetailRequest> = Effects.call
const put = Effects.put
const takeLatest = Effects.takeLatest

export function* fetchUserDetail({ id }) {
  try {
    const response: UserResponse = yield call(getUserDetailRequest, id)
    yield put(getUserDetailSucceeded(response))
  } catch (error) {
    yield put(getUserDetailFailed(error))
  }
}

export default function* watchfetchUserDetail() {
  yield takeLatest(UserDetailTypes.GET_USER_DETAIL_REQUEST, fetchUserDetail)
}
