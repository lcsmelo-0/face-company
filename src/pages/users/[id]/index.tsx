import { useEffect } from 'react'
import { NextPage } from 'next'
import { NextRouter, useRouter } from 'next/router'

import { getUserDetail } from 'app-actions'
import { useAppDispatch } from 'app-hooks'

const UserDetail: NextPage = () => {
  const router: NextRouter = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (router && router.query && router.query.id) {
      dispatch(getUserDetail(router.query.id))
    }
  }, [router])

  return <section>user detail</section>
}

export default UserDetail
