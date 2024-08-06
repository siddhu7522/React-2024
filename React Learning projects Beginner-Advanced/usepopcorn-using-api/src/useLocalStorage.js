import { useState, useEffect } from "react"

export const useLocalStorage = (key, initialState) => {
    const [value, setValue] = useState(() => {
        const storedValue = JSON.parse(localStorage.getItem(key))
        if (storedValue) {
            return value
        } else {
            return initialState
        }
    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
      }, [value,key])

    return {value, setValue}
}
