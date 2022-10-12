import Link from 'next/link'
import Head from 'next/head'

import Navbar from './Navbar'
import Footer from './Footer'

export const websiteTitle = 'Cooke CNC'

export default function Layout({ children, home }) {
    
    return(
        <div className='z-40'>
            <Head>
                <title>{websiteTitle}</title>
                <meta name="og:title" content={websiteTitle} />
            </Head>
            <div className='fixed w-full z-10'>
                <Navbar  />
            </div>

            <main className='z-0'>{children}</main>

            <Footer />
            
            {!home && (
            <div>
                <Link href="/" as='/'>
                    ← Back to home
                </Link>
            </div>
            )}

        </div>
    )
}