import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { STORE_MOCK } from '../../../__mocks__'
import { PostDetailed } from 'app-components'
import { UserPostsList } from 'app-models'

describe('Should render PostDetailed component with correct user response', () => {
  let subject

  const mockPostData: UserPostsList = {
    userId: 1,
    id: 1,
    title: 'My post title',
    body: 'My post content',
  }

  beforeEach(() => {
    subject = render(
      <Provider store={STORE_MOCK}>
        <PostDetailed data={mockPostData} />
      </Provider>,
    )
  })

  it('is expected to match the snapshot', () => {
    expect(subject).toMatchSnapshot()
  })
})
