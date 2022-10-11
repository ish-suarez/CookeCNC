import Dynamic from 'next/dynamic';
import Head from 'next/head'
import { websiteTitle } from '../components/layout'

const Header = Dynamic(() => import('../components/Header'), {ssr: false})
const Main = Dynamic(() => import('../components/Main'), {ssr: false})



const websiteDescription = 'Supplying CNC parts worldwide, with thousands of CNC circuit boards, drives, and power supplies in stock. Field service on CNC machine tool systems. One year warranty.'


export default function Home() {
  return (

    <div>
      <Head>
        <title>{ websiteTitle }</title>
        <meta name="description" content={websiteDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <Main />
    </div>

  )
}
