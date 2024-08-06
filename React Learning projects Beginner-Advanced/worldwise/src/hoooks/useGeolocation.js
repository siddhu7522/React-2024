import  {useState} from "react"
export const useGeolocation = (defaultPosition=null) => {
    const [isLoading, setIsLoading] = useState(false);
    const [position, setPosition] = useState(defaultPosition);
    const [error, setError] = useState(null);
    const [countClicks, setCountClicks] = useState(0);
    
    function getPosition() {
        setCountClicks((count) => count + 1);
    
        if (!navigator.geolocation)
          return setError("Your browser does not support geolocation");
    
        setIsLoading(true);
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            setPosition({
              lat: pos.coords.latitude,
              lng: pos.coords.longitude
            });
            setIsLoading(false);
          },
          (error) => {
            setError(error.message);
            setIsLoading(false);
          }
        );
      }
    return {isLoading, position, error, countClicks, getPosition}
}