import { all, Effect, SimpleEffect } from 'redux-saga/effects'

import watchfetchUserDetail from '../userDetail/saga'
import watchFetchUsers from '../users/saga'
import {
  watchfetchUserPosts,
  watchFetchPostDetail,
  watchFetchDeletePost,
  watchFetchEditPost,
  watchFetchCreatePost,
} from '../posts/saga'

type StripEffects<T> = T extends IterableIterator<infer E>
  ? E extends Effect | SimpleEffect<any, any>
    ? never
    : E
  : never

type DecideReturn<T> = T extends Promise<infer R> ? R : T extends IterableIterator<any> ? StripEffects<T> : T

export type CallReturnType<T extends (...args: any[]) => any> = DecideReturn<ReturnType<T>>

export default function* rootSaga() {
  return yield all([
    watchFetchUsers(),
    watchfetchUserDetail(),
    watchfetchUserPosts(),
    watchFetchPostDetail(),
    watchFetchDeletePost(),
    watchFetchEditPost(),
    watchFetchCreatePost(),
  ])
}
