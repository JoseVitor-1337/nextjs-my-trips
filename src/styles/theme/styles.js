import { mode } from "@chakra-ui/theme-tools"

const global = {
	global: (props) => ({
		"html, body": {
			fontSize: "90%"
		},

		"@media only screen and (max-width: 600px)": {
			"html, body": {
				fontSize: "85%"
			}
		},
	})
}

export default global
