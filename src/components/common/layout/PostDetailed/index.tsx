import { UserPostsList } from 'app-models'
import { Button, Typography } from 'app-components'

import styles from './postDetailed.module.scss'

interface PostDetailedProperties {
  data: UserPostsList
}

export const PostDetailed: React.FC<PostDetailedProperties> = ({ data }: PostDetailedProperties) => {
  return (
    <div className={styles.postDetailed}>
      <Typography variant={'h3'}>{data.title}</Typography>
      <Typography>{data.body}</Typography>

      <div className={styles.postDetailed__line}>
        <Button>Edit</Button>
        <Button variant="danger">Delete</Button>
      </div>
    </div>
  )
}
