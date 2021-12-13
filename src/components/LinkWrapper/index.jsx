import { memo } from "react"
import { Box } from "@chakra-ui/react"

import Link from "next/link"

const LinkWrapper = ({ href, children }) => {
	return (
		<Box
			position="fixed"
			zIndex="1100"
			top={3}
			right={5}
			color="blue.300"
			transition="all 0.4s"
			cursor="pointer"
			_hover={{ color: "blue.500" }}
		>
			<Link href={href} passHref>
				{children}
			</Link>
		</Box>
	)
}

export default memo(LinkWrapper)
