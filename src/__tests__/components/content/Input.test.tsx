import React from 'react'
import { render } from '@testing-library/react'
import { Input } from 'app-components'

describe('Should render Input component', () => {
  let subject

  beforeEach(() => {
    subject = render(<Input onChange={() => {}} placeholder={'My input component'} value={'value'} />)
  })

  it('is expected to match the snapshot', () => {
    expect(subject).toMatchSnapshot()
  })
})
