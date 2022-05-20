import '../styles/globals.css'
import Router from 'next/router'
import NProgress from 'nprogress'
import { ChakraProvider } from '@chakra-ui/react'

import Layout from '../components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
		<>
			<Head>
				
			</Head>
			<ChakraProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ChakraProvider>
		</>
	)
}

export default MyApp
