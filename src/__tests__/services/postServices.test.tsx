import { runSaga } from '@redux-saga/core'
import axios from 'axios'
import {
  fetchCreatePost,
  fetchDeletePost,
  fetchEditPost,
  fetchPostDetail,
  fetchUserPosts,
} from '../../redux/posts/saga'
import * as api from '../../services/posts.service'

jest.mock('axios')

describe('Post service tests', () => {
  let dispatched
  let id = { id: 1 }
  beforeEach(() => {
    dispatched = []
  })

  it('Should call getUserPostsRequest actions', async () => {
    const request = jest.spyOn(api, 'getUserPostsRequest').mockImplementation(() => Promise.resolve())

    runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      fetchUserPosts,
      id,
    )
    expect(request).toHaveBeenCalledTimes(1)
    request.mockClear()
  })

  it('Should call getPostDetailRequest actions', async () => {
    const request = jest.spyOn(api, 'getPostDetailRequest').mockImplementation(() => Promise.resolve())

    runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      fetchPostDetail,
      id,
    )
    expect(request).toHaveBeenCalledTimes(1)
    request.mockClear()
  })

  it('Should call deletePostRequest actions', async () => {
    const request = jest.spyOn(api, 'deletePostRequest').mockImplementation(() => Promise.resolve())

    runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      fetchDeletePost,
      id,
    )
    expect(request).toHaveBeenCalledTimes(1)
    request.mockClear()
  })

  it('Should call editPostRequest actions', async () => {
    const request = jest.spyOn(api, 'editPostRequest').mockImplementation(() => Promise.resolve())

    runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      fetchEditPost,
      {
        ...id,
        body: {
          title: 'Mock title',
          body: 'Mock body',
        },
      },
    )
    expect(request).toHaveBeenCalledTimes(1)
    request.mockClear()
  })
  it('Should call createPostRequest actions', async () => {
    const request = jest.spyOn(api, 'createPostRequest').mockImplementation(() => Promise.resolve())

    runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      fetchCreatePost,
      {
        body: {
          title: 'Mock title',
          body: 'Mock body',
        },
      },
    )
    expect(request).toHaveBeenCalledTimes(1)
    request.mockClear()
  })

  it('fetches successfully data from an API', async () => {
    const data = [
      {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      },
    ]

    axios.get.mockImplementationOnce(() => Promise.resolve(data))
    await expect(api.getUserPostsRequest('1'))
  })
})
