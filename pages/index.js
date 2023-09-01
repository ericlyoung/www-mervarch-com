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
        <p>
          <img style={{ width: '500px', maxWidth: '100%' }} src='https://merv-arch.s3.us-west-2.amazonaws.com/merovingian.jpg' />
        </p>

        <em>
          "You see, there is only one constant, one universal, it is the only real truth: causality. Action. Reaction. Cause and effect." - the Merv
        </em>

        <br />
        <hr width='800' />
        <hr width='400' />
        <hr width='200' />
        <hr width='100' />
        <hr width='50' />

        <p>
          DDD, CQRS, Event Sourcing, Sanity
        </p>
      </main>

      <Footer />
    </div>
  )
}

export default Home
