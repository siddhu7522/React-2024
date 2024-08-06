import CityItem from "./CityItem"
import styles from "./CityList.module.css"
import Spinner from "./Spinner"
import Message from "./Message"
import { useContext } from "react"
import { CitiesContext } from "../context/CitiesContext"

function CityList() {
    const {cities, isLoading} =useContext(CitiesContext)

    if(isLoading){
        return(
            <Spinner/>
        )
    }

    if(!cities.length){
        return(
            <Message message="Add your first city by clicking on a city on the map" />
        )
    }

  return (
    <ul className={styles.citylist}>
        {cities.map((city)=>{
            return(
                <CityItem key={city.id} city={city}/>
            )
        })}
    </ul>
  )
}

export default CityList