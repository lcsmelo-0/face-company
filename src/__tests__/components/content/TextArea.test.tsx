import React from 'react'
import { render } from '@testing-library/react'
import { TextArea } from 'app-components'

describe('Should render Text Area component', () => {
  let subject

  beforeEach(() => {
    subject = render(<TextArea updateState={() => {}} value={'Text area'} label={'Title'} />)
  })

  it('is expected to match the snapshot', () => {
    expect(subject).toMatchSnapshot()
  })
})
