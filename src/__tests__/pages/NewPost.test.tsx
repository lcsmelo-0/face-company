import React from 'react'
import { render } from '@testing-library/react'
import { STORE_MOCK } from '../../../__mocks__'
import NewPost from '../../pages/users/[userId]/new-post'
import { Provider } from 'react-redux'

describe('Should render NewPost page', () => {
  let subject

  beforeEach(() => {
    subject = render(
      <Provider store={STORE_MOCK}>
        <NewPost />
      </Provider>,
    )
  })

  it('is expected to match the snapshot', () => {
    expect(subject).toMatchSnapshot()
  })
})
