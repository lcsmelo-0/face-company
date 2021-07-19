import { LoaderTypes } from './types'

const showLoader = () => ({
  type: LoaderTypes.SHOW_LOADER,
})

const hideLoader = () => ({
  type: LoaderTypes.HIDE_LOADER,
})

export { showLoader, hideLoader }
