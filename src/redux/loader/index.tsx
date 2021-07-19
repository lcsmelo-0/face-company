import { LoaderTypes } from './types'

const INITIAL_STATE = {
  isVisible: false,
}

const loader = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoaderTypes.SHOW_LOADER:
      return { isVisible: true }

    case LoaderTypes.HIDE_LOADER:
      return { isVisible: false }

    default:
      return state
  }
}

export default loader
