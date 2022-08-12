import Link from 'next/link'
import Head from 'next/head'
import Navbar from './navbar'

export default function Layout({ children, home }) {
    const websiteTitle = 'Cooke CNC'
    return(
        <div>
            <Head>
                <title>{websiteTitle}</title>
                <meta name="og:title" content={websiteTitle} />
            </Head>
            <header>
                <Navbar />
            </header>

            <main>{children}</main>
            
            {!home && (
            <div>
                <Link href="/">
                    ← Back to home
                </Link>
            </div>
        )}

        </div>
    )
}