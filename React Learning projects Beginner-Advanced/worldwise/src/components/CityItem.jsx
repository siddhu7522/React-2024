import { Link } from "react-router-dom";
import styles from "./CityItem.module.css"
import { useContext } from "react";
import { CitiesContext } from "../context/CitiesContext";
import { AuthContext } from "../context/AuthContext";


const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, country, emoji, date, notes, position, id } = city
  const {currentCity, deleteCity} =useContext(CitiesContext)

  const handleClick =(e) =>{
    e.preventDefault()
    deleteCity(id)
  }

  
  return (
    <li >
      <Link className={`${styles.cityItem} ${currentCity.id===id ? styles["cityItem--active"] : "" }`} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
        <span className={styles.emoji}>
          {emoji}
        </span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button onClick={handleClick} className={styles.deleteBtn}>&times;</button>
      </Link>

    </li>
  )
}

export default CityItem