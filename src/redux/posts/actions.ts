import { UserPostsList } from 'app-models'

import { PostsTypes } from './types'

export const getUserPosts = (id: string | string[]) => ({
  type: PostsTypes.GET_USER_POSTS,
  id,
})

export const getUserPostsSucceeded = (data: UserPostsList) => ({
  type: PostsTypes.GET_USER_POSTS_SUCCEEDED,
  data,
})

export const getUserPostsFailed = (data: string) => ({
  type: PostsTypes.GET_USER_POSTS_FAILED,
  error: data,
})
