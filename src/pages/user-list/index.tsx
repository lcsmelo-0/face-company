import { useEffect } from 'react'
import { NextPage } from 'next'

import { listUsers } from 'app-actions'
import { useAppDispatch } from 'app-hooks'

const UserList: NextPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(listUsers())
  }, [])
  return <section>user list</section>
}

export default UserList
