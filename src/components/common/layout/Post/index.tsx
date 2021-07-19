import { Typography } from 'app-components'
import { UserPostsList } from 'app-models'

import styles from './post.module.scss'

interface PostProperties {
  data: UserPostsList
}

export const Post: React.FC<PostProperties> = ({ data }: PostProperties) => {
  return (
    <div className={styles.post}>
      <Typography>{data.title}</Typography>
    </div>
  )
}
