import { ChakraProvider } from "@chakra-ui/react"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/images/icon-192x192.png" />
				<link rel="apple-touch-icon" href="/images/icon-512x512.png" />
				<link rel="manifest" href="/manifest.json" />

				<meta name="theme-color" content="#06092B" />
				<meta
					name="description"
					content="A simple project to work with React, NextJS and Jest"
				/>
				<link
					rel="stylesheet"
					href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
					integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
					crossOrigin=""
				/>
			</Head>
			<ChakraProvider>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	)
}

export default MyApp
