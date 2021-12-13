import { memo } from "react"
import { Box } from "@chakra-ui/react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useRouter } from "next/router"

const Map = ({ places }) => {
	const router = useRouter()

	return (
		<Box as="main" h="100vh" w="100vw">
			<MapContainer
				center={[0, 0]}
				zoom={3}
				style={{ height: "100%", width: "100%" }}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{places.map(({ id, slug, name, location }) => {
					const { latitude, longitude } = location
					return (
						<Marker
							key={id}
							position={[latitude, longitude]}
							title={name}
							eventHandlers={{
								click: () => {
									router.push(`/place/${slug}`)
								}
							}}
						>
							<Popup>{name}</Popup>
						</Marker>
					)
				})}
			</MapContainer>
		</Box>
	)
}

export default memo(Map)
