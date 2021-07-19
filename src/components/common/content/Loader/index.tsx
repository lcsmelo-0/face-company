import { useAppSelector } from 'app-hooks'

import styles from './loader.module.scss'

export const Loader: React.FC = () => {
  const { loader } = useAppSelector(state => state)

  return (
    <div className={`${styles.loader} ${loader.isVisible ? styles.loader__show : ''}`}>
      <div className={styles.loader__ring}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}
