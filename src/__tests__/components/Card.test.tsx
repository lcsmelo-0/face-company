import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { STORE_MOCK } from '../../../__mocks__'
import { Card } from 'app-components'
import { UserResponse } from 'app-models'

describe('Should render Card component with correct user response', () => {
  let subject

  const mockUser: UserResponse = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    company: {
      name: 'Romaguera-Crona',
    },
  }

  beforeEach(() => {
    subject = render(
      <Provider store={STORE_MOCK}>
        <Card user={mockUser} />
      </Provider>,
    )
  })

  it('is expected to match the snapshot', () => {
    expect(subject).toMatchSnapshot()
  })
})
