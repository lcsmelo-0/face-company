import { useEffect } from 'react'
import { NextPage } from 'next'
import { NextRouter, useRouter } from 'next/router'

import { getUserDetail, getUserPosts } from 'app-actions'
import { Post, Typography } from 'app-components'
import { useAppDispatch, useAppSelector } from 'app-hooks'

import styles from './userDetail.module.scss'
import { UserPostsList } from 'app-models'

const UserDetail: NextPage = () => {
  const router: NextRouter = useRouter()
  const dispatch = useAppDispatch()
  const { userDetail, posts } = useAppSelector(state => state)

  const queryId = router && router.query && router.query.id

  useEffect(() => {
    if (queryId) {
      dispatch(getUserDetail(queryId))
    }
  }, [router])

  useEffect(() => {
    if (queryId && userDetail.data.id == queryId) {
      dispatch(getUserPosts(queryId))
    }
  }, [router, userDetail])

  const _handleUserPosts = () => {
    if (posts && posts.data && posts.data.length) {
      const reversedPosts = posts.data.reverse()
      return reversedPosts.map((post: UserPostsList, i: KeyType) => <Post key={i}>{post.body}</Post>)
    }
  }

  return (
    <section className={styles.userDetail}>
      {userDetail.data.name && (
        <>
          <Typography variant="h3">
            Welcome to {userDetail.data.name} page ({userDetail.data.username})
          </Typography>

          <Typography>
            {userDetail.data.email} | {userDetail.data.website}
          </Typography>
        </>
      )}

      {_handleUserPosts()}
    </section>
  )
}

export default UserDetail
