import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react"

import styles from "./styles"
import colors from "./colors"
import components from "./components"
import layerStyles from "./layers"

const customTheme = extendTheme(
	{
		styles,
		colors,
		components,
		layerStyles
	},
	withDefaultColorScheme({ colorScheme: "primary" })
)

export default customTheme
