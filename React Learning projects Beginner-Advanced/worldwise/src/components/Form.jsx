// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useContext, useEffect, useState } from "react";

import styles from "./Form.module.css";
import Button from "./Button";
import BackButton from "./BackButton";
import { useUrlPosition } from "../hoooks/useUrlPosition";
import Message from "./Message"
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CitiesContext } from "../context/CitiesContext";
import { useNavigate } from "react-router";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client"

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const {createCity} =useContext(CitiesContext)
  const navigate =useNavigate()

  const [isLoadingGeocoding, setIsLoadingGeoCoding] = useState(false)

  const { lat, lng } = useUrlPosition()
  useEffect(() => {
    if (!lat && !lng) return;

    const fetchCityData = async () => {
      try {
        setIsLoadingGeoCoding(true)
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`)
        const data = await res.json()
        setCityName(data.city || data.locality || "")
        setCountry(data.countryName)
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoadingGeoCoding(false)
      }
    }
    fetchCityData()
  }, [lat, lng])

  if (!lat && !lng) {
    return (
      <Message message="Start by clicking on map" />
    )
  }

  const handleSubmit= async(e) =>{
    e.preventDefault()
    const newCity ={
      cityName,
      country,
      date,
      notes,
      position : {lat, lng}
    }
   await createCity(newCity)
    navigate("/app")
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        {/* <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        /> */}
        <ReactDatePicker onChange={(date) => setDate(date)} selected={date} />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
