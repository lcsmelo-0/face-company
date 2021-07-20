import React from 'react'
import { render } from '@testing-library/react'
import { Typography } from 'app-components'

describe('Should render Typography component', () => {
  let subject

  beforeEach(() => {
    subject = render(<Typography>Im a text</Typography>)
  })

  it('is expected to match the snapshot', () => {
    expect(subject).toMatchSnapshot()
  })
})
