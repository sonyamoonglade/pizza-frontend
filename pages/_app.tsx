import '../styles/globals.scss'
import '../styles/menu_icons.scss'
import "../styles/specials.scss"
import "../styles/product-presentation.scss"
import '../styles/list.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
}

export default MyApp
