import { useCallback, useEffect } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { getPostDetail } from 'app-actions'
import { PostDetailed } from 'app-components'
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
    if (posts && posts.postData) {
      return <PostDetailed data={posts.postData} />
    }
  }, [posts])

  return <section className={styles.postDetail}>{_handlePosts()}</section>
}

export default PostDetail
