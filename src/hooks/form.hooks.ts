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

export const useEmailField = initialValue => {
  const emailValidationRegex = /^\S+@\S+\.\S+$/
  const [email, setEmail] = useState(initialValue)
  const [valid, setValid] = useState(emailValidationRegex.test(initialValue))

  const handleChange = newValue => {
    setEmail(newValue)
    setValid(emailValidationRegex.test(newValue))
  }
  return [email, handleChange, valid]
}
