import { useCallback, useEffect } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { getPostDetail } from 'app-actions'
import { PostDetailed, Typography } from 'app-components'
import { useAppDispatch, useAppSelector } from 'app-hooks'
import { loader } from 'app-utils'

import styles from './postDetail.module.scss'

const PostDetail: NextPage = () => {
  const dispatch = useAppDispatch()
  const { posts } = useAppSelector(state => state)
  const router = useRouter()

  const id = router && router.query && router.query.postId

  useEffect(() => {
    if (id) {
      dispatch(getPostDetail(id))
    }
  }, [router])

  useEffect(() => {
    loader.control(posts.isFetching)
  }, [posts])

  const _handlePosts = useCallback(() => {
    if (posts && posts.postData && posts.postData.title) {
      return <PostDetailed data={posts.postData} />
    }

    return <Typography>Could not load this post, please try again</Typography>
  }, [posts])

  return <section className={styles.postDetail}>{_handlePosts()}</section>
}

export default PostDetail
