import { Typography } from '../Typography'
import styles from './textarea.module.scss'

interface TextAreaProperties {
  updateState
  value
  label?: string
}

export const TextArea: React.FC<TextAreaProperties> = ({ updateState, label, value }: TextAreaProperties) => {
  const handleChange = event => {
    updateState(event.target.value)
  }
  return (
    <div className={styles.textarea__container}>
      <Typography variant="label">{label}</Typography>
      <textarea value={value} onChange={handleChange} className={styles.textarea}></textarea>
    </div>
  )
}
