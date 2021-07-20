import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { Button, TextArea, Typography } from 'app-components'
import { useAppDispatch, useAppSelector, useTextField } from 'app-hooks'
import { hasEmptyProperties, loader } from 'app-utils'
import { createPost } from 'app-actions'

import styles from './newPost.module.scss'

const NewPost: NextPage = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const [title, setTitle, validTitle] = useTextField('')
  const [body, setBody, validBody] = useTextField('')
  const [displayError, setDisplayError] = useState<boolean>(false)

  const { posts } = useAppSelector(state => state)
  const queryId = router && router.query && router.query.userId

  const _handlePostSubmit = () => {
    const payload = {
      title: title,
      body: body,
      userId: queryId,
    }

    if (hasEmptyProperties(payload) || !validTitle || !validBody) {
      setDisplayError(true)
      return
    }

    dispatch(createPost(payload))
    setDisplayError(false)
  }

  useEffect(() => {
    loader.control(posts.isFetching)

    if (posts && posts.newPostId && posts.newPostId !== 0) {
      router.push(`/posts/${posts.newPostId}`)
    }
  }, [posts])

  return (
    <section className={styles.newPost}>
      <Typography variant="h2">Create a new post</Typography>

      <TextArea label={'Title'} value={title} updateState={setTitle} />
      <TextArea label={'Body'} value={body} updateState={setBody} />

      <Button onClick={_handlePostSubmit}>Create</Button>

      <Typography className="error" showError={displayError}>
        Please, Enter valid values ​​for title and body
      </Typography>
    </section>
  )
}

export default NewPost
