import React from 'react'
import { render } from '@testing-library/react'
import { STORE_MOCK } from '../../../__mocks__'
import PostDetail from '../../pages/posts/[postId]'
import { Provider } from 'react-redux'

describe('Should render PostDetail page', () => {
  let subject

  beforeEach(() => {
    subject = render(
      <Provider store={STORE_MOCK}>
        <PostDetail />
      </Provider>,
    )
  })

  it('is expected to match the snapshot', () => {
    expect(subject).toMatchSnapshot()
  })
})
