import { showLoader, hideLoader } from 'app-actions'
import store from '../redux'

const control = (isFetching: boolean) => {
  if (isFetching) {
    store.dispatch(showLoader())
  } else {
    store.dispatch(hideLoader())
  }
}

const hide = () => {}

export { control }
