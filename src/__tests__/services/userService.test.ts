import { runSaga } from '@redux-saga/core'
import { fetchUsers } from '../../redux/users/saga'
import * as api from '../../services/user.service'

describe('User service tests', () => {
  it('Should call get all users actions', async () => {
    const request = jest.spyOn(api, 'getAllUsers').mockImplementation(() => Promise.resolve())
    const dispatched = []

    runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      fetchUsers,
    )
    expect(request).toHaveBeenCalledTimes(1)
    request.mockClear()
  })
})
