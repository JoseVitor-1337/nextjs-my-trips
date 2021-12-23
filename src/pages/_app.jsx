import Head from "next/head"
import { ChakraProvider } from "@chakra-ui/react"
import NextJSProgressbar from "nextjs-progressbar"

import { DefaultSeo } from "next-seo"
import SEO from "../../next-seo.config"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/images/icon-192x192.png" />
				<link rel="apple-touch-icon" href="/images/icon-512x512.png" />
				<link rel="manifest" href="/manifest.json" />
				<link
					rel="stylesheet"
					href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
					integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
					crossOrigin=""
				/>

				<DefaultSeo {...SEO} />
			</Head>
			<ChakraProvider>
				<NextJSProgressbar
					color="#f23415"
					startPosition={0.3}
					stopDelayMs={200}
					height={3}
				/>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	)
}

export default MyApp
