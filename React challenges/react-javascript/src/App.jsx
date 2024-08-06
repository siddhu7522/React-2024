import React, { useState, useEffect } from 'react'

export default function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos")
      const data = await res.json()
      // console.log(data)
      setData(data)
    }
    fetchUsers()

  }, [])

  // useEffect(()=>{
  //   {Object.values(data).map((item)=>(

  //     Object.values(item).map((i)=>{
  //       console.log(item)
  //      // console.log(i)

  //   })
  //    ))}
  // },[data])


  // useEffect(() => {
  //   data.forEach((item) => {
  //     Object.values(item).map((i) => {
  //       console.log(i)
  //     })
  //   })

  // }, [data])

  return (
    <>
      {Object.values(data).map((item) => (
        Object.values(item).map((i) => {
          return (
            <>{i}</>
          )
        })
      ))}
{/* {data.forEach((item) => {
        Object.values(item).map((i) => {
          return (
            <span key={i}>{i}</span>
          )
        })
      })} */}

    </>

  )
}