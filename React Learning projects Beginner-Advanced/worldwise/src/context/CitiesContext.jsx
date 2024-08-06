import { createContext, useState, useEffect, useReducer } from "react";

const CitiesContext = createContext()

const BASE_URL = "http://localhost:9000"

const initialState = {
    cities: [],
    isLoading: false,
    currentCity: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case "loading":
            return { ...state, isLoading: true }

        case "cities/loaded":
            return { ...state, isLoading: false, cities: action.payload }
        case "city/loaded":
            return { ...state, isLoading: false,  currentCity: action.payload }
        case "city/created":
            return {...state, isLoading: false, cities: [...state.cities, action.payload] }
        case "city/deleted":
            return {...state, isLoading: false, cities: state.cities.filter((x)=>x.id!==action.payload)}
        default:
            break;
    }
}

const CitiesProvider = ({ children }) => {
    // const [cities, setCities] = useState([])
    // const [isLoading, setIsLoading] = useState(false)
    const [currentCity, setCurrentCity] = useState({})

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const fetchCities = async () => {
            // setIsLoading(true)
            dispatch({ type: "loading" })
            const res = await fetch(`${BASE_URL}/cities`)
            const data = await res.json()
            // setCities(res)
            dispatch({ type: "cities/loaded", payload: data })
        }
        fetchCities()
    }, [])

    const getCity = async (id) => {
        dispatch({type:"loading"})
        const res = await fetch(`${BASE_URL}/cities/${id}`)
        const data = await res.json()
        setCurrentCity(data)
        dispatch({type: "city/loaded", payload: data })
    }

    const createCity = async (newCity) => {
        dispatch({type:"loading"})
        const res = await fetch(`${BASE_URL}/cities`, {
            method: "POST",
            body: JSON.stringify(newCity),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        dispatch({type:"city/created", payload: data})
    }

    const deleteCity = async (id) => {
        dispatch({type:"loading"})
        await fetch(`${BASE_URL}/cities/${id}`, {
            method: "DELETE",
        })
        dispatch({type: "city/deleted", payload: id})
    }

    return (
        <CitiesContext.Provider value={{ cities:state.cities, loading:state.isLoading, getCity, currentCity, createCity, deleteCity }}>
            {children}
        </CitiesContext.Provider>
    )
}

export { CitiesProvider, CitiesContext }