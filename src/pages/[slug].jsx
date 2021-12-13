import Head from "next/head"
import client from "graphql/client"
import { GET_PAGES, GET_PAGE_BY_SLUG } from "graphql/queries"
import { Center, VStack, Heading, Box } from "@chakra-ui/react"
import { CloseIcon } from "@chakra-ui/icons"

import LinkWrapper from "components/LinkWrapper"
import { useRouter } from "next/router"

export default function Page({ heading, body }) {
	const router = useRouter()

	if (router.isFallback) return null

	return (
		<Center w="100vw" h="100vh" bg="blue.800">
			<Head>
				<title>Página About</title>
			</Head>

			<LinkWrapper href="/">
				<CloseIcon aria-label="Close icon to link home page" boxSize={6} />
			</LinkWrapper>

			<VStack maxW="500px">
				<Heading color="white">{heading}</Heading>
				<Box
					textAlign="center"
					color="gray.200"
					dangerouslySetInnerHTML={{ __html: body }}
				/>
			</VStack>
		</Center>
	)
}

export async function getStaticPaths() {
	const { pages } = await client.request(GET_PAGES)

	const paths = pages.map(({ slug }) => ({
		params: { slug }
	}))

	return {
		paths,
		fallback: true
	}
}

export const getStaticProps = async ({ params }) => {
	const slug = params.slug || ""

	const { page } = await client.request(GET_PAGE_BY_SLUG, {
		slug
	})

	if (!page) return { notFound: true }

	return {
		props: {
			heading: page.heading,
			body: page.body.html
		}
	}
}
