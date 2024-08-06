import CityItem from "./CityItem"
import styles from "./CountryList.module.css"
import Spinner from "./Spinner"
import Message from "./Message"
import CountryItem from "./CountryItem"

function CountriesList({cities, isLoading}) {

    if(isLoading){
        return(
            <Spinner/>
        )
    }

    if(!cities.length){
        return(
            <Message message="" />
        )
    }

    //To remove duplicates based on a country property from array of objects
    // reference -  https://medium.com/@onlinemsr/how-to-remove-duplicate-objects-from-an-array-in-javascript-cc9fd4503855
    const uniqueCountries = new Map(
        cities.map(c => [c.country, c])
      );
      
      const finalCountries = [...uniqueCountries.values()];

  return (
    <ul className={styles.countrylist}>
        {finalCountries.map((country)=>{
            return(
                <CountryItem  country={country} />
            )
        })}
    </ul>
  )
}

export default CountriesList