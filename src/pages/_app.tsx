import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { Layout } from '../components/common/Layout'

import '@styles/customnprogress.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
