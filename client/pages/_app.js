import dynamic from 'next/dynamic'
import '../styles/globals.css'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout home>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
