import { useState } from 'react'
import { UserPostsList } from 'app-models'
import { Button, Modal, Typography } from 'app-components'
import { useRouter } from 'next/router'

import { useAppDispatch } from 'app-hooks'
import { deletePost } from 'app-actions'
import { routes } from 'app-consts'

import styles from './postDetailed.module.scss'

interface PostDetailedProperties {
  data: UserPostsList
}

export const PostDetailed: React.FC<PostDetailedProperties> = ({ data }: PostDetailedProperties) => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false)

  const _deletePost = () => {
    if (data && data.id) {
      dispatch(deletePost(data.id))
      router.push(`/${routes.userList}/${data.userId}`)
      setModalIsVisible(false)
    }
  }

  return (
    <div className={styles.postDetailed}>
      <Typography variant={'h3'}>{data.title}</Typography>
      <Typography>{data.body}</Typography>

      <div className={styles.postDetailed__line}>
        <Button>Edit</Button>
        <Button variant="danger" onClick={() => setModalIsVisible(true)}>
          Delete
        </Button>
      </div>

      {modalIsVisible && (
        <Modal>
          <Typography variant="h4">Are you sure about that?</Typography>
          <div>
            <Button onClick={() => setModalIsVisible(false)}>Cancel</Button>
            <Button onClick={_deletePost}>Confirm</Button>
          </div>
        </Modal>
      )}
    </div>
  )
}
