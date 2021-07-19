import { useState } from 'react'

export const useTextField = (initialValue: string | boolean = '') => {
  const [text, setText] = useState(initialValue)
  const [valid, setValid] = useState(initialValue !== '')

  const handleChange = newValue => {
    setText(newValue)
    setValid(newValue !== '')
  }
  return [text, handleChange, valid]
}
