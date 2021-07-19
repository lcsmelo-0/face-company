import { Button, Typography } from 'app-components'
import { routes } from 'app-consts'
import { UserResponse } from 'app-models'

import styles from './card.module.scss'

interface CardProperties {
  user: UserResponse
}

export const Card: React.FC<CardProperties> = ({ user }: CardProperties) => {
  return (
    <div className={styles.card}>
      <Typography>{user?.name}</Typography>
      <Button href={`${routes.userList}/${user.id}`}>View profile</Button>
    </div>
  )
}
