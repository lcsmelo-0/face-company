import styles from './input.module.scss'

interface InputProperties {
  value: string | number
  onChange: (event) => any
  placeholder?: string
  type?: string
}
export const Input: React.FC<InputProperties> = ({
  value,
  onChange,
  placeholder = 'Enter a email to continue',
  type = 'email',
}: InputProperties) => {
  const handleChange = e => {
    onChange(e.target.value.toLowerCase())
  }

  return <input type={type} value={value} onChange={handleChange} placeholder={placeholder} className={styles.input} />
}
