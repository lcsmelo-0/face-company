import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { UserPostsList } from 'app-models'
import { Button, Modal, TextArea, Typography } from 'app-components'
import { useAppDispatch, useTextField } from 'app-hooks'
import { deletePost, editPost } from 'app-actions'

import styles from './postDetailed.module.scss'

interface PostDetailedProperties {
  data: UserPostsList
}

export const PostDetailed: React.FC<PostDetailedProperties> = ({ data }: PostDetailedProperties) => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false)
  const [editMode, setEditMode] = useState<boolean>(false)
  const [displayError, setDisplayError] = useState<boolean>(false)

  const [title, setTitle, validTitle] = useTextField('')
  const [body, setBody, validBody] = useTextField('')

  useEffect(() => {
    if (data && data.title) {
      setTitle(data.title)
      setBody(data.body)
    }
  }, [data])

  const _deletePost = () => {
    if (data && data.id) {
      dispatch(deletePost(data.id))
      router.push(`/users/${data.userId}`)
      setModalIsVisible(false)
    }
  }

  const _editPost = () => {
    if (validBody && validTitle) {
      const payload = {
        title: title,
        body: body,
      }

      dispatch(editPost(data.id, payload))
      setEditMode(false)
      setDisplayError(false)
      return
    }

    setDisplayError(true)
  }

  return (
    <div className={styles.postDetailed}>
      {editMode ? (
        <TextArea value={title} updateState={setTitle}>
          {title}
        </TextArea>
      ) : (
        <Typography variant="h3">{data.title}</Typography>
      )}

      {editMode ? (
        <TextArea value={body} updateState={setBody}>
          {body}
        </TextArea>
      ) : (
        <Typography>{data.body}</Typography>
      )}

      <div className={styles.postDetailed__line}>
        {editMode ? (
          <Button onClick={_editPost}>Save</Button>
        ) : (
          <>
            <Button onClick={() => setEditMode(true)}>Edit</Button>
            <Button variant="danger" onClick={() => setModalIsVisible(true)}>
              Delete
            </Button>
          </>
        )}
      </div>

      <Typography className="error" showError={displayError}>
        Please, Enter valid values ​​for title and body
      </Typography>

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
