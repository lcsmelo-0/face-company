import React from 'react'
import { render } from '@testing-library/react'
import { Loader } from 'app-components'
import { Provider } from 'react-redux'
import { STORE_MOCK } from '__mocks__'

describe('Should render Loader component', () => {
  let subject

  beforeEach(() => {
    subject = render(
      <Provider store={STORE_MOCK}>
        <Loader />
      </Provider>,
    )
  })

  it('is expected to match the snapshot', () => {
    expect(subject).toMatchSnapshot()
  })
})
