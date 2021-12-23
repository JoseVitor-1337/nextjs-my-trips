import { NextSeo } from "next-seo"
import dynamic from "next/dynamic"
import client from "graphql/client"
import { GET_PLACES } from "graphql/queries"
import { InfoIcon } from "@chakra-ui/icons"

import LinkWrapper from "components/LinkWrapper"

const Map = dynamic(() => import("components/Map"), { ssr: false })

export default function Home({ places }) {
	return (
		<>
			<NextSeo
				title="My Trips"
				description="A simple project to show in maps the places where i went and show more information about they"
				canonical="https://my-trips.josevitor.com.br"
				openGraph={{
					url: "https://my-trips.josevitor.com.br",
					title: "My Trips",
					description:
						"A simple project to show in maps places where i went and show more information about they",
					site_name: "My Trips"
				}}
			/>

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
		},
		revalidate: 5
	}
}
