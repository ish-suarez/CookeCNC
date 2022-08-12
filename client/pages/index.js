import Head from 'next/head'
import Layout, { websiteTitle } from '../components/layout'

const websiteDescription = 'Supplying CNC parts worldwide, with thousands of CNC circuit boards, drives, and power supplies in stock. Field service on CNC machine tool systems. One year warranty.'

export default function Home() {
  return (

    <Layout home>
      <Head>
        <title>{ websiteTitle }</title>
        <meta name="description" content={websiteDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        Home
      </main>

    </Layout>
  )
}
