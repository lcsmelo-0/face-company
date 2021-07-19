import React, { useEffect } from 'react'
import { NextPage } from 'next'

import { listUsers } from 'app-actions'
import { Card, Typography } from 'app-components'
import { useAppDispatch, useAppSelector } from 'app-hooks'
import { UserResponse } from 'app-models'

import styles from './user-list.module.scss'

const UserList: NextPage = () => {
  const dispatch = useAppDispatch()
  const { users } = useAppSelector(state => state)

  useEffect(() => {
    dispatch(listUsers())
  }, [])

  const _handleUsers = (): React.ReactNode => {
    if (users && users.data && users.data.length > 0) {
      return users.data.map((user: UserResponse, i: KeyType) => <Card key={i} user={user} />)
    }
  }

  return (
    <section className={styles.userList}>
      <Typography variant="h2">Choose a user</Typography>
      <Typography>and enjoy the posts</Typography>
      <div className={styles.userList__users}>{_handleUsers()}</div>
    </section>
  )
}

export default UserList
