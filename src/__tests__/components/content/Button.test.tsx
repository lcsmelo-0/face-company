import React from 'react'
import { render } from '@testing-library/react'
import { Button } from 'app-components'

describe('Should render Button component', () => {
  let subject

  beforeEach(() => {
    subject = render(<Button>My App Button</Button>)
  })

  it('is expected to match the snapshot', () => {
    expect(subject).toMatchSnapshot()
  })
})
