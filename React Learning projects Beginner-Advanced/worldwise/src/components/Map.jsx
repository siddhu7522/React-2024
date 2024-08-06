import { useNavigate, useSearchParams } from "react-router-dom"
import styles from "./Map.module.css"
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet"
import { useContext, useEffect, useState } from "react"
import { CitiesContext } from "../context/CitiesContext"
import { useGeolocation } from "../hoooks/useGeolocation"
import Button from "./Button"
import { useUrlPosition } from "../hoooks/useUrlPosition"

function Map() {
  const [mapPosition, setMapPosition] = useState([40, 0])
  

  const { isLoading: isLoadingPosition, position: geoLocationPosition, getPosition } = useGeolocation()


  const{lat, lng} =useUrlPosition()

  useEffect(() => {

    if (lat && lng) {
      setMapPosition([lat, lng])
    }

  }, [lat, lng])

  useEffect(() => {
    if (geoLocationPosition) {
      setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng])
    }
  }, [geoLocationPosition])

  const { cities } = useContext(CitiesContext)
  return (
    <div className={styles.mapContainer} >
      {!geoLocationPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading..." : "Use ur position"}
        </Button>
      )}
      <MapContainer className={styles.map} center={mapPosition} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => {
          return (
            <>
              <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
                <Popup>
                  <span>{city.emoji}</span>
                  <span>{city.cityName}</span>
                </Popup>
              </Marker>
            </>
          )
        })}
        <ChangeCenter position={mapPosition} />
        <DetectClick />

      </MapContainer>
    </div>
  )
}

const ChangeCenter = ({ position }) => {
  const map = useMap()
  map.setView(position)
  return null
}

const DetectClick = () => {
  const navigate = useNavigate()
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  })
}


export default Map