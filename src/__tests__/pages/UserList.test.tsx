import React from 'react'
import { render } from '@testing-library/react'
import { STORE_MOCK } from '../../../__mocks__'
import UserList from '../../pages/users'
import { Provider } from 'react-redux'

describe('Should render UserList page', () => {
  let subject

  beforeEach(() => {
    subject = render(
      <Provider store={STORE_MOCK}>
        <UserList />
      </Provider>,
    )
  })

  it('is expected to match the snapshot', () => {
    expect(subject).toMatchSnapshot()
  })
})
