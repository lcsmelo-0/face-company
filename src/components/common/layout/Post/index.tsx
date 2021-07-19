import { Typography } from 'app-components'
import { UserPostsList } from 'app-models'
import { useRouter } from 'next/router'

import styles from './post.module.scss'

interface PostProperties {
  data: UserPostsList
}

export const Post: React.FC<PostProperties> = ({ data }: PostProperties) => {
  const router = useRouter()

  return (
    <div className={styles.post} onClick={() => router.push(`/posts/${data.id}`)}>
      <Typography>{data.title}</Typography>
    </div>
  )
}
