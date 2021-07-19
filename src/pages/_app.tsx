import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'

import { Loader } from 'app-components'
import store from 'src/redux'
import '../assets/styles/_global.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <Loader />
    </Provider>
  )
}

export default MyApp
