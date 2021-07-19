import { useEffect } from 'react'
import { NextPage } from 'next'
import { NextRouter, useRouter } from 'next/router'

import { getUserDetail, getUserPosts } from 'app-actions'
import { useAppDispatch, useAppSelector } from 'app-hooks'

const UserDetail: NextPage = () => {
  const router: NextRouter = useRouter()
  const dispatch = useAppDispatch()
  const { userDetail } = useAppSelector(state => state)

  const id = router && router.query && router.query.id

  useEffect(() => {
    if (id) {
      dispatch(getUserDetail(id))
    }
  }, [router])

  useEffect(() => {
    if (id && userDetail.data.id == id) {
      dispatch(getUserPosts(id))
    }
  }, [router, userDetail])

  return <section>user detail</section>
}

export default UserDetail
