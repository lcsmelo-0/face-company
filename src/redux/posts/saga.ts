import * as Effects from 'redux-saga/effects'

import {
  createPostRequest,
  deletePostRequest,
  editPostRequest,
  getPostDetailRequest,
  getUserPostsRequest,
} from 'app-services'
import { UserPostsList } from 'app-models'

import { CallReturnType } from '../_store/rootSaga'
import {
  createPostFailed,
  createPostSucceeded,
  deletePostFailed,
  deletePostSucceeded,
  editPostFailed,
  editPostSucceeded,
  getPostDetailFailed,
  getPostDetailSucceeded,
  getUserPostsFailed,
  getUserPostsSucceeded,
} from './actions'
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

export function* fetchPostDetail({ id }) {
  try {
    const response = yield call(getPostDetailRequest, id)
    yield put(getPostDetailSucceeded(response))
  } catch (error) {
    yield put(getPostDetailFailed(error))
  }
}

export function* fetchDeletePost({ id }) {
  try {
    const response = yield call(deletePostRequest, id)
    yield put(deletePostSucceeded(response))
  } catch (error) {
    yield put(deletePostFailed(error))
  }
}

export function* fetchEditPost({ id, body }) {
  try {
    const response = yield call(editPostRequest, id, body)
    yield put(editPostSucceeded(response))
  } catch (error) {
    yield put(editPostFailed(error))
  }
}

export function* fetchCreatePost({ body }) {
  try {
    const response = yield call(createPostRequest, body)
    yield put(createPostSucceeded(response))
  } catch (error) {
    yield put(createPostFailed(error))
  }
}

export function* watchfetchUserPosts() {
  yield takeLatest(PostsTypes.GET_USER_POSTS, fetchUserPosts)
}

export function* watchFetchPostDetail() {
  yield takeLatest(PostsTypes.GET_POST_DETAIL, fetchPostDetail)
}

export function* watchFetchDeletePost() {
  yield takeLatest(PostsTypes.DELETE_POST, fetchDeletePost)
}

export function* watchFetchEditPost() {
  yield takeLatest(PostsTypes.EDIT_POST, fetchEditPost)
}

export function* watchFetchCreatePost() {
  yield takeLatest(PostsTypes.CREATE_POST, fetchCreatePost)
}
