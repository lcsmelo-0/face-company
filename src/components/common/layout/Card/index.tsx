import { Button, Typography } from 'app-components'
import { UserResponse } from 'app-models'

import styles from './card.module.scss'

interface CardProperties {
  user: UserResponse
}

export const Card: React.FC<CardProperties> = ({ user }: CardProperties) => {
  return (
    <div className={styles.card}>
      <Typography>{user?.name}</Typography>
      <Button>View profile</Button>
    </div>
  )
}
