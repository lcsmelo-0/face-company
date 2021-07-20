import React from 'react'
import { render } from '@testing-library/react'
import { STORE_MOCK } from '../../../__mocks__'
import UserDetail from '../../pages/users/[userId]'
import { Provider } from 'react-redux'

describe('Should render UserDetail page', () => {
  let subject

  beforeEach(() => {
    subject = render(
      <Provider store={STORE_MOCK}>
        <UserDetail />
      </Provider>,
    )
  })

  it('is expected to match the snapshot', () => {
    expect(subject).toMatchSnapshot()
  })
})
