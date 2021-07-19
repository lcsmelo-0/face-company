import styles from './modal.module.scss'

interface ModalProperties {
  children: React.ReactNode
}

export const Modal: React.FC<ModalProperties> = ({ children }: ModalProperties) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>{children}</div>
    </div>
  )
}
