import { Dispatch, SetStateAction } from 'react'
import styles from './textarea.module.scss'

interface TextAreaProperties {
  updateState
  children: React.ReactNode
  value
}

export const TextArea: React.FC<TextAreaProperties> = ({ children, updateState, value }: TextAreaProperties) => {
  const handleChange = event => {
    updateState(event.target.value)
  }
  return (
    <textarea value={value} onChange={handleChange} className={styles.textarea}>
      {children}
    </textarea>
  )
}
