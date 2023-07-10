import Navbar from '@/components/navbar/Navbar'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>JLS Games: A sua loja online de games</title>
        <meta name="description" content="JLS Games: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico"/>
        </Head>
      <div>
        <Navbar/>
      </div>
    </>
  )
}