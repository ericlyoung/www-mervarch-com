import '@styles/globals.css'
import Providers from '../Providers'

const Application = ({ Component, pageProps }) =>
  <Providers>
    <Component {...pageProps} />
  </Providers>

export default Application
