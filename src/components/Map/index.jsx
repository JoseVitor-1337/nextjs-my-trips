import { memo } from "react"
import { Box } from "@chakra-ui/react"
import {
	MapConsumer,
	MapContainer,
	TileLayer,
	Marker,
	Popup
} from "react-leaflet"
import { useRouter } from "next/router"

import L from "leaflet"

const markerIcon = L.icon({
	iconUrl: "images/icon-192x192.png",
	iconSize: [25, 25],
	iconAnchor: [20, 20],
	popupAnchor: [0, -40]
})

const Map = ({ places }) => {
	const router = useRouter()

	return (
		<Box
			as="main"
			h="100vh"
			w="100vw"
			sx={{
				".leaflet-container": {
					bg: "blue.500"
				}
			}}
		>
			<MapContainer
				center={[0, 0]}
				zoom={3}
				minZoom={3}
				maxBounds={[
					[-180, 180],
					[180, -180]
				]}
				style={{ height: "100%", width: "100%" }}
			>
				<MapConsumer>
					{(map) => {
						map.setMinZoom(3)
						return null
					}}
				</MapConsumer>
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
							icon={markerIcon}
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
