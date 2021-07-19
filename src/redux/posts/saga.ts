import * as Effects from 'redux-saga/effects'

import { getUserPostsRequest } from 'app-services'
import { UserPostsList, UserResponse } from 'app-models'

import { CallReturnType } from '../_store/rootSaga'
import { getUserPostsFailed, getUserPostsSucceeded } from './actions'
import { PostsTypes } from './types'

const call: CallReturnType<typeof getUserPostsRequest> = Effects.call
const put = Effects.put
const takeLatest = Effects.takeLatest

export function* fetchUserPosts({ id }) {
  try {
    const response: UserPostsList = yield call(getUserPostsRequest, id)
    yield put(getUserPostsSucceeded(response))
  } catch (error) {
    yield put(getUserPostsFailed(error))
  }
}

export default function* watchfetchUserPosts() {
  yield takeLatest(PostsTypes.GET_USER_POSTS, fetchUserPosts)
}
