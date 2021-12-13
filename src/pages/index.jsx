import Head from "next/head"
import client from "graphql/client"
import { GET_PLACES } from "graphql/queries"
import dynamic from "next/dynamic"
import { InfoIcon } from "@chakra-ui/icons"

import LinkWrapper from "components/LinkWrapper"

const Map = dynamic(() => import("components/Map"), { ssr: false })

export default function Home({ places }) {
	return (
		<>
			<Head>
				<title>Página Home</title>
			</Head>

			<LinkWrapper href="/about">
				<InfoIcon aria-label="Info icon to link about page" boxSize={6} />
			</LinkWrapper>

			<Map places={places} />
		</>
	)
}

export const getStaticProps = async () => {
	const { places } = await client.request(GET_PLACES)

	return {
		props: {
			places
		}
	}
}
