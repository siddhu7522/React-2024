import React, { useEffect, useState } from 'react'

function App() {
  const [joke, setJoke] = useState("")
  const fetchJoke = async () => {
    const res = await fetch("https://api.chucknorris.io/jokes/random")
    const data = await res.json()
    console.log(data)
    setJoke(data.value)
  }
  useEffect(() => {
    fetchJoke()
  }, [])
  console.log(joke)
  return (
    <div>
      {joke}
      <button onClick={fetchJoke}>Change joke</button>
    </div>
  )
}

export default App