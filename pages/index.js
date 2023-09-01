import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

const Home = () => {
  return (
    <div className='container'>
      <Head>
        <title>The Merovingian Architecture</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header title='The Merovingian Architecture' />
        <p className='description'>
          DDD, CQRS, Event Sourcing, Sanity
        </p>
      </main>

      <Footer />
    </div>
  )
}

export default Home
