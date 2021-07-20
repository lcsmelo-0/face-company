import React from 'react'
import { render } from '@testing-library/react'
import { Button } from 'app-components'

describe('Should render Button component', () => {
  it('is expected to match the snapshot', () => {
    let subject = render(<Button onClick={() => console.log('click')}>My primary Button</Button>)
    expect(subject).toMatchSnapshot()
  })

  it('is expected to match the button with link variant snapshot', () => {
    let subject = render(<Button variant='link' href='/'>My link Button</Button>)
    expect(subject).toMatchSnapshot()
  })

  it('is expected to match the button with danger variant snapshot', () => {
    let subject = render(<Button variant='danger'>My danger Button</Button>)
    expect(subject).toMatchSnapshot()
  })
})
