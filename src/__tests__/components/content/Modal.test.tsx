import React from 'react'
import { render } from '@testing-library/react'
import { Modal, Typography } from 'app-components'

describe('Should render Modal component', () => {
  let subject

  beforeEach(() => {
    subject = render(
      <Modal>
        <Typography>Im a modal</Typography>
      </Modal>,
    )
  })

  it('is expected to match the snapshot', () => {
    expect(subject).toMatchSnapshot()
  })
})
