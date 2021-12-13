import { render, screen } from "@testing-library/react"

import Map from "."

describe("<Map />", () => {
	it("should render without any marker", () => {
		render(<Map places={[]} />)

		expect(
			screen.getByRole("link", { name: /a js library for interactive maps/i })
		).toBeInTheDocument()
	})

	it("should render with the marker in correct place", () => {
		const places = [
			{
				id: "1",
				name: "Petrópoles",
				slug: "petropoles",
				location: {
					latitude: 0,
					longitude: 0
				}
			},
			{
				id: "2",
				name: "Boa vista",
				slug: "boa-vista",
				location: {
					latitude: 129,
					longitude: -50
				}
			}
		]

		render(<Map places={places} />)

		expect(screen.getByTitle(/petrópoles/i)).toBeInTheDocument()
		expect(screen.getByTitle(/boa vista/i)).toBeInTheDocument()
	})
})
