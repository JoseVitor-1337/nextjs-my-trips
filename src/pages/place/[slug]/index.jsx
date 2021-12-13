import Head from "next/head"
import client from "graphql/client"
import { GET_PLACES, GET_PLACE_BY_SLUG } from "graphql/queries"
import { Center, VStack, Heading, Box } from "@chakra-ui/react"
import { CloseIcon } from "@chakra-ui/icons"

import LinkWrapper from "components/LinkWrapper"
import { useRouter } from "next/router"

export default function Place({ place }) {
	const router = useRouter()

	if (router.isFallback) return null

	console.log(`place`, place)

	return (
		<Center maxW="100vw" minH="100vh" bg="blue.800">
			<Head>
				<title>{place.name}</title>
			</Head>

			<LinkWrapper href="/">
				<CloseIcon aria-label="Close icon to link home page" boxSize={6} />
			</LinkWrapper>

			<VStack
				p={{ base: "2", md: "0" }}
				maxW={{ base: "100%", md: "600px" }}
				spacing={4}
			>
				<Heading textAlign="center" color="white">
					{place.name}
				</Heading>
				<Box
					textAlign="center"
					color="gray.200"
					dangerouslySetInnerHTML={{ __html: place.description.html }}
				/>

				{place.gallery.map((picture, index) => (
					<img
						key={`${picture.url} - ${index}`}
						src={picture.url}
						alt={place.name}
					/>
				))}
			</VStack>
		</Center>
	)
}

export async function getStaticPaths() {
	const { places } = await client.request(GET_PLACES)

	const paths = places.map(({ slug }) => ({
		params: { slug }
	}))

	return {
		paths,
		fallback: true
	}
}

export const getStaticProps = async ({ params }) => {
	const slug = params.slug || ""

	const { place } = await client.request(GET_PLACE_BY_SLUG, {
		slug
	})

	if (!place) return { notFound: true }

	return {
		props: {
			place
		}
	}
}
