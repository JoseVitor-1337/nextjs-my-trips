import { mode } from "@chakra-ui/theme-tools"

const global = {
	global: (props) => ({
		"html, body": {
			fontSize: "90%"
		},

		/*
    input: {
      "&:focus": {
        borderColor: `var(--chakra-colors-green-500) !important`,
        boxShadow: `0 0 0 1px var(--chakra-colors-green-500) !important`
      },
    },
    */

		"@media only screen and (max-width: 600px)": {
			"html, body": {
				fontSize: "85%"
			}
		},

		".react-pdf__Page__canvas": {
			mb: "4"
		},

		nav: {
			backgroundColor: mode("whiteAlpha.900", "gray.800")(props)
		}
	})
}

export default global
